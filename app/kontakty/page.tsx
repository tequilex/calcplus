import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Контакты — точный расчёт онлайн | pluscalc.ru',
  description: 'Свяжитесь с нами по вопросам сайта pluscalc.ru — онлайн-калькуляторы для ремонта.',
  openGraph: {
    title: 'Контакты | pluscalc.ru',
    description: 'Свяжитесь с нами по вопросам сайта pluscalc.ru.',
    locale: 'ru_RU',
    type: 'website',
    siteName: 'pluscalc.ru',
  },
  alternates: {
    canonical: 'https://pluscalc.ru/kontakty/',
  },
}

export default function ContactsPage() {
  return (
    <div className="max-w-[768px] mx-auto px-4 md:px-6 py-12">
      <h1 className="text-[28px] md:text-[32px] font-medium text-[var(--foreground)] mb-3 tracking-tight">
        Контакты
      </h1>
      <p className="text-[var(--muted-foreground)] leading-relaxed mb-8">
        По вопросам сотрудничества и предложениям пишите на почту.
      </p>
      <div className="flex flex-col gap-2 text-[var(--foreground)]">
        <div className="flex items-center gap-3">
          <span className="text-[13px] text-[var(--muted-foreground)] w-20">Email</span>
          <a href="mailto:hello@pluscalc.ru" className="text-[var(--primary)]">
            hello@pluscalc.ru
          </a>
        </div>
      </div>
    </div>
  )
}
