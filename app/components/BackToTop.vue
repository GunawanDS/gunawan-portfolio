<script setup lang="ts">
const { t } = usePortfolioSettings()

const isVisible = ref(false)
const progress = ref(0)

const RADIUS = 20
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

const dashOffset = computed(() => CIRCUMFERENCE * (1 - progress.value))

const onScroll = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  isVisible.value = scrollTop > 320
  progress.value = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <Transition name="back-top-fade">
    <button
      v-if="isVisible"
      type="button"
      class="back-to-top"
      :aria-label="t.footer.backTop"
      :title="t.footer.backTop"
      @click="scrollToTop"
    >
      <svg class="back-to-top-ring" viewBox="0 0 46 46" width="46" height="46" aria-hidden="true">
        <circle
          class="back-to-top-track"
          cx="23"
          cy="23"
          :r="RADIUS"
          fill="none"
          stroke-width="2"
        />
        <circle
          class="back-to-top-progress"
          cx="23"
          cy="23"
          :r="RADIUS"
          fill="none"
          stroke-width="2.2"
          stroke-linecap="round"
          :stroke-dasharray="CIRCUMFERENCE"
          :stroke-dashoffset="dashOffset"
        />
      </svg>

      <svg class="back-to-top-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  </Transition>
</template>
