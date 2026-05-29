import type { Metadata } from 'next'
import { calculators } from '@/lib/calculators'
import { CalculatorCard } from '@/components/CalculatorCard'

export const metadata: Metadata = {
  title: 'Онлайн-калькуляторы для ремонта квартиры | pluscalc.ru',
  description:
    'Бесплатные онлайн-калькуляторы для ремонта: расчёт обоев, краски, плитки и ламината. Точный расчёт материалов за секунды.',
  openGraph: {
    title: 'Онлайн-калькуляторы для ремонта квартиры | pluscalc.ru',
    description:
      'Бесплатные онлайн-калькуляторы для ремонта: расчёт обоев, краски, плитки и ламината.',
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
    <div className="max-w-[768px] mx-auto px-4 md:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-[28px] md:text-[32px] font-medium text-foreground mb-3 tracking-tight">
          Калькуляторы для ремонта
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-[52ch]">
          Бесплатные онлайн-калькуляторы для точного расчёта материалов при ремонте квартиры.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {calculators.map((calc) => (
          <CalculatorCard key={calc.slug} calculator={calc} />
        ))}
      </div>
    </div>
  )
}
