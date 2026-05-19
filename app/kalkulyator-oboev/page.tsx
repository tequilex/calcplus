import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FAQ } from '@/components/FAQ'
import { RelatedCalculators } from '@/components/RelatedCalculators'
import { WallpaperCalculator } from '@/components/calculators/WallpaperCalculator'

export const metadata: Metadata = {
  title: 'Калькулятор обоев — точный расчёт онлайн | pluscalc.ru',
  description:
    'Рассчитайте количество рулонов обоев онлайн — с учётом раппорта, окон и дверей. Мгновенный расчёт, бесплатно.',
  openGraph: {
    title: 'Калькулятор обоев — точный расчёт онлайн | pluscalc.ru',
    description:
      'Рассчитайте количество рулонов обоев онлайн — с учётом раппорта, окон и дверей.',
    locale: 'ru_RU',
    type: 'website',
    siteName: 'pluscalc.ru',
  },
  alternates: {
    canonical: 'https://pluscalc.ru/kalkulyator-oboev/',
  },
}

const faqItems = [
  {
    question: 'Что такое раппорт?',
    answer:
      'Раппорт — это шаг повторения рисунка по вертикали. Чем он крупнее, тем больше уходит в обрезки при подгонке соседних полос. У гладких обоев раппорт нулевой, у мелких узоров — обычно 32 см, у крупных — 64 см и больше. Размер раппорта всегда указан на этикетке рулона.',
    defaultOpen: true,
  },
  {
    question: 'Сколько обоев брать в запас?',
    answer:
      'Калькулятор сразу добавляет один рулон сверх минимально нужного — это страховка от повреждений в работе и для будущей подклейки. Если в комнате сложная геометрия с нишами и выступами, имеет смысл взять ещё один рулон дополнительно. Главное — покупать все рулоны из одной партии, иначе оттенки могут чуть отличаться.',
  },
  {
    question: 'Чем отличаются метровые от полуметровых?',
    answer:
      'Метровые обои шире — 1,06 м против стандартных 0,53 м. Стыков получается вдвое меньше, поэтому стена выглядит цельнее. Но клеить их в одиночку тяжелее: широкое полотно нужно ровно прижать к стене, не допустив пузырей. Для маленьких комнат и углов обычно удобнее полуметровые.',
  },
  {
    question: 'Как клеить разные обои в одной комнате?',
    answer:
      'Если хотите акцентную стену, посчитайте её отдельно: умножьте длину стены на высоту и разделите на площадь одного рулона. Остальные три стены считайте как обычно — по периметру, но вычтите длину акцентной стены. Стыки разных обоев должны попадать на внутренние углы, а не на ровную плоскость — иначе будет видно.',
  },
  {
    question: 'Что делать с остатками?',
    answer:
      'Остатки длиннее метра лучше свернуть в рулон и оставить в кладовке — они пригодятся для подклейки повреждений через несколько лет. Из небольших обрезков получаются красивые задники для книжных полок, ящиков комода, коробок для хранения. Если рисунок крупный — можно вырезать фрагмент и оформить как небольшую картину под стекло.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Калькулятор обоев',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'RUB',
      },
    },
    {
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
          name: 'Калькуляторы',
          item: 'https://pluscalc.ru/kalkulyatory/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Калькулятор обоев',
          item: 'https://pluscalc.ru/kalkulyator-oboev/',
        },
      ],
    },
  ],
}

export default function WallpaperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-[768px] mx-auto px-4 md:px-6">
        <Breadcrumbs
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Калькуляторы', href: '/kalkulyatory/' },
            { label: 'Калькулятор обоев' },
          ]}
        />

        <div className="pt-2 pb-8">
          <h1 className="text-[32px] md:text-[36px] font-medium text-[var(--foreground)] mb-3 tracking-tight">
            Калькулятор обоев
          </h1>
          <p className="text-[var(--muted-foreground)] leading-relaxed max-w-[52ch]">
            Точный расчёт количества рулонов на комнату с учётом раппорта.
          </p>
        </div>

        <WallpaperCalculator />

        {/* Как пользоваться */}
        <section className="mb-12">
          <h2 className="text-[22px] md:text-[24px] font-medium text-[var(--foreground)] mb-5 tracking-tight">
            Как пользоваться
          </h2>
          <ol className="list-none p-0 m-0 flex flex-col gap-4 counter-reset-[step]">
            {[
              'Измерьте длину, ширину и высоту комнаты в метрах — рулеткой по плинтусу и стене у двери.',
              'Укажите количество окон и дверей: их площадь автоматически вычтется из периметра.',
              'Выберите ширину и длину рулона — данные есть на этикетке. Если обои с рисунком, укажите раппорт.',
              'Результат пересчитывается мгновенно. Запас 1 рулон уже учтён — на подрезку и возможный брак.',
            ].map((text, i) => (
              <li key={i} className="flex gap-3 items-start text-[15px] leading-relaxed text-[var(--foreground)]">
                <span className="inline-flex items-center justify-center w-6 h-6 shrink-0 mt-0.5 rounded-[6px] bg-[var(--muted)] text-[var(--foreground)] text-xs font-medium">
                  {i + 1}
                </span>
                {text}
              </li>
            ))}
          </ol>
        </section>

        {/* SEO-текст */}
        <section className="mb-12">
          <h2 className="text-[22px] md:text-[24px] font-medium text-[var(--foreground)] mb-5 tracking-tight">
            Как правильно рассчитать обои
          </h2>
          {/* TODO: write SEO text manually */}
          <div className="flex flex-col gap-4 text-[var(--foreground)] leading-relaxed">
            <p>
              Перед покупкой обоев важно понимать, что цифра на этикетке «10 метров в рулоне» — это
              длина полотна, а не площадь, которую он закроет. Сначала нужно прикинуть, сколько
              вертикальных полос целиком получится из одного рулона при высоте ваших стен. Если
              потолок 2,7 метра, то из стандартного десятиметрового рулона выйдет три полосы — с
              небольшим остатком, который пойдёт в подрезку у пола и потолка.
            </p>
            <p>
              Дальше — периметр. Сложите длины всех стен и вычтите окна и двери: каждое окно
              занимает около 1,5 метра по ширине, каждая дверь — примерно 0,9. Это не точно, но для
              калькулятора с запасом достаточно. Делим периметр на ширину рулона и получаем общее
              число полос, которые нужно наклеить, чтобы покрыть всё помещение от угла до угла.
            </p>
            <p>
              Самое коварное — рисунок. У гладких обоев без рисунка полосы можно стыковать как
              удобно, и никаких потерь не будет. Но если у обоев крупный раппорт — повторяющийся
              узор по вертикали, — каждая следующая полоса должна быть сдвинута относительно
              предыдущей так, чтобы рисунок совпадал. Это значит, что в обрезки уйдёт от пары
              сантиметров до полуметра на каждую полосу.
            </p>
            <p>
              И последнее — запас. Производители обоев иногда дают наклейки одной модели из разных
              партий с чуть отличающимся оттенком, поэтому имеет смысл купить рулоны из одной
              партии сразу. Один дополнительный рулон в запасе — это не паранойя, а нормальная
              страховка от того, что во время поклейки оторвётся неудачная полоса.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-[22px] md:text-[24px] font-medium text-[var(--foreground)] mb-5 tracking-tight">
            Частые вопросы
          </h2>
          <FAQ items={faqItems} />
        </section>

        {/* Похожие */}
        <section className="mb-12">
          <h2 className="text-[22px] md:text-[24px] font-medium text-[var(--foreground)] mb-5 tracking-tight">
            Похожие калькуляторы
          </h2>
          <RelatedCalculators excludeSlug="kalkulyator-oboev" limit={3} />
        </section>
      </div>
    </>
  )
}
