import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border pt-14 pb-6">
      <div className="max-w-[768px] mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-between items-center gap-3 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} pluscalc.ru — бесплатные онлайн-инструменты для ежедневных задач</span>
          <div className="flex gap-4">
            <Link href="/o-saite/" className="text-muted-foreground hover:text-foreground hover:no-underline transition-colors duration-120">
              О сайте
            </Link>
            <Link href="/kontakty/" className="text-muted-foreground hover:text-foreground hover:no-underline transition-colors duration-120">
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
