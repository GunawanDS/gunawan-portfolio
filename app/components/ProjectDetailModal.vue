<script setup lang="ts">
import { useProjectModal } from '~/composables/useProjectModal'
import { usePortfolioSettings } from '~/composables/usePortfolioSettings'

const { activeProject, isOpen, closeProject } = useProjectModal()
const { t } = usePortfolioSettings()

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeProject()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="isOpen && activeProject"
        class="project-modal-backdrop"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="activeProject.title"
        @click.self="closeProject"
      >
        <div class="project-modal-container">
          <!-- Modal Header -->
          <div class="project-modal-header">
            <div class="modal-title-area">
              <span class="modal-badge">{{ activeProject.category }}</span>
              <h2>{{ activeProject.title }}</h2>
              <p class="modal-status">{{ activeProject.status }}</p>
            </div>

            <button
              type="button"
              class="modal-close-btn"
              :aria-label="t.projects.labels.closeModal"
              @click="closeProject"
            >
              <span aria-hidden="true">✕</span>
            </button>
          </div>

          <!-- Modal Scrollable Content -->
          <div class="project-modal-body">
            <!-- Overview & Role Banner -->
            <div class="detail-section detail-overview-card">
              <div class="detail-role-pill">
                <span class="detail-role-label">{{ t.projects.labels.role }}:</span>
                <span class="detail-role-value">{{ activeProject.role }}</span>
              </div>
              <p class="detail-lead">{{ activeProject.shortDescription }}</p>
            </div>

            <!-- Context & Challenge Grid -->
            <div class="detail-grid-two">
              <div class="detail-box">
                <div class="detail-box-header">
                  <span class="detail-box-icon">📌</span>
                  <h3>{{ t.projects.labels.context }}</h3>
                </div>
                <p>{{ activeProject.context }}</p>
              </div>

              <div class="detail-box">
                <div class="detail-box-header">
                  <span class="detail-box-icon">⚡</span>
                  <h3>{{ t.projects.labels.challenge }}</h3>
                </div>
                <p>{{ activeProject.challenge }}</p>
              </div>
            </div>

            <!-- Approach -->
            <div class="detail-section detail-approach-card">
              <div class="detail-box-header">
                <span class="detail-box-icon">💡</span>
                <h3>{{ t.projects.labels.approach }}</h3>
              </div>
              <p>{{ activeProject.approach }}</p>
            </div>

            <!-- Architecture Visualization (if available, e.g. IMMAX) -->
            <div
              v-if="activeProject.architecture"
              class="detail-section detail-arch-wrapper"
            >
              <div class="detail-section-title">
                <span class="detail-box-icon">🏗️</span>
                <h3>{{ t.projects.labels.systemArchitecture }}</h3>
              </div>

              <!-- Interactive Architecture Diagram Flow -->
              <div v-if="activeProject.id === 'simrs'" class="arch-flow-diagram">
                <div class="arch-client-row">
                  <div class="arch-node arch-web">
                    <span class="arch-node-badge">Client & Internal Users</span>
                    <h4>SIMRS Web Modules</h4>
                    <p>Billing · Farmasi · Gudang · Rekam Medis (RME) · Keuangan</p>
                  </div>
                  <div class="arch-node arch-mobile">
                    <span class="arch-node-badge">External Services</span>
                    <h4>Vendor & Government</h4>
                    <p>Bridging Voucher Vendor · SATUSEHAT Kemenkes · BPJS</p>
                  </div>
                </div>

                <div class="arch-connector-down">
                  <span class="arch-arrow-line" />
                  <span class="arch-connector-label">HTTP / REST / JSON Bridging & Internal Requests</span>
                  <span class="arch-arrow-line" />
                </div>

                <div class="arch-backend-row">
                  <div class="arch-node arch-backend">
                    <span class="arch-node-badge">Backend & Business Logic</span>
                    <h4>PHP Native / Laravel</h4>
                    <p>Voucher Bridging · SATUSEHAT Data Mapping · Modular Hospital Logic</p>
                  </div>
                </div>

                <div class="arch-connector-down">
                  <span class="arch-arrow-line" />
                  <span class="arch-connector-label">Transactional SQL Queries</span>
                  <span class="arch-arrow-line" />
                </div>

                <div class="arch-db-row">
                  <div class="arch-node arch-database">
                    <span class="arch-node-badge">Database & Auditing</span>
                    <h4>PostgreSQL</h4>
                    <p>Clinical Data · Electronic Medical Records · Voucher Logs</p>
                  </div>
                </div>
              </div>

              <div v-else class="arch-flow-diagram">
                <div class="arch-client-row">
                  <div class="arch-node arch-mobile">
                    <span class="arch-node-badge">Mobile Client</span>
                    <h4>React Native</h4>
                    <p>Mobile Application</p>
                  </div>
                  <div class="arch-node arch-web">
                    <span class="arch-node-badge">Web Client</span>
                    <h4>Next.js</h4>
                    <p>Web CMS Portal</p>
                  </div>
                </div>

                <div class="arch-connector-down">
                  <span class="arch-arrow-line" />
                  <span class="arch-connector-label">REST API (JSON over HTTP)</span>
                  <span class="arch-arrow-line" />
                </div>

                <div class="arch-backend-row">
                  <div class="arch-node arch-backend">
                    <span class="arch-node-badge">Backend Service</span>
                    <h4>Node.js + Express.js</h4>
                    <p>API Routing · Business Logic · Data Validation</p>
                  </div>
                </div>

                <div class="arch-connector-down">
                  <span class="arch-arrow-line" />
                  <span class="arch-connector-label">Database Transactions</span>
                  <span class="arch-arrow-line" />
                </div>

                <div class="arch-db-row">
                  <div class="arch-node arch-database">
                    <span class="arch-node-badge">Persistence</span>
                    <h4>Database Storage</h4>
                    <p>Persistent Application & Content Data</p>
                  </div>
                </div>
              </div>

              <!-- Architecture Layer Responsibilities -->
              <div class="arch-layers-grid">
                <div
                  v-for="layer in activeProject.architecture.layers"
                  :key="layer.title"
                  class="arch-layer-card"
                >
                  <div class="arch-layer-head">
                    <h4>{{ layer.title }}</h4>
                    <span v-if="layer.tech" class="arch-layer-tech">{{ layer.tech }}</span>
                  </div>
                  <ul class="arch-layer-list">
                    <li v-for="(resp, rIndex) in layer.responsibilities" :key="rIndex">
                      {{ resp }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Data Flow (if available, e.g. IMMAX) -->
            <div
              v-if="activeProject.dataFlow && activeProject.dataFlow.length > 0"
              class="detail-section"
            >
              <div class="detail-section-title">
                <span class="detail-box-icon">🔄</span>
                <h3>{{ t.projects.labels.dataFlow }}</h3>
              </div>

              <div class="dataflow-grid">
                <div
                  v-for="flow in activeProject.dataFlow"
                  :key="flow.flowTitle"
                  class="dataflow-card"
                >
                  <h4>{{ flow.flowTitle }}</h4>
                  <ol class="dataflow-steps">
                    <li v-for="(step, sIndex) in flow.steps" :key="sIndex">
                      {{ step }}
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <!-- Deep Dive Technical Contributions -->
            <div class="detail-section">
              <div class="detail-section-title">
                <span class="detail-box-icon">🛠️</span>
                <h3>{{ t.projects.labels.contribution }}</h3>
              </div>

              <div class="contributions-grid">
                <!-- Mobile Contribution (if exists) -->
                <div
                  v-if="activeProject.mobileDetails && activeProject.mobileDetails.length > 0"
                  class="contribution-column"
                >
                  <div class="col-header mobile-accent">
                    <span>📱</span>
                    <h4>{{ t.projects.labels.mobileContribution }}</h4>
                  </div>
                  <ul class="col-list">
                    <li v-for="(item, idx) in activeProject.mobileDetails" :key="idx">
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <!-- Backend Contribution (if exists) -->
                <div
                  v-if="activeProject.backendDetails && activeProject.backendDetails.length > 0"
                  class="contribution-column"
                >
                  <div class="col-header backend-accent">
                    <span>⚙️</span>
                    <h4>{{ t.projects.labels.backendContribution }}</h4>
                  </div>
                  <ul class="col-list">
                    <li v-for="(item, idx) in activeProject.backendDetails" :key="idx">
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <!-- Frontend Contribution (if exists) -->
                <div
                  v-if="activeProject.frontendDetails && activeProject.frontendDetails.length > 0"
                  class="contribution-column"
                >
                  <div class="col-header frontend-accent">
                    <span>💻</span>
                    <h4>{{ t.projects.labels.frontendContribution }}</h4>
                  </div>
                  <ul class="col-list">
                    <li v-for="(item, idx) in activeProject.frontendDetails" :key="idx">
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>

              <!-- General Core Contribution List (Fallback/Summary) -->
              <div
                v-if="!activeProject.backendDetails && !activeProject.mobileDetails"
                class="general-contribution-box"
              >
                <ul class="col-list">
                  <li v-for="(item, idx) in activeProject.contribution" :key="idx">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- Categorized Technology Stack -->
            <div class="detail-section">
              <div class="detail-section-title">
                <span class="detail-box-icon">🧩</span>
                <h3>{{ t.projects.labels.techStack }}</h3>
              </div>

              <div class="tech-tag-collection">
                <span
                  v-for="tech in activeProject.technologies"
                  :key="tech"
                  class="modal-tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="project-modal-footer">
            <button
              type="button"
              class="modal-dismiss-btn"
              @click="closeProject"
            >
              {{ t.projects.labels.closeModal }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
