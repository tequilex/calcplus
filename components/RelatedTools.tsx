import { findCategory } from '@/lib/tools'
import { ToolCard } from './ToolCard'

interface RelatedToolsProps {
  categorySlug: string
  excludeSlug?: string
  limit?: number
}

export function RelatedTools({ categorySlug, excludeSlug, limit = 3 }: RelatedToolsProps) {
  const category = findCategory(categorySlug)
  if (!category) return null

  const related = category.tools
    .filter((t) => t.slug !== excludeSlug)
    .slice(0, limit)

  if (related.length === 0) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {related.map((tool) => (
        <ToolCard key={tool.slug} tool={tool} categorySlug={categorySlug} />
      ))}
    </div>
  )
}
