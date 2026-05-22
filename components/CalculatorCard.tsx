import Link from 'next/link'
import type { Calculator } from '@/lib/calculators'

interface CalculatorCardProps {
  calculator: Calculator
}

export function CalculatorCard({ calculator }: CalculatorCardProps) {
  const { slug, title, description, icon: Icon, status } = calculator
  const isActive = status === 'active'

  const card = (
    <div
      className={[
        'relative flex flex-col gap-3 p-5 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--background)] transition-colors duration-[120ms]',
        isActive
          ? 'cursor-pointer hover:bg-accent hover:border-muted-foreground'
          : 'opacity-60 cursor-not-allowed',
      ].join(' ')}
    >
      {!isActive && (
        <span className="absolute top-4 right-4 text-[11px] font-medium px-2 py-0.5 rounded-[var(--radius-sm)] bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)]">
          Скоро
        </span>
      )}
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-[var(--radius-md)] bg-[var(--muted)]">
        <Icon size={18} strokeWidth={2} className="text-[var(--foreground)]" aria-hidden />
      </span>
      <div>
        <div className="text-[15px] font-medium text-[var(--foreground)] leading-snug mb-1">
          {title}
        </div>
        <div className="text-[13px] text-[var(--muted-foreground)] leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  )

  if (isActive) {
    return (
      <Link href={`/${slug}/`} className="hover:no-underline block">
        {card}
      </Link>
    )
  }

  return card
}
