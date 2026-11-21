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
  { id: 'email', label: 'Email', href: 'mailto:gunawandzakwans@gmail.com', external: false },
  { id: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/6288223609370', external: true },
  { id: 'github', label: 'GitHub', href: 'https://github.com/GunawanDS', external: true },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/gunawan-dzakwan-s/', external: true },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/gunawandzakwans/', external: true },
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
  if (typeof document !== 'undefined') {
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
  if (typeof document !== 'undefined') {
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
          @click="toggleTheme($event)"
        >
          <Transition name="theme-icon" mode="out-in">
            <span v-if="theme === 'dark'" key="sun" class="theme-toggle-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            </span>
            <span v-else key="moon" class="theme-toggle-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            </span>
          </Transition>
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
              :key="item.id"
              :href="item.href"
              :target="item.external ? '_blank' : undefined"
              :rel="item.external ? 'noopener noreferrer' : undefined"
              :aria-label="item.label"
              :title="item.label"
              class="menu-social"
            >
              <svg v-if="item.id === 'email'" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
              </svg>
              <svg v-else-if="item.id === 'whatsapp'" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M12.03 2a9.94 9.94 0 0 0-8.6 14.92L2 22l5.22-1.37A9.95 9.95 0 1 0 12.03 2Zm0 18.18a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.22 8.22 0 1 1 6.95 3.85Zm4.5-6.15c-.25-.12-1.46-.72-1.69-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.78.96-.14.16-.29.18-.53.06a6.72 6.72 0 0 1-1.98-1.22 7.45 7.45 0 0 1-1.37-1.71c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.65 4.2 3.71.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.14-1.17-.06-.1-.22-.16-.47-.29Z" />
              </svg>
              <svg v-else-if="item.id === 'github'" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M12 2A10 10 0 0 0 8.84 21.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
              </svg>
              <svg v-else-if="item.id === 'linkedin'" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75ZM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68Zm1.39 9.94v-8.37H5.5v8.37h2.77Z" />
              </svg>
              <svg v-else-if="item.id === 'instagram'" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25ZM12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z" />
              </svg>
            </a>
          </div>

          <a
            href="/documents/Gunawan-Dzakwan-Sholeh-CV.pdf"
            download="Gunawan-Dzakwan-Sholeh-CV.pdf"
            class="menu-cv-btn"
          >
            <svg class="btn-icon-download" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>{{ t.hero.downloadCV }}</span>
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>
