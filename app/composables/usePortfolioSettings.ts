import en from '../locales/en'
import id from '../locales/id'

export type Locale = 'en' | 'id'
export type Theme = 'dark' | 'light'

const translations = { en, id } as const

const STORAGE_KEYS = {
  locale: 'portfolio-locale',
  theme: 'portfolio-theme',
} as const

const isLocale = (value: string | null): value is Locale =>
  value === 'en' || value === 'id'

const isTheme = (value: string | null): value is Theme =>
  value === 'dark' || value === 'light'

export const usePortfolioSettings = () => {
  const locale = useState<Locale>(STORAGE_KEYS.locale, () => 'en')
  const theme = useState<Theme>(STORAGE_KEYS.theme, () => 'dark')

  const t = computed(() => translations[locale.value])

  const setLocale = (value: Locale) => {
    locale.value = value
  }

  const setTheme = (value: Theme) => {
    theme.value = value
  }

  const toggleTheme = (event?: MouseEvent) => {
    const nextTheme: Theme = theme.value === 'dark' ? 'light' : 'dark'

    if (
      typeof document === 'undefined' ||
      !('startViewTransition' in document) ||
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    ) {
      theme.value = nextTheme
      return
    }

    const x = event?.clientX ?? window.innerWidth - 60
    const y = event?.clientY ?? 36
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )

    const root = document.documentElement
    root.classList.add('is-vt-active')

    const transition = (document as any).startViewTransition(() => {
      theme.value = nextTheme
      root.dataset.theme = nextTheme
    })

    transition.ready.then(() => {
      root.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          pseudoElement: '::view-transition-new(root)',
        },
      )
    })

    transition.finished.finally(() => {
      root.classList.remove('is-vt-active')
    })
  }

  // onMounted hanya berjalan di client, sehingga localStorage / document aman dipakai.
  onMounted(() => {
    const savedLocale = localStorage.getItem(STORAGE_KEYS.locale)
    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme)

    if (isLocale(savedLocale)) locale.value = savedLocale
    if (isTheme(savedTheme)) theme.value = savedTheme

    document.documentElement.dataset.theme = theme.value
    document.documentElement.lang = locale.value
  })

  // Watcher hanya terpicu saat nilai berubah (aksi user di client).
  watch(locale, (value) => {
    localStorage.setItem(STORAGE_KEYS.locale, value)
    document.documentElement.lang = value
  })

  watch(theme, (value) => {
    localStorage.setItem(STORAGE_KEYS.theme, value)
    document.documentElement.dataset.theme = value
  })

  return { locale, theme, t, setLocale, setTheme, toggleTheme }
}
