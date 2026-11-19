
<script setup lang="ts">
const { t } = usePortfolioSettings()

const stats = computed(() => [
  { value: '2+', label: t.value.about.stats?.yearsExp ?? 'Years Experience' },
  { value: '10+', label: t.value.about.stats?.projects ?? 'Projects Built' },
  { value: '3', label: t.value.about.stats?.certifications ?? 'Certifications' },
  { value: '5+', label: t.value.about.stats?.tech ?? 'Tech Stacks' },
])

const highlightIcons = ['🏗️', '🔧', '📊']
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
              <span class="about-highlight-icon">{{ highlightIcons[index] }}</span>
              <span class="about-highlight-number">
                {{ String(index + 1).padStart(2, '0') }}
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
