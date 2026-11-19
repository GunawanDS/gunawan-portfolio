
<script setup lang="ts">
const { t } = usePortfolioSettings()

const categories = computed(() => t.value.skills.categories)
const learningTechnologies = computed(() => t.value.skills.learning)
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="skills-container">
      <div class="skills-heading">
        <p class="section-eyebrow">{{ t.skills.eyebrow }}</p>

        <h2 class="section-title">
          {{ t.skills.title }}
        </h2>

        <p class="skills-intro">
          {{ t.skills.subtitle }}
        </p>
      </div>

      <div class="technology-categories">
        <article
          v-for="category in categories"
          :key="category.title"
          v-reveal class="technology-category"
        >
          <div class="technology-category-heading">
            <h3>{{ category.title }}</h3>
            <p>{{ category.description }}</p>
          </div>

          <div class="technology-grid">
            <div
              v-for="technology in category.technologies"
              :key="technology.name"
              class="technology-card"
            >
              <div class="technology-icon">
                <i
                  v-if="technology.icon"
                  :class="technology.icon"
                  :aria-label="technology.name"
                  role="img"
                ></i>

                <span v-else class="technology-symbol">
                  {{ technology.symbol }}
                </span>
              </div>

              <h4>{{ technology.name }}</h4>
            </div>
          </div>
        </article>
      </div>

      <div class="learning-section">
        <div class="learning-heading">
          <p class="section-eyebrow">{{ t.skills.learningEyebrow }}</p>
          <h3>{{ t.skills.learningTitle }}</h3>
        </div>

        <div
          v-for="technology in learningTechnologies"
          :key="technology.name"
          v-reveal class="learning-card"
        >
          <div class="learning-technology">
            <i :class="technology.icon" :aria-label="technology.name"></i>
          </div>

          <div class="learning-content">
            <span class="learning-eyebrow">{{ t.skills.learningTag }}</span>
            <h3>{{ technology.name }}</h3>
            <p>{{ technology.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>