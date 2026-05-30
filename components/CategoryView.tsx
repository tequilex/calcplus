import { ToolCard } from '@/components/ToolCard'
import { findCategory } from '@/lib/tools'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'

interface CategoryViewProps {
  slug: string
  children?: ReactNode
}

export function CategoryView({ slug, children }: CategoryViewProps) {
  const category = findCategory(slug)
  if (!category) notFound()
  const Icon = category.icon

  const breadcrumbsLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Главная',
        item: 'https://pluscalc.ru/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: category.title,
        item: `https://pluscalc.ru/${category.slug}/`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
      />
      <div className="max-w-[1024px] mx-auto px-4 md:px-6">
        <div className="flex items-start gap-4 pt-8 pb-8">
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-muted shrink-0">
            <Icon size={22} strokeWidth={2} className="text-foreground" aria-hidden />
          </span>
          <div>
            <h1 className="text-[28px] md:text-[32px] font-medium text-foreground mb-2 tracking-tight leading-tight">
              {category.title}
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-[60ch]">
              {category.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pb-12">
          {category.tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} categorySlug={category.slug} />
          ))}
        </div>
      </div>

      {children && (
        <div className="max-w-[1024px] mx-auto px-4 md:px-6 border-t border-border pt-12 mt-4">
          {children}
        </div>
      )}
    </>
  )
}
