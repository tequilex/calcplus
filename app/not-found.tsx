import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Страница не найдена',
}

export default function NotFound() {
  return (
    <div className="max-w-[768px] mx-auto px-4 md:px-6 py-24 text-center">
      <p className="text-[13px] text-[var(--muted-foreground)] uppercase tracking-[0.08em] font-medium mb-4">
        Ошибка 404
      </p>
      <h1 className="text-[32px] font-medium text-[var(--foreground)] mb-4 tracking-tight">
        Страница не найдена
      </h1>
      <p className="text-[var(--muted-foreground)] mb-8 max-w-[40ch] mx-auto leading-relaxed">
        Возможно, страница была удалена или адрес введён с ошибкой.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center h-10 px-5 rounded-[var(--radius-md)] bg-[var(--accent)] text-[var(--accent-foreground)] text-[15px] font-medium hover:bg-[var(--accent-hover)] hover:no-underline transition-colors duration-[120ms]"
      >
        На главную
      </Link>
    </div>
  )
}
