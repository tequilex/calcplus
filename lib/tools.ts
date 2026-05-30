import {
  Square,
  PaintBucket,
  Grid3x3,
  Rows3,
  Wallet,
  Hammer,
  HeartPulse,
  Banknote,
  Scale,
  Flame,
  Activity,
  Home,
  PiggyBank,
  Calculator as CalculatorIcon,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type ToolStatus = 'active' | 'coming-soon'
export type ToolType = 'calculator' | 'converter' | 'generator'

export interface Tool {
  slug: string
  title: string
  description: string
  icon: LucideIcon
  status: ToolStatus
  type: ToolType
}

export interface Category {
  slug: string
  title: string
  description: string
  icon: LucideIcon
  tools: Tool[]
}

export const categories: Category[] = [
  {
    slug: 'remont',
    title: 'Ремонт',
    description: 'Расчёт материалов и стоимости квартирного ремонта',
    icon: Hammer,
    tools: [
      {
        slug: 'kalkulyator-oboev',
        title: 'Калькулятор обоев',
        description: 'Точный расчёт количества рулонов на комнату с учётом раппорта.',
        icon: Square,
        status: 'active',
        type: 'calculator',
      },
      {
        slug: 'kalkulyator-kraski',
        title: 'Калькулятор краски',
        description: 'Сколько литров уйдёт на стены в один или два слоя.',
        icon: PaintBucket,
        status: 'coming-soon',
        type: 'calculator',
      },
      {
        slug: 'kalkulyator-plitki',
        title: 'Калькулятор плитки',
        description: 'Количество плиток на стену или пол с запасом 10%.',
        icon: Grid3x3,
        status: 'coming-soon',
        type: 'calculator',
      },
      {
        slug: 'kalkulyator-laminata',
        title: 'Калькулятор ламината',
        description: 'Упаковки ламината на площадь пола с учётом укладки.',
        icon: Rows3,
        status: 'coming-soon',
        type: 'calculator',
      },
      {
        slug: 'kalkulyator-stoimosti-remonta',
        title: 'Калькулятор стоимости ремонта',
        description: 'Приблизительная стоимость ремонта квартиры под ключ.',
        icon: Wallet,
        status: 'coming-soon',
        type: 'calculator',
      },
    ],
  },
  {
    slug: 'zdorove',
    title: 'Здоровье',
    description: 'Калькуляторы веса, калорий и физических показателей',
    icon: HeartPulse,
    tools: [
      {
        slug: 'kalkulyator-imt',
        title: 'Калькулятор ИМТ',
        description: 'Индекс массы тела по росту и весу.',
        icon: Scale,
        status: 'coming-soon',
        type: 'calculator',
      },
      {
        slug: 'kalkulyator-kaloriy',
        title: 'Калькулятор калорий',
        description: 'Дневная норма калорий по формуле Миффлина-Сан Жеора.',
        icon: Flame,
        status: 'coming-soon',
        type: 'calculator',
      },
      {
        slug: 'kalkulyator-idealnogo-vesa',
        title: 'Калькулятор идеального веса',
        description: 'Ориентир по росту и типу телосложения.',
        icon: Activity,
        status: 'coming-soon',
        type: 'calculator',
      },
    ],
  },
  {
    slug: 'finansy',
    title: 'Финансы',
    description: 'Ипотека, вклады, налоги и другие денежные расчёты',
    icon: Banknote,
    tools: [
      {
        slug: 'kalkulyator-ipoteki',
        title: 'Калькулятор ипотеки',
        description: 'Платёж, переплата и график погашения по аннуитету.',
        icon: Home,
        status: 'coming-soon',
        type: 'calculator',
      },
      {
        slug: 'kalkulyator-vklada',
        title: 'Калькулятор вклада',
        description: 'Доходность вклада с капитализацией процентов.',
        icon: PiggyBank,
        status: 'coming-soon',
        type: 'calculator',
      },
      {
        slug: 'kalkulyator-ndfl',
        title: 'Калькулятор НДФЛ',
        description: 'Налог 13% и сумма на руки после вычета.',
        icon: CalculatorIcon,
        status: 'coming-soon',
        type: 'calculator',
      },
    ],
  },
]

export interface ToolWithCategory extends Tool {
  categorySlug: string
  categoryTitle: string
}

export function getAllTools(): ToolWithCategory[] {
  return categories.flatMap((cat) =>
    cat.tools.map((t) => ({
      ...t,
      categorySlug: cat.slug,
      categoryTitle: cat.title,
    }))
  )
}

export function findCategory(categorySlug: string): Category | undefined {
  return categories.find((c) => c.slug === categorySlug)
}

export function findTool(
  categorySlug: string,
  toolSlug: string
): { category: Category; tool: Tool } | undefined {
  const category = findCategory(categorySlug)
  if (!category) return undefined
  const tool = category.tools.find((t) => t.slug === toolSlug)
  if (!tool) return undefined
  return { category, tool }
}

export const TOOL_TYPE_LABELS: Record<ToolType, string> = {
  calculator: 'Калькулятор',
  converter: 'Конвертер',
  generator: 'Генератор',
}
