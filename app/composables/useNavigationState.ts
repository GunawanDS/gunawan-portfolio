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

  const setSection = (tab: SectionTab) => {
    currentSection.value = tab
    if (import.meta.client) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return {
    currentSection,
    setSection,
  }
}
