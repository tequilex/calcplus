import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header
      className="sticky top-0 z-10 border-b border-primary-muted bg-background"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(/stripe.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative flex items-center justify-between gap-4 px-4 py-3 md:px-6">
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
          онлайн-инструменты
        </span>
      </div>

      <ThemeToggle />
      </div>
    </header>
  )
}
