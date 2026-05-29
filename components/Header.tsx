import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header
      className="sticky top-0 z-10 flex items-center justify-between gap-4 px-4 py-3 border-b border-border bg-background md:px-6"
    >
      <div className="flex items-center gap-3 min-w-0">
        <Link href="/" className="flex items-center hover:no-underline" aria-label="pluscalc.ru — на главную">
          <Image
            src="/logo-grey.svg"
            alt="pluscalc.ru"
            width={145}
            height={56}
            priority
            className="h-7 w-auto logo-light"
          />
          <Image
            src="/logo-white.svg"
            alt="pluscalc.ru"
            width={145}
            height={56}
            priority
            className="h-7 w-auto logo-dark"
          />
        </Link>
        <span className="hidden sm:block text-sm text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis">
          калькуляторы для ремонта
        </span>
      </div>

      <nav className="hidden sm:flex gap-1" aria-label="Навигация">
        <Link
          href="/kalkulyatory/"
          className="text-sm text-muted-foreground px-3 py-1 rounded-md hover:bg-muted hover:text-primary hover:no-underline transition-colors duration-120"
        >
          Калькуляторы
        </Link>
        <Link
          href="/o-saite/"
          className="text-sm text-muted-foreground px-3 py-1 rounded-md hover:bg-muted hover:text-primary hover:no-underline transition-colors duration-120"
        >
          О сайте
        </Link>
      </nav>

      <ThemeToggle />
    </header>
  )
}
