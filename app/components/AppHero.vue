
<script setup lang="ts">
const { t } = usePortfolioSettings()
const { setSection } = useNavigationState()

const services = computed(() => t.value?.hero?.services ?? [])
</script>

<template>
  <section id="home" class="hero-section">
    <div class="hero-container">

      <!-- Main Content -->
      <div class="hero-content">

        <!-- Status -->
        <div class="hero-status">
          <span class="status-indicator"></span>
          <span>{{ t?.hero?.status }}</span>
        </div>

        <!-- Introduction -->
        <p class="hero-greeting">
          {{ t?.hero?.greeting }}
        </p>

        <h1 class="hero-title">
          Gunawan Dzakwan Sholeh
        </h1>

        <!-- Professional Headline -->
        <h2 class="hero-subtitle">
          {{ t?.hero?.headline }}
          <span>{{ t?.hero?.headlineHighlight }}</span>
        </h2>

        <!-- Description -->
        <p class="hero-description">
          {{ t?.hero?.description }}
        </p>

        <!-- Action Buttons -->
        <div class="hero-actions">
          <button
            type="button"
            class="hero-button hero-button-primary"
            @click="setSection('projects')"
          >
            <span>{{ t?.hero?.viewProjects }}</span>
            <svg class="btn-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </button>

          <button
            type="button"
            class="hero-button hero-button-secondary"
            @click="setSection('contact')"
          >
            {{ t?.hero?.contactMe }}
          </button>

          <a
            href="/documents/Gunawan-Dzakwan-Sholeh-CV.pdf"
            class="hero-button hero-button-ghost"
            download="Gunawan-Dzakwan-Sholeh-CV.pdf"
          >
            <svg class="btn-icon btn-icon-download" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>{{ t?.hero?.downloadCV }}</span>
          </a>
        </div>

      </div>

      <!-- Professional Overview -->
      <aside
        class="hero-panel"
        :aria-label="t?.hero?.overview"
      >

        <!-- Panel Header -->
        <div class="hero-panel-header">
          <span>{{ t?.hero?.overview }}</span>

          <span
            class="hero-panel-icon"
            aria-hidden="true"
          >
            ✳
          </span>
        </div>

        <!-- Professional Services -->
        <div class="hero-panel-content">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="hero-focus"
          >
            <span class="hero-focus-number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <div class="hero-focus-content">
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>

        <!-- Panel Footer -->
        <div class="hero-panel-footer">
          <span>{{ t?.hero?.location }}</span>
          <span>{{ t?.hero?.specialty }}</span>
        </div>

      </aside>

    </div>
  </section>
</template>
