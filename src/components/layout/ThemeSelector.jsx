import { useStore } from '../../store/index.js'
import { THEMES } from '../../themes/index.js'

export default function ThemeSelector() {
  const { activeTheme, setActiveTheme } = useStore()

  return (
    <div className="flex items-center gap-1.5 px-2">
      <span className="text-xs text-text-muted uppercase tracking-wide">Theme</span>
      <div className="flex gap-1">
        {Object.values(THEMES).map(theme => (
          <button
            key={theme.id}
            className={`text-xs px-2 py-0.5 rounded border transition-all ${
              activeTheme === theme.id
                ? 'border-accent bg-accent/20 text-accent'
                : 'border-border text-text-muted hover:text-text hover:border-accent/50'
            }`}
            onClick={() => setActiveTheme(theme.id)}
            title={theme.name}
          >
            {theme.name}
          </button>
        ))}
      </div>
    </div>
  )
}
