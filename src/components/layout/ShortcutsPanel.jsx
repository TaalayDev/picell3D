import { useStore } from '../../store/index.js'

const SECTIONS = [
  {
    title: 'Tools',
    rows: [
      ['P', 'Pencil'],
      ['E', 'Eraser'],
      ['F', 'Fill'],
      ['B', 'Blend gradient'],
      ['M', 'Material'],
      ['S', 'Select'],
      ['R', 'Rectangle'],
      ['C', 'Circle'],
      ['L', 'Line'],
      ['G', 'Toggle grid'],
    ],
  },
  {
    title: 'Edit',
    rows: [
      ['Ctrl+Z', 'Undo'],
      ['Ctrl+Y', 'Redo'],
      ['Ctrl+C', 'Copy selection'],
      ['Ctrl+X', 'Cut selection'],
      ['Ctrl+V', 'Paste'],
      ['Del', 'Delete selection'],
      ['Enter', 'Commit paste'],
      ['Esc', 'Cancel / clear'],
    ],
  },
  {
    title: 'Canvas',
    rows: [
      ['Tab', 'Next view'],
      ['[', 'Decrease paint depth'],
      [']', 'Increase paint depth'],
      ['Ctrl+0', 'Zoom to fit'],
      ['Space+drag', 'Pan canvas'],
      ['Right-click', 'Eyedropper'],
      ['Alt+drag', 'Toggle side draw mode'],
      ['Shift+Erase', 'Full-depth erase'],
    ],
  },
  {
    title: 'File',
    rows: [
      ['Ctrl+S', 'Save project'],
      ['Ctrl+Shift+C', 'Copy view as PNG'],
      ['?', 'Toggle this panel'],
    ],
  },
]

export default function ShortcutsPanel() {
  const toggleShortcutsPanel = useStore(s => s.toggleShortcutsPanel)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
      onClick={toggleShortcutsPanel}
    >
      <div
        className="relative rounded-xl overflow-hidden p-6 max-w-2xl w-full mx-4 max-h-[85vh] overflow-y-auto"
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          boxShadow: '0 0 40px rgba(0,0,0,0.8)',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>
            Keyboard Shortcuts
          </h2>
          <button
            onClick={toggleShortcutsPanel}
            className="text-xs text-text-muted hover:text-text transition-colors"
          >
            Close ✕
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {SECTIONS.map(section => (
            <div key={section.title}>
              <div className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--color-textMuted)' }}>
                {section.title}
              </div>
              <table className="w-full">
                <tbody>
                  {section.rows.map(([key, desc]) => (
                    <tr key={key} className="border-b" style={{ borderColor: 'color-mix(in srgb, var(--color-border) 40%, transparent)' }}>
                      <td className="py-1 pr-3 text-right" style={{ width: '45%' }}>
                        <kbd
                          className="text-xs font-mono px-1.5 py-0.5 rounded"
                          style={{
                            background: 'color-mix(in srgb, var(--color-accent) 10%, var(--color-surfaceAlt))',
                            border: '1px solid var(--color-border)',
                            color: 'var(--color-accent)',
                          }}
                        >
                          {key}
                        </kbd>
                      </td>
                      <td className="py-1 text-xs" style={{ color: 'var(--color-text)' }}>
                        {desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center text-xs" style={{ color: 'var(--color-textMuted)' }}>
          Press <kbd className="font-mono px-1 py-0.5 rounded text-xs" style={{ background: 'var(--color-surfaceAlt)', border: '1px solid var(--color-border)' }}>?</kbd> or click anywhere outside to close
        </div>
      </div>
    </div>
  )
}
