export type SectionTab =
  | 'home'
  | 'about'
  | 'experience'
  | 'projects'
  | 'skills'
  | 'education'
  | 'certifications'
  | 'contact'

export const useNavigationState = () => {
  const currentSection = useState<SectionTab>('active-section-tab', () => 'home')

  const syncSection = (tab: SectionTab) => {
    currentSection.value = tab
  }

  const setSection = (tab: SectionTab) => {
    currentSection.value = tab
    if (import.meta.client) {
      if (tab === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      const el = document.getElementById(tab)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return {
    currentSection,
    setSection,
    syncSection,
  }
}
