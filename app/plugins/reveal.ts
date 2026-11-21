import type { Directive } from 'vue'

let observer: IntersectionObserver | null = null

const getObserver = (): IntersectionObserver | null => {
  if (observer) return observer

  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return null

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-visible')
        observer?.unobserve(entry.target)
      }
    },
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' },
  )

  return observer
}

const revealDirective: Directive<HTMLElement> = {
  mounted(el) {
    if (typeof window === 'undefined') return

    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    if (reducedMotion) return

    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return

    el.classList.add('reveal')
    getObserver()?.observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
  getSSRProps() {
    return {}
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', revealDirective as any)
})
