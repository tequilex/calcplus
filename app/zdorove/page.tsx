import type { Metadata } from 'next'
import { CategoryView } from '@/components/CategoryView'

export const metadata: Metadata = {
  title: 'Калькуляторы для здоровья — ИМТ, калории, идеальный вес | pluscalc.ru',
  description:
    'Бесплатные онлайн-калькуляторы для здоровья: индекс массы тела, суточная норма калорий, идеальный вес. Без регистрации.',
  openGraph: {
    title: 'Калькуляторы для здоровья — ИМТ, калории, идеальный вес | pluscalc.ru',
    description:
      'Бесплатные онлайн-калькуляторы для здоровья: ИМТ, калории, идеальный вес.',
    locale: 'ru_RU',
    type: 'website',
    siteName: 'pluscalc.ru',
  },
  alternates: { canonical: 'https://pluscalc.ru/zdorove/' },
}

export default function ZdorovePage() {
  return <CategoryView slug="zdorove" />
}
