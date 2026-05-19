import Link from 'next/link'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Хлебные крошки"
      className="flex flex-wrap items-center gap-1.5 pt-6 pb-3 text-[13px] text-[var(--muted-foreground)]"
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && (
            <span className="opacity-50" aria-hidden>/</span>
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:no-underline transition-colors duration-[120ms]"
            >
              {item.label}
            </Link>
          ) : (
            <span aria-current="page" className="text-[var(--foreground)]">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
