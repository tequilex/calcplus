import type { Metadata } from 'next'
import { CategoryView } from '@/components/CategoryView'

export const metadata: Metadata = {
  title: 'Калькуляторы для ремонта — обои, краска, плитка, ламинат | pluscalc.ru',
  description:
    'Онлайн-калькуляторы для квартирного ремонта: расчёт обоев, краски, плитки и ламината. Точный расчёт материалов бесплатно.',
  openGraph: {
    title: 'Калькуляторы для ремонта — обои, краска, плитка, ламинат | pluscalc.ru',
    description:
      'Онлайн-калькуляторы для квартирного ремонта: расчёт обоев, краски, плитки и ламината.',
    locale: 'ru_RU',
    type: 'website',
    siteName: 'pluscalc.ru',
  },
  alternates: { canonical: 'https://pluscalc.ru/remont/' },
}

export default function RemontPage() {
  return <CategoryView slug="remont" />
}
