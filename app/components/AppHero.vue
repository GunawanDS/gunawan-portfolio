
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
            {{ t?.hero?.viewProjects }}
            <span aria-hidden="true">↗</span>
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
            <span aria-hidden="true">↓</span>
            {{ t?.hero?.downloadCV }}
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
