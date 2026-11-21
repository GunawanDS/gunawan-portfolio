export default defineNuxtPlugin(() => {
  if (process.env.NODE_ENV !== 'production') return

  const isEditable = (target: EventTarget | null): boolean => {
    if (!(target instanceof HTMLElement)) return false
    const tag = target.tagName
    return tag === 'INPUT' || tag === 'TEXTAREA' || target.isContentEditable
  }

  document.addEventListener('contextmenu', (e) => {
    if (!isEditable(e.target)) {
      e.preventDefault()
    }
  })

  document.addEventListener('copy', (e) => {
    if (!isEditable(e.target)) {
      e.preventDefault()
    }
  })

  document.addEventListener('cut', (e) => {
    if (!isEditable(e.target)) {
      e.preventDefault()
    }
  })

  document.addEventListener('dragstart', (e) => {
    if (!isEditable(e.target)) {
      e.preventDefault()
    }
  })

  document.addEventListener('keydown', (e) => {
    const key = e.key.toUpperCase()
    const ctrlOrMeta = e.ctrlKey || e.metaKey

    // Block F12
    if (e.key === 'F12') {
      e.preventDefault()
      return
    }

    // Block Ctrl+Shift+I / J / C (DevTools)
    if (ctrlOrMeta && e.shiftKey && ['I', 'J', 'C'].includes(key)) {
      e.preventDefault()
      return
    }

    // Block Ctrl+U (View Source) and Ctrl+S (Save Page)
    if (ctrlOrMeta && ['U', 'S'].includes(key)) {
      e.preventDefault()
      return
    }

    // Block Ctrl+C / Ctrl+A outside form inputs
    if (ctrlOrMeta && ['C', 'A'].includes(key) && !isEditable(e.target)) {
      e.preventDefault()
    }
  })
})
