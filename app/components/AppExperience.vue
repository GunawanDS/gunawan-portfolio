
<script setup lang="ts">
const { t } = usePortfolioSettings()

const { open: openDocument } = useDocumentViewer()

const experiences = computed(() => t.value.experience.items)
</script>

<template>
  <section id="experience" class="experience-section">
    <div class="experience-container">

      <div class="experience-heading">
        <p class="experience-label">{{ t.experience.eyebrow }}</p>

        <h2 class="experience-title">
          {{ t.experience.title }}
        </h2>

        <p class="experience-description">
          {{ t.experience.subtitle }}
        </p>
      </div>

      <div class="experience-list">
        <article
          v-for="(experience, index) in experiences"
          :key="experience.company"
          v-reveal class="experience-card"
        >
          <div class="experience-aside">
            <div v-if="experience.logo" class="experience-company-logo">
              <img
                :src="experience.logo"
                :alt="experience.company"
                loading="lazy"
              />
            </div>
          </div>

          <div class="experience-content">
            <div class="experience-meta">
              <span>{{ experience.period }}</span>
              <span>{{ experience.type }}</span>
            </div>

            <h3>{{ experience.position }}</h3>

            <h4>{{ experience.company }}</h4>

            <p class="experience-text">
              {{ experience.description }}
            </p>

            <ul class="experience-responsibilities">
              <li
                v-for="responsibility in experience.responsibilities"
                :key="responsibility"
              >
                {{ responsibility }}
              </li>
            </ul>

            <button
              v-if="experience.proof"
              type="button"
              class="doc-button"
              @click="openDocument(experience.proof, `${experience.company} — ${t.experience.viewProof}`)"
            >
              <span aria-hidden="true">🔍</span>
              {{ t.experience.viewProof }}
            </button>

            <div class="experience-technologies">
              <span
                v-for="technology in experience.technologies"
                :key="technology"
              >
                {{ technology }}
              </span>
            </div>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>
