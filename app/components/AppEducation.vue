<script setup lang="ts">
const { t } = usePortfolioSettings()

const education = computed(() => t.value.education.items)
</script>

<template>
  <section id="education" class="education-section">
    <div class="education-container">
      <div class="education-heading">
        <p class="section-eyebrow">{{ t.education.eyebrow }}</p>
        <h2 class="section-title">
          {{ t.education.title }}
        </h2>
      </div>

      <div class="education-list">
        <article
          v-for="item in education"
          :key="item.institution"
          v-reveal class="education-card"
        >
          <div class="education-marker">
            <span></span>
          </div>

          <div class="education-content">
            <h3>{{ item.institution }}</h3>
            <h4>{{ item.degree }}</h4>
            <p>{{ item.description }}</p>

            <span
              v-if="item.achievement"
              class="education-achievement"
            >
              {{ item.achievement }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
