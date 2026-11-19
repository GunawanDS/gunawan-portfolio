<script setup lang="ts">
import { usePortfolioSettings } from '~/composables/usePortfolioSettings'
import { useProjectModal } from '~/composables/useProjectModal'

const { t } = usePortfolioSettings()
const { openProject } = useProjectModal()

const projects = computed(() => t.value.projects.items)
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="projects-container">
      <div class="projects-heading">
        <p class="section-eyebrow">{{ t.projects.eyebrow }}</p>
        <h2 class="section-title">
          {{ t.projects.title }}
        </h2>
        <p class="projects-intro">
          {{ t.projects.subtitle }}
        </p>
      </div>

      <div class="projects-list">
        <article
          v-for="project in projects"
          :key="project.id || project.title"
          v-reveal class="project-card"
        >
          <div class="project-topline">
            <span class="project-category">{{ project.category }}</span>

            <span class="project-status">
              {{ project.status }}
            </span>
          </div>

          <div class="project-main">
            <div class="project-title-group">
              <h3>{{ project.title }}</h3>
            </div>

            <p class="project-lead-desc">
              {{ project.shortDescription || project.context }}
            </p>

            <div class="project-role-badge">
              <span class="role-badge-label">{{ t.projects.labels.role }}:</span>
              <span class="role-badge-value">{{ project.role || 'Fullstack Developer' }}</span>
            </div>

            <div class="project-details">
              <div class="project-detail">
                <h4>{{ t.projects.labels.context }}</h4>
                <p>{{ project.context }}</p>
              </div>

              <div class="project-detail">
                <h4>{{ t.projects.labels.challenge }}</h4>
                <p>{{ project.challenge }}</p>
              </div>

              <div class="project-detail">
                <h4>{{ t.projects.labels.approach }}</h4>
                <p>{{ project.approach }}</p>
              </div>

              <div class="project-detail">
                <h4>{{ t.projects.labels.contribution }}</h4>
                <ul>
                  <li
                    v-for="item in project.contribution.slice(0, 3)"
                    :key="item"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="project-footer-row">
              <div class="project-technologies">
                <span
                  v-for="technology in project.technologies"
                  :key="technology"
                  class="technology-tag"
                >
                  {{ technology }}
                </span>
              </div>

              <button
                type="button"
                class="project-detail-btn"
                @click="openProject(project as any)"
              >
                <span>{{ t.projects.labels.viewDetail }}</span>
                <span class="btn-arrow" aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>