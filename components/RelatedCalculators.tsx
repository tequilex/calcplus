import { calculators } from '@/lib/calculators'
import { CalculatorCard } from './CalculatorCard'

interface RelatedCalculatorsProps {
  excludeSlug?: string
  limit?: number
}

export function RelatedCalculators({ excludeSlug, limit = 3 }: RelatedCalculatorsProps) {
  const related = calculators
    .filter((c) => c.slug !== excludeSlug && c.status === 'coming-soon')
    .slice(0, limit)

  if (related.length === 0) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {related.map((calc) => (
        <CalculatorCard key={calc.slug} calculator={calc} />
      ))}
    </div>
  )
}
