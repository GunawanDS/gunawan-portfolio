<script setup lang="ts">
import { useNavigationState, type SectionTab } from '~/composables/useNavigationState'

const { syncSection } = useNavigationState()

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

let sectionObserver: IntersectionObserver | null = null

onMounted(() => {
  const sectionIds: SectionTab[] = [
    'home',
    'about',
    'experience',
    'projects',
    'skills',
    'education',
    'certifications',
    'contact',
  ]

  sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.target.id) {
          syncSection(entry.target.id as SectionTab)
        }
      }
    },
    {
      rootMargin: '-35% 0px -55% 0px',
      threshold: 0,
    },
  )

  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (el) sectionObserver.observe(el)
  }
})

onBeforeUnmount(() => {
  sectionObserver?.disconnect()
})
</script>

<template>
  <div class="site-wrapper">
    <AppNavbar />

    <main id="main-content" class="main-view">
      <AppHero />
      <AppAbout />
      <AppExperience />
      <AppProjects />
      <AppSkills />
      <AppEducation />
      <AppCertifications />
      <AppContact />
    </main>

    <AppFooter />
    <ProjectDetailModal />
    <BackToTop />
  </div>
</template>
