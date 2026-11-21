
<script setup lang="ts">
const { t } = usePortfolioSettings()

const stats = computed(() => [
  { value: '2+', label: t.value.about.stats?.yearsExp ?? 'Years Experience' },
  { value: '10+', label: t.value.about.stats?.projects ?? 'Projects Built' },
  { value: '3', label: t.value.about.stats?.certifications ?? 'Certifications' },
  { value: '5+', label: t.value.about.stats?.tech ?? 'Tech Stacks' },
])
</script>

<template>
  <section id="about" class="about-section">
    <div class="about-container">

      <!-- Section Heading -->
      <div class="about-heading">
        <p class="section-eyebrow">{{ t.about.eyebrow }}</p>
        <h2 class="section-title">{{ t.about.title }}</h2>
      </div>

      <!-- Main About Layout -->
      <div class="about-layout">

        <!-- Left: Description + Stats -->
        <div class="about-left">

          <!-- Paragraphs -->
          <div class="about-description">
            <p
              v-for="(paragraph, index) in t.about.paragraphs"
              :key="index"
            >
              {{ paragraph }}
            </p>
          </div>

          <!-- Stats Row -->
          <div class="about-stats">
            <div
              v-for="(stat, index) in stats"
              :key="index"
              class="about-stat"
            >
              <span class="about-stat-value">{{ stat.value }}</span>
              <span class="about-stat-label">{{ stat.label }}</span>
            </div>
          </div>

        </div>

        <!-- Right: Professional Highlights -->
        <div class="about-highlights">
          <article
            v-for="(highlight, index) in t.about.highlights"
            :key="index"
            v-reveal class="about-highlight"
          >
            <div class="about-highlight-header">
              <span class="about-highlight-icon" aria-hidden="true">
                <!-- System Development (Layers) -->
                <svg v-if="index === 0" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
                <!-- Technical Problem Solving (Terminal) -->
                <svg v-else-if="index === 1" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
                <!-- Business & System Analysis (Activity / Chart) -->
                <svg v-else viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </span>
            </div>
            <div>
              <h3>{{ highlight.title }}</h3>
              <p>{{ highlight.description }}</p>
            </div>
            <div class="about-highlight-bar" />
          </article>
        </div>

      </div>

    </div>
  </section>
</template>
