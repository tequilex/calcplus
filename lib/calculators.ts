import { Square, PaintBucket, Grid3x3, Rows3, Wallet } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type CalculatorStatus = 'active' | 'coming-soon'

export interface Calculator {
  slug: string
  title: string
  description: string
  icon: LucideIcon
  status: CalculatorStatus
}

export const calculators: Calculator[] = [
  {
    slug: 'kalkulyator-oboev',
    title: 'Калькулятор обоев',
    description: 'Точный расчёт количества рулонов на комнату с учётом раппорта.',
    icon: Square,
    status: 'active',
  },
  {
    slug: 'kalkulyator-kraski',
    title: 'Калькулятор краски',
    description: 'Сколько литров уйдёт на стены в один или два слоя.',
    icon: PaintBucket,
    status: 'coming-soon',
  },
  {
    slug: 'kalkulyator-plitki',
    title: 'Калькулятор плитки',
    description: 'Количество плиток на стену или пол с запасом 10%.',
    icon: Grid3x3,
    status: 'coming-soon',
  },
  {
    slug: 'kalkulyator-laminata',
    title: 'Калькулятор ламината',
    description: 'Упаковки ламината на площадь пола с учётом укладки.',
    icon: Rows3,
    status: 'coming-soon',
  },
  {
    slug: 'kalkulyator-stoimosti-remonta',
    title: 'Калькулятор стоимости ремонта',
    description: 'Приблизительная стоимость ремонта квартиры под ключ.',
    icon: Wallet,
    status: 'coming-soon',
  },
]
