'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const isDark = mounted ? resolvedTheme === 'dark' : false

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Переключить тему"
      className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] cursor-pointer hover:bg-[var(--muted)] transition-colors duration-[120ms] shrink-0"
    >
      {isDark ? (
        <Sun size={16} strokeWidth={2} aria-hidden />
      ) : (
        <Moon size={16} strokeWidth={2} aria-hidden />
      )}
    </button>
  )
}
