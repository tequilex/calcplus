import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header
      className="sticky top-0 z-10 flex items-center justify-between gap-4 px-4 py-3 border-b border-[var(--border)] bg-[var(--background)] md:px-6"
    >
      <div className="flex items-center gap-3 min-w-0">
        <Link href="/" className="font-medium text-[var(--foreground)] text-[15px] whitespace-nowrap hover:no-underline">
          calcplus.ru
        </Link>
        <span className="hidden sm:block text-sm text-[var(--muted-foreground)] whitespace-nowrap overflow-hidden text-ellipsis">
          калькуляторы для ремонта
        </span>
      </div>

      <nav className="hidden sm:flex gap-1" aria-label="Навигация">
        <Link
          href="/kalkulyatory/"
          className="text-sm text-[var(--muted-foreground)] px-3 py-1 rounded-[var(--radius-md)] hover:bg-[var(--muted)] hover:text-[var(--foreground)] hover:no-underline transition-colors duration-[120ms]"
        >
          Калькуляторы
        </Link>
        <Link
          href="/o-saite/"
          className="text-sm text-[var(--muted-foreground)] px-3 py-1 rounded-[var(--radius-md)] hover:bg-[var(--muted)] hover:text-[var(--foreground)] hover:no-underline transition-colors duration-[120ms]"
        >
          О сайте
        </Link>
      </nav>

      <ThemeToggle />
    </header>
  )
}
