<script setup lang="ts">
const { current, close } = useDocumentViewer()
const { t } = usePortfolioSettings()

const ZOOM_MIN = 0.5
const ZOOM_MAX = 3
const ZOOM_STEP = 0.25

const zoom = ref(1)
const status = ref<'loading' | 'ready' | 'error'>('loading')
const closeButton = ref<HTMLButtonElement | null>(null)

const zoomLabel = computed(() => `${Math.round(zoom.value * 100)}%`)
const canZoomIn = computed(() => zoom.value < ZOOM_MAX)
const canZoomOut = computed(() => zoom.value > ZOOM_MIN)

const setZoom = (value: number) => {
  zoom.value = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, Number(value.toFixed(2))))
}

const zoomIn = () => setZoom(zoom.value + ZOOM_STEP)
const zoomOut = () => setZoom(zoom.value - ZOOM_STEP)
const resetZoom = () => setZoom(1)

const onWheel = (event: WheelEvent) => {
  if (!event.ctrlKey) return
  event.preventDefault()
  setZoom(zoom.value + (event.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP) / 2)
}

const onIframeLoad = () => {
  status.value = 'ready'
}

const onIframeError = () => {
  status.value = 'error'
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') close()
  if (event.key === '+' || event.key === '=') zoomIn()
  if (event.key === '-') zoomOut()
  if (event.key === '0') resetZoom()
}

watch(
  () => current.value?.src,
  (src) => {
    zoom.value = 1
    if (src) {
      status.value = 'loading'
    }
  },
)

watch(
  () => !!current.value,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    if (isOpen) {
      window.addEventListener('keydown', onKeydown)
      nextTick(() => closeButton.value?.focus())
    } else {
      window.removeEventListener('keydown', onKeydown)
    }
  },
)

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition name="viewer">
      <div
        v-if="current"
        class="viewer"
        role="dialog"
        aria-modal="true"
        :aria-label="current.title"
        @click.self="close"
        @contextmenu.prevent
      >
        <div class="viewer-panel">
          <header class="viewer-toolbar">
            <h2 class="viewer-title">{{ current.title }}</h2>

            <div class="viewer-controls">
              <button
                type="button"
                class="viewer-button"
                :disabled="!canZoomOut"
                :aria-label="t.viewer.zoomOut"
                :title="t.viewer.zoomOut"
                @click="zoomOut"
              >
                −
              </button>

              <button
                type="button"
                class="viewer-zoom"
                :title="t.viewer.reset"
                @click="resetZoom"
              >
                {{ zoomLabel }}
              </button>

              <button
                type="button"
                class="viewer-button"
                :disabled="!canZoomIn"
                :aria-label="t.viewer.zoomIn"
                :title="t.viewer.zoomIn"
                @click="zoomIn"
              >
                +
              </button>

              <button
                ref="closeButton"
                type="button"
                class="viewer-button viewer-close"
                :aria-label="t.viewer.close"
                :title="t.viewer.close"
                @click="close"
              >
                ✕
              </button>
            </div>
          </header>

          <div
            class="viewer-scroller"
            @wheel="onWheel"
          >
            <div v-if="status === 'loading'" class="viewer-message">
              {{ t.viewer.loading }}
            </div>
            <div v-else-if="status === 'error'" class="viewer-message">
              {{ t.viewer.error }}
            </div>

            <!-- PDF Render Container with Zoom Transform & Shield -->
            <div
              class="viewer-content-wrapper"
              :class="{ 'is-hidden': status === 'error' }"
            >
              <div
                class="viewer-zoom-container"
                :style="{ transform: `scale(${zoom})`, transformOrigin: 'top center' }"
              >
                <!-- Native Browser PDF Embed with toolbar hidden -->
                <iframe
                  :src="`${current.src}#toolbar=0&navpanes=0&scrollbar=1&view=Fit`"
                  class="viewer-frame"
                  title="Document Preview"
                  @load="onIframeLoad"
                  @error="onIframeError"
                />
              </div>
              <!-- Invisible Shield Layer to block direct context-menu / save-as -->
              <div class="viewer-shield" @contextmenu.prevent />
            </div>
          </div>

          <footer class="viewer-footer">
            {{ t.viewer.notice }}
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
