export interface ArchitectureLayer {
  title: string
  tech?: string
  responsibilities: string[]
}

export interface ArchitectureData {
  diagram: string[]
  layers: ArchitectureLayer[]
}

export interface DataFlowStep {
  flowTitle: string
  steps: string[]
}

export interface ProjectDetailData {
  id: string
  title: string
  category: string
  status: string
  role: string
  period?: string
  shortDescription: string
  context: string
  purpose?: string
  challenge: string
  approach: string
  contribution: string[]
  backendDetails?: string[]
  frontendDetails?: string[]
  mobileDetails?: string[]
  dataManagement?: string[]
  architecture?: ArchitectureData
  dataFlow?: DataFlowStep[]
  technologies: string[]
  techCategories?: {
    mobile?: string[]
    frontend?: string[]
    backend?: string[]
    database?: string[]
    tools?: string[]
  }
}

const activeProject = ref<ProjectDetailData | null>(null)
const isOpen = ref(false)

export const useProjectModal = () => {
  const openProject = (project: ProjectDetailData) => {
    activeProject.value = project
    isOpen.value = true
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden'
    }
  }

  const closeProject = () => {
    isOpen.value = false
    activeProject.value = null
    if (typeof document !== 'undefined') {
      document.body.style.overflow = ''
    }
  }

  return {
    activeProject,
    isOpen,
    openProject,
    closeProject,
  }
}
