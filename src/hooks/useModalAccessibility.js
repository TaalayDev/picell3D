import { useEffect, useRef } from 'react'

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

let pendingRestoreTimer = null

export function useModalAccessibility(dialogRef, onClose, { closeOnEscape = true } = {}) {
  const closeRef = useRef(onClose)
  closeRef.current = onClose

  useEffect(() => {
    if (pendingRestoreTimer !== null) {
      window.clearTimeout(pendingRestoreTimer)
      pendingRestoreTimer = null
    }
    const previouslyFocused = document.activeElement
    const dialog = dialogRef.current
    if (!dialog) return undefined

    const focusInitialControl = () => {
      const target = dialog.querySelector('[data-autofocus]') || dialog.querySelector(FOCUSABLE) || dialog
      target.focus({ preventScroll: true })
    }
    const animationFrame = requestAnimationFrame(focusInitialControl)

    function handleKeyDown(event) {
      if (event.key === 'Escape' && closeOnEscape && closeRef.current) {
        event.preventDefault()
        event.stopPropagation()
        closeRef.current()
        return
      }

      if (event.key !== 'Tab') return
      const controls = [...dialog.querySelectorAll(FOCUSABLE)].filter(element => {
        const style = window.getComputedStyle(element)
        return style.visibility !== 'hidden' && style.display !== 'none'
      })

      if (controls.length === 0) {
        event.preventDefault()
        dialog.focus()
        return
      }

      const first = controls[0]
      const last = controls[controls.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown, true)
    return () => {
      cancelAnimationFrame(animationFrame)
      document.removeEventListener('keydown', handleKeyDown, true)
      pendingRestoreTimer = window.setTimeout(() => {
        const fallback = document.querySelector('[data-dialog-return-focus="true"]')
        const target = previouslyFocused instanceof HTMLElement
          && previouslyFocused !== document.body
          && previouslyFocused !== document.documentElement
          && previouslyFocused.isConnected
          ? previouslyFocused
          : fallback
        if (target instanceof HTMLElement) target.focus({ preventScroll: true })
        pendingRestoreTimer = null
      }, 0)
    }
  }, [closeOnEscape, dialogRef])
}
