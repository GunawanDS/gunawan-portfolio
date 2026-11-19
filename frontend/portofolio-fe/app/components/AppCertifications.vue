
<script setup lang="ts">
const { t } = usePortfolioSettings()

const { open: openDocument } = useDocumentViewer()

const certifications = computed(() => t.value.certifications.items)
const professionalSkills = computed(() => t.value.certifications.professionalSkills)
const languages = computed(() => t.value.certifications.languages)
</script>

<template>
  <section id="certifications" class="certifications-section">
    <div class="certifications-container">

      <div class="certifications-heading">
        <p class="section-eyebrow">{{ t.certifications.eyebrow }}</p>
        <h2 class="section-title">{{ t.certifications.title }}</h2>
        <p class="certifications-intro">
          {{ t.certifications.subtitle }}
        </p>
      </div>

      <div class="certifications-grid">
        <article
          v-for="item in certifications"
          :key="item.name"
          v-reveal class="certification-card"
        >
          <div class="certification-card-top">
            <div class="certification-logo">
              <img
                :src="item.logo"
                :alt="item.logoAlt"
                loading="lazy"
              />
            </div>

            <span class="certification-type">
              {{ t.certifications.badge }}            </span>
          </div>

          <div class="certification-info">
            <h3>{{ item.name }}</h3>
            <p>{{ item.issuer }}</p>
          </div>

          <div class="certification-footer">
            <span class="certification-date">
              {{ item.date }}
            </span>
            <button
              type="button"
              class="doc-button doc-button-small"
              :aria-label="`${t.certifications.viewLabel}: ${item.name}`"
              @click="openDocument(item.file, item.name)"
            >
              {{ t.certifications.viewLabel }}
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </article>
      </div>

      <div class="additional-qualifications">
        <article v-reveal class="qualification-card">
          <p class="section-eyebrow">{{ t.certifications.competenciesEyebrow }}</p>
          <h3>{{ t.certifications.competenciesTitle }}</h3>

          <ul class="qualification-list">
            <li v-for="skill in professionalSkills" :key="skill">
              <span class="qualification-check">✓</span>
              <span>{{ skill }}</span>
            </li>
          </ul>
        </article>

        <article v-reveal class="qualification-card">
          <p class="section-eyebrow">{{ t.certifications.languagesEyebrow }}</p>
          <h3>{{ t.certifications.languagesTitle }}</h3>

          <div
            v-for="language in languages"
            :key="language.name"
            class="language-item"
          >
            <span>{{ language.name }}</span>
            <span class="language-level">{{ language.level }}</span>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>
