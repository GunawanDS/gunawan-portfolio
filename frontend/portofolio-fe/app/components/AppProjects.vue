<script setup lang="ts">
const { t } = usePortfolioSettings()

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
          v-for="(project, index) in projects"
          :key="project.title"
          v-reveal class="project-card"
        >
          <div class="project-topline">
            <span class="project-number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <span class="project-status">
              {{ project.status }}
            </span>
          </div>

          <div class="project-main">
            <div class="project-title-group">
              <p class="project-category">{{ project.category }}</p>
              <h3>{{ project.title }}</h3>
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
                    v-for="item in project.contribution"
                    :key="item"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="project-technologies">
              <span
                v-for="technology in project.technologies"
                :key="technology"
                class="technology-tag"
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