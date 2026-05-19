import type { Metadata } from 'next'
import { calculators } from '@/lib/calculators'
import { CalculatorCard } from '@/components/CalculatorCard'

export const metadata: Metadata = {
  title: 'Все калькуляторы для ремонта | calcplus.ru',
  description:
    'Полный список онлайн-калькуляторов для квартирного ремонта: обои, краска, плитка, ламинат. Точный расчёт материалов бесплатно.',
  openGraph: {
    title: 'Все калькуляторы для ремонта | calcplus.ru',
    description:
      'Полный список онлайн-калькуляторов для квартирного ремонта: обои, краска, плитка, ламинат.',
    locale: 'ru_RU',
    type: 'website',
    siteName: 'calcplus.ru',
  },
  alternates: {
    canonical: 'https://calcplus.ru/kalkulyatory/',
  },
}

export default function CalculatorsPage() {
  const active = calculators.filter((c) => c.status === 'active')
  const soon = calculators.filter((c) => c.status === 'coming-soon')

  return (
    <div className="max-w-[768px] mx-auto px-4 md:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-[28px] md:text-[32px] font-medium text-[var(--foreground)] mb-3 tracking-tight">
          Все калькуляторы
        </h1>
        <p className="text-[var(--muted-foreground)] leading-relaxed max-w-[52ch]">
          Расчёт материалов для любого этапа ремонта — быстро и точно.
        </p>
      </div>

      {active.length > 0 && (
        <div className="mb-8">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--muted-foreground)] mb-4">
            Доступны сейчас
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {active.map((calc) => (
              <CalculatorCard key={calc.slug} calculator={calc} />
            ))}
          </div>
        </div>
      )}

      {soon.length > 0 && (
        <div>
          <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--muted-foreground)] mb-4">
            Скоро
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {soon.map((calc) => (
              <CalculatorCard key={calc.slug} calculator={calc} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
