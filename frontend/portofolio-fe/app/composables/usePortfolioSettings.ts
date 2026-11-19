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

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
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
