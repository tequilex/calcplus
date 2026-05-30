'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { categories } from '@/lib/tools'

const MARQUEE_QUERIES = [
  'сколько рулонов обоев на комнату',
  'какой платёж по ипотеке',
  'какой у меня ИМТ',
  'сколько краски на стены',
  'доходность вклада за год',
  'сколько калорий в день',
  'стоимость ремонта под ключ',
  'норма белка на кг веса',
  'НДФЛ с зарплаты',
  'сколько плитки на ванную',
  'идеальный вес по росту',
  'переплата по ипотеке',
  'сколько ламината на комнату',
  'базовый обмен веществ',
  'ежемесячный платёж по кредиту',
  'расход краски на 1 м²',
  'сколько воды пить в день',
  'налоговый вычет',
  'расчёт раппорта обоев',
  'норма жиров и углеводов',
  'сложный процент по вкладу',
]

const STATIC_PAGES: Record<string, string> = {
  'o-saite': 'О сайте',
  kontakty: 'Контакты',
}

interface Crumb {
  label: string
  href?: string
}

function resolveCrumbs(pathname: string): Crumb[] {
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length === 0) return []

  const items: Crumb[] = [{ label: 'Главная', href: '/' }]
  const first = segments[0]

  if (STATIC_PAGES[first]) {
    items.push({ label: STATIC_PAGES[first] })
    return items
  }

  const cat = categories.find((c) => c.slug === first)
  if (!cat) return items

  const isLeafCategory = segments.length === 1
  items.push({
    label: cat.title,
    href: isLeafCategory ? undefined : `/${cat.slug}/`,
  })

  if (segments.length >= 2) {
    const tool = cat.tools.find((t) => t.slug === segments[1])
    if (tool) items.push({ label: tool.title })
  }
  return items
}

export function SubHeader() {
  const pathname = usePathname() ?? '/'
  if (pathname.startsWith('/mockup')) return null

  const barClass = 'border-b border-border bg-muted'

  if (pathname === '/') {
    const line = MARQUEE_QUERIES.join(' · ') + ' · '
    return (
      <div className={barClass}>
        <div className="marquee" aria-label="Популярные запросы">
          <div className="marquee-track py-3 text-[13px]">
            <span className="px-3">{line}</span>
            <span className="px-3" aria-hidden>
              {line}
            </span>
          </div>
        </div>
      </div>
    )
  }

  const crumbs = resolveCrumbs(pathname)
  if (crumbs.length === 0) return null

  return (
    <nav aria-label="Хлебные крошки" className={barClass}>
      <div className="max-w-[1024px] mx-auto px-4 md:px-6 py-3 flex flex-wrap items-center gap-1.5 text-[13px] text-muted-foreground">
        {crumbs.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <span className="opacity-50" aria-hidden>
                /
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-foreground hover:no-underline transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground">
                {item.label}
              </span>
            )}
          </span>
        ))}
      </div>
    </nav>
  )
}
