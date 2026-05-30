import Link from 'next/link'
import type { Tool } from '@/lib/tools'
import { TOOL_TYPE_LABELS } from '@/lib/tools'

interface ToolCardProps {
  tool: Tool
  categorySlug: string
}

export function ToolCard({ tool, categorySlug }: ToolCardProps) {
  const { slug, title, description, icon: Icon, status, type } = tool
  const isActive = status === 'active'
  const showTypeBadge = type !== 'calculator'

  const card = (
    <div
      className={[
        'relative flex flex-col gap-3 p-5 rounded-lg border border-border bg-background transition-colors duration-120',
        isActive
          ? 'cursor-pointer hover:bg-accent hover:border-muted-foreground'
          : 'opacity-60 cursor-not-allowed',
      ].join(' ')}
    >
      {!isActive && (
        <span className="absolute top-4 right-4 text-[11px] font-medium px-2 py-0.5 rounded-sm bg-muted text-muted-foreground border border-border">
          Скоро
        </span>
      )}
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-muted">
          <Icon size={18} strokeWidth={2} className="text-foreground" aria-hidden />
        </span>
        {showTypeBadge && (
          <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
            {TOOL_TYPE_LABELS[type]}
          </span>
        )}
      </div>
      <div>
        <div className="text-[15px] font-medium text-foreground leading-snug mb-1">
          {title}
        </div>
        <div className="text-[13px] text-muted-foreground leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  )

  if (isActive) {
    return (
      <Link href={`/${categorySlug}/${slug}/`} className="hover:no-underline block">
        {card}
      </Link>
    )
  }

  return card
}
