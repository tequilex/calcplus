import type { Metadata } from 'next'
import { CategoryView } from '@/components/CategoryView'

export const metadata: Metadata = {
  title: 'Финансовые калькуляторы — ипотека, вклад, НДФЛ | pluscalc.ru',
  description:
    'Бесплатные онлайн-калькуляторы для финансов: расчёт ипотеки, доходности вклада и налога 13%. Без регистрации.',
  openGraph: {
    title: 'Финансовые калькуляторы — ипотека, вклад, НДФЛ | pluscalc.ru',
    description:
      'Бесплатные онлайн-калькуляторы для финансов: ипотека, вклад, НДФЛ.',
    locale: 'ru_RU',
    type: 'website',
    siteName: 'pluscalc.ru',
  },
  alternates: { canonical: 'https://pluscalc.ru/finansy/' },
}

export default function FinansyPage() {
  return <CategoryView slug="finansy" />
}
