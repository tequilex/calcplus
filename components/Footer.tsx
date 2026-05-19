import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-6 mt-8">
      <div className="max-w-[768px] mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-between items-center gap-3 text-sm text-[var(--muted-foreground)]">
          <span>© {new Date().getFullYear()} pluscalc.ru — онлайн-калькуляторы для квартирного ремонта</span>
          <div className="flex gap-4">
            <Link href="/kalkulyatory/" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:no-underline transition-colors duration-[120ms]">
              Калькуляторы
            </Link>
            <Link href="/o-saite/" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:no-underline transition-colors duration-[120ms]">
              О сайте
            </Link>
            <Link href="/kontakty/" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:no-underline transition-colors duration-[120ms]">
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
