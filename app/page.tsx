import type { Metadata } from 'next'
import Link from 'next/link'
import { categories } from '@/lib/tools'
import { ToolCard } from '@/components/ToolCard'

export const metadata: Metadata = {
  title: 'Онлайн-калькуляторы для повседневных задач | pluscalc.ru',
  description:
    'Бесплатные онлайн-калькуляторы для ремонта, здоровья и финансов. Считайте материалы, ИМТ, ипотеку и налоги — без регистрации, прямо в браузере.',
  openGraph: {
    title: 'Онлайн-калькуляторы для повседневных задач | pluscalc.ru',
    description:
      'Бесплатные онлайн-калькуляторы для ремонта, здоровья и финансов. Без регистрации, прямо в браузере.',
    locale: 'ru_RU',
    type: 'website',
    siteName: 'pluscalc.ru',
  },
  alternates: {
    canonical: 'https://pluscalc.ru/',
  },
}

export default function HomePage() {
  return (
    <div>
      <div className="border-b border-border">
        <div className="max-w-[1024px] mx-auto px-4 md:px-6 py-16 md:py-20 text-center">
          <h1 className="text-[36px] md:text-[48px] font-medium text-foreground mb-4 tracking-tight leading-[1.1]">
            Все нужные расчёты в одном месте
          </h1>
          <p className="text-[17px] text-muted-foreground leading-relaxed max-w-[58ch] mx-auto mb-8">
            Pluscalc — бесплатная платформа онлайн-инструментов для ежедневных задач: калькуляторы, конвертеры, генераторы. Без регистрации и без рекламы.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className="px-4 py-2 rounded-md border border-border bg-background text-sm text-foreground no-underline hover:bg-accent transition-colors"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1024px] mx-auto px-4 md:px-6 py-12">
        <div className="space-y-12">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <section key={cat.slug} id={cat.slug} className="scroll-mt-20">
                <div className="flex items-end justify-between gap-4 mb-5 pb-3 border-b border-border">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-muted shrink-0">
                      <Icon size={20} strokeWidth={2} className="text-foreground" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h2 className="text-[20px] font-medium text-foreground leading-tight">{cat.title}</h2>
                      <p className="text-[13px] text-muted-foreground leading-snug">{cat.description}</p>
                    </div>
                  </div>
                  <Link
                    href={`/${cat.slug}/`}
                    className="shrink-0 text-sm text-muted-foreground no-underline whitespace-nowrap hover:text-primary"
                  >
                    Все →
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {cat.tools.map((tool) => (
                    <ToolCard key={tool.slug} tool={tool} categorySlug={cat.slug} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
