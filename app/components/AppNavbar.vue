<script setup lang="ts">
import type { SectionTab } from '~/composables/useNavigationState'

const { locale, theme, t, setLocale, toggleTheme } = usePortfolioSettings()
const { currentSection, setSection } = useNavigationState()

const isOpen = ref(false)
const isScrolled = ref(false)

const links = computed<{ id: SectionTab; label: string }[]>(() => [
  { id: 'home', label: t.value.nav.home },
  { id: 'about', label: t.value.nav.about },
  { id: 'experience', label: t.value.nav.experience },
  { id: 'projects', label: t.value.nav.projects },
  { id: 'skills', label: t.value.nav.skills },
  { id: 'education', label: t.value.nav.education },
  { id: 'certifications', label: t.value.nav.certifications },
  { id: 'contact', label: t.value.nav.contact },
])

const socials = [
  { label: 'GitHub', href: 'https://github.com/GunawanDS' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gunawan-dzakwan-s/' },
  { label: 'Instagram', href: 'https://www.instagram.com/gunawandzakwans/' },
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const navigateTo = (id: SectionTab) => {
  setSection(id)
  closeMenu()
}

const onScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeMenu()
}

watch(isOpen, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <header
    class="topbar"
    :class="{ 'is-scrolled': isScrolled, 'is-open': isOpen }"
  >
    <div class="topbar-inner">
      <button
        type="button"
        class="topbar-brand"
        @click="navigateTo('home')"
      >
        <span class="brand-name">Gunawan Dzakwan Sholeh</span>
      </button>

      <div class="topbar-actions">
        <div class="language-switcher" role="group" aria-label="Language">
          <button
            type="button"
            :class="{ active: locale === 'en' }"
            :aria-pressed="locale === 'en'"
            @click="setLocale('en')"
          >
            EN
          </button>
          <button
            type="button"
            :class="{ active: locale === 'id' }"
            :aria-pressed="locale === 'id'"
            @click="setLocale('id')"
          >
            ID
          </button>
        </div>

        <button
          type="button"
          class="theme-toggle"
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          <span aria-hidden="true">{{ theme === 'dark' ? '☀' : '☾' }}</span>
        </button>

        <button
          type="button"
          class="menu-toggle"
          :class="{ 'is-open': isOpen }"
          :aria-expanded="isOpen"
          aria-controls="site-menu"
          aria-label="Menu"
          @click="toggleMenu"
        >
          <span class="menu-toggle-bar" />
          <span class="menu-toggle-bar" />
        </button>
      </div>
    </div>
  </header>

  <!-- Fullscreen Interactive Menu -->
  <div
    id="site-menu"
    class="menu-overlay"
    :class="{ 'is-open': isOpen }"
    :aria-hidden="!isOpen"
    :inert="!isOpen"
  >
    <div class="menu-mesh-bg" aria-hidden="true" />

    <!-- Dedicated Close Button in Overlay (Right Top) -->
    <button
      type="button"
      class="menu-close-btn"
      aria-label="Close menu"
      @click="closeMenu"
    >
      <span aria-hidden="true">✕</span>
    </button>

    <div class="menu-container">
      <nav class="menu-nav" aria-label="Main menu">
        <ul class="menu-list">
          <li
            v-for="(link, index) in links"
            :key="link.id"
            class="menu-item"
            :style="{ '--i': index }"
          >
            <button
              type="button"
              class="menu-link"
              :class="{ 'is-active': currentSection === link.id }"
              @click="navigateTo(link.id)"
            >
              <span class="menu-label">{{ link.label }}</span>
            </button>
          </li>
        </ul>

        <div class="menu-footer" :style="{ '--i': links.length }">
          <div class="menu-socials">
            <a
              v-for="item in socials"
              :key="item.label"
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
              class="menu-social"
            >
              {{ item.label }} <span aria-hidden="true">↗</span>
            </a>
          </div>

          <a
            href="/documents/Gunawan-Dzakwan-Sholeh-CV.pdf"
            download="Gunawan-Dzakwan-Sholeh-CV.pdf"
            class="menu-cv-btn"
          >
            <span>↓</span> {{ t.hero.downloadCV }}
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>
