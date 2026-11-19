import { ref } from 'vue'

export interface ViewerDocument {
  src: string
  title: string
}

/**
 * State bersama untuk document viewer (sertifikat & paklaring).
 * Satu <DocumentViewer /> di app.vue cukup untuk seluruh halaman.
 */
export const useDocumentViewer = () => {
  const current = useState<ViewerDocument | null>('document-viewer', () => null)

  const open = (src: string, title: string) => {
    current.value = { src, title }
  }

  const close = () => {
    current.value = null
  }

  return { current, open, close }
}
