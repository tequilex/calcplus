import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'О сайте — точный расчёт онлайн | calcplus.ru',
  description:
    'calcplus.ru — бесплатные онлайн-калькуляторы для расчёта материалов при квартирном ремонте. Узнайте о проекте.',
  openGraph: {
    title: 'О сайте | calcplus.ru',
    description: 'calcplus.ru — бесплатные онлайн-калькуляторы для квартирного ремонта.',
    locale: 'ru_RU',
    type: 'website',
    siteName: 'calcplus.ru',
  },
  alternates: {
    canonical: 'https://calcplus.ru/o-saite/',
  },
}

export default function AboutPage() {
  return (
    <div className="max-w-[768px] mx-auto px-4 md:px-6 py-12">
      <h1 className="text-[28px] md:text-[32px] font-medium text-[var(--foreground)] mb-3 tracking-tight">
        О сайте
      </h1>
      <p className="text-[var(--muted-foreground)] leading-relaxed mb-8 max-w-[52ch]">
        calcplus.ru — калькуляторы для квартирного ремонта.
      </p>

      <div className="flex flex-col gap-4 text-[var(--foreground)] leading-relaxed">
        {/* TODO: write SEO text manually */}
        <p>
          Лорем ипсум долор сит амет, консектетур адиписцинг елит. Сайт создан для тех, кто делает
          ремонт самостоятельно и хочет точно рассчитать количество материалов — без лишних покупок
          и поездок в магазин за добавочным рулоном.
        </p>
        <p>
          Все формулы проверены на практике. Расчёт происходит прямо в браузере — никаких данных не
          отправляется на сервер, никакой регистрации. Просто введите размеры — получите результат.
        </p>
      </div>
    </div>
  )
}
