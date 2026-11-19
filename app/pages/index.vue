<script setup lang="ts">
import { useNavigationState } from '~/composables/useNavigationState'

const { currentSection } = useNavigationState()

useSeoMeta({
  title: 'Gunawan Dzakwan Sholeh | Fullstack Developer & System Analyst',
  description:
    'Personal portfolio of Gunawan Dzakwan Sholeh, showcasing experience in web application development, information systems, system integration, and business analysis.',
  ogTitle: 'Gunawan Dzakwan Sholeh | Portfolio',
  ogDescription:
    'Fullstack Developer focused on web application development, information systems, and problem solving.',
  ogType: 'website',
  twitterCard: 'summary',
})
</script>

<template>
  <div class="site-wrapper">
    <AppNavbar />

    <main id="main-content" class="main-view">
      <Transition name="page-fade" mode="out-in">
        <div :key="currentSection" class="view-panel">
          <AppHero v-if="currentSection === 'home'" />
          <AppAbout v-else-if="currentSection === 'about'" />
          <AppExperience v-else-if="currentSection === 'experience'" />
          <AppProjects v-else-if="currentSection === 'projects'" />
          <AppSkills v-else-if="currentSection === 'skills'" />
          <AppEducation v-else-if="currentSection === 'education'" />
          <AppCertifications v-else-if="currentSection === 'certifications'" />
          <AppContact v-else-if="currentSection === 'contact'" />
        </div>
      </Transition>
    </main>

    <AppFooter />
  </div>
</template>
