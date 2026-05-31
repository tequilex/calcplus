import type { Metadata } from 'next'
import Link from 'next/link'
import { Lightbulb, AlertTriangle, Clock } from 'lucide-react'
import { FAQ } from '@/components/FAQ'
import { RelatedTools } from '@/components/RelatedTools'
import { TileCalculator } from '@/components/calculators/TileCalculator'

export const metadata: Metadata = {
  title: 'Калькулятор плитки онлайн — расчёт количества с клеем и затиркой | pluscalc.ru',
  description:
    'Бесплатный онлайн-калькулятор плитки для пола и стен. Точный расчёт количества плиток, расхода плиточного клея и затирки с учётом размеров комнаты и ширины шва. Без регистрации.',
  openGraph: {
    title: 'Калькулятор плитки онлайн — расчёт количества с клеем и затиркой | pluscalc.ru',
    description:
      'Бесплатный онлайн-калькулятор плитки для пола и стен. Точный расчёт количества плиток, расхода плиточного клея и затирки с учётом размеров комнаты и ширины шва.',
    locale: 'ru_RU',
    type: 'website',
    siteName: 'pluscalc.ru',
  },
  alternates: {
    canonical: 'https://pluscalc.ru/remont/kalkulyator-plitki/',
  },
}

const faqItems = [
  {
    question: 'Сколько плитки нужно на ванную?',
    answer:
      'Для стандартной ванной 1,7 × 1,7 м с потолками 2,7 м площадь пола около 3 м², стен — примерно 16 м² за вычетом двери. При плитке 30 × 30 см уходит 33 штуки на пол и 178 на стены, плюс 10% запас. Точнее посчитает калькулятор выше — он учтёт ваши размеры комнаты, плитки и ширину шва, а заодно сразу покажет, сколько брать клея и затирки.',
    defaultOpen: true,
  },
  {
    question: 'Сколько плиток в 1 м²?',
    answer:
      'Зависит от размера. В одном квадратном метре помещается 25 плиток 20 × 20 см, 11 штук 30 × 30 см, 6 штук 40 × 40 см и около 3 штук размером 60 × 60 см. Для прямоугольной 30 × 60 см — 5–6 штук. Расчёт простой: 1 м² разделите на площадь одной плитки. Например, для 25 × 33,3 см — это 0,083 м², значит в 1 м² помещается 12 плиток.',
  },
  {
    question: 'Сколько затирки нужно на 1 м²?',
    answer:
      'Для плитки 30 × 30 см со швом 2 мм уходит примерно 0,3–0,4 кг затирки на 1 м². Чем мельче плитка и шире шов — тем больше расход. У мозаики 5 × 5 см с швом 1,5 мм цифра доходит до 1,5–2 кг на квадрат. У крупного формата 60 × 60 см с тонким швом — наоборот, 0,15–0,2 кг. Калькулятор сам считает по формуле с учётом размера плитки и ширины шва. Лишний пакет всегда лучше — открытая упаковка хранится недолго.',
  },
  {
    question: 'Сколько плиточного клея нужно на 1 м²?',
    answer:
      'Средний расход — 4–5 кг сухой смеси на квадратный метр при слое 3–4 мм и плитке стандартного размера. Для пола берите 5 кг, для стен — 4 кг. Крупноформатная плитка (60 × 60 и больше) требует более толстого слоя — закладывайте 6–7 кг/м². На неровной стене с перепадами расход тоже растёт. Стандартный мешок 25 кг хватает на 5–6 м². Берите с запасом одного мешка — недостача в середине укладки означает простой и риск, что клеевой шов не схватится.',
  },
  {
    question: 'Как считать плитку с раскладкой?',
    answer:
      'Раскладка — это план, по которому плитка будет лежать на полу или стене. От неё зависит, сколько уйдёт в подрезку. Прямая укладка даёт минимум отходов (до 5%), диагональная — больше (10–15%), укладка «ёлочкой» или «вразбежку» — около 10%. Калькулятор закладывает 10% по умолчанию, для диагональной возьмите дополнительно ещё 1 коробку. Перед покупкой нарисуйте раскладку на миллиметровке или в бесплатном онлайн-конструкторе плитки — будет видно, где встанут резаные ряды.',
  },
  {
    question: 'Сколько брать с запасом — 10% или 15%?',
    answer:
      'Калькулятор по умолчанию добавляет 10% — этого достаточно для прямой укладки в комнате простой формы. Берите 15%, если: укладываете по диагонали, ёлочкой или со смещением, в комнате есть выступы и ниши, плитка большого формата (60 × 60 и крупнее), или работает не профи. Лишнюю невскрытую коробку можно вернуть в магазин в течение 14 дней. А вот докупать — лотерея: нужной партии может уже не быть, а у другой партии оттенок плавает, и на свету разница видна.',
  },
  {
    question: 'Что такое СВП и зачем крестики между плитками?',
    answer:
      'Крестики — это пластиковые разделители, которые ставят в швы между плитками, чтобы они получились одинаковой ширины по всей поверхности. Бывают 1,5; 2; 3 и 5 мм. СВП (система выравнивания плитки) — более продвинутый вариант: пластиковые клинья с зажимами, которые ещё и подтягивают соседние плитки в одну плоскость, чтобы не было ступеньки на стыке. Для крупного формата (от 60 × 60) СВП почти обязательна. Для мелкой плитки в ванной хватит обычных крестиков.',
  },
  {
    question: 'Как посчитать плитку для кухонного фартука?',
    answer:
      'Фартук — это узкая полоса стены между столешницей и навесными шкафами, обычно 60 см высотой. Площадь считайте по длине рабочей зоны × 0,6 м. Например, для 3 метров кухни это 1,8 м². При плитке 10 × 10 см уходит 180 штук, при 30 × 30 — около 20 штук. Запас на фартук берите 15%: много угловых подрезок около розеток, выключателей и края столешницы. Если фартук с орнаментом или сложным рисунком — закладывайте все 20% сверху.',
  },
  {
    question: 'Как посчитать плитку для нестандартной комнаты с нишами и выступами?',
    answer:
      'Разбейте комнату на прямоугольники и посчитайте каждый отдельно. Для ниши прибавьте её внутреннюю площадь (две боковые стенки, дно или верх) к общей. Выступы (короба для коммуникаций) считайте по их граням — обычно три видимые стороны. Сложите всё, добавьте 15% запаса вместо обычных 10%: подрезок будет много, и часть из них уйдёт в брак. Если в комнате будет ' +
      'покраска части стен, заодно прикиньте материалы — у нас есть калькулятор краски с учётом проёмов.',
  },
]

const tips = [
  {
    icon: Lightbulb,
    title: 'Главное правило',
    text: 'Покупайте плитку из одной партии — номер указан на торце коробки рядом с артикулом. В разных партиях оттенок и геометрия плавают, на свету это видно.',
  },
  {
    icon: AlertTriangle,
    title: 'Что забывают учесть',
    text: 'Подрезку у труб, розеток и порога двери — куски часто уходят в брак. Для крупного формата (60 × 60 и больше) закладывайте +15% вместо стандартных 10%.',
  },
  {
    icon: Clock,
    title: 'Сколько займёт',
    text: 'Укладка плитки в типовой ванной — 3–5 дней работы. Плюс сутки на схватывание клея и сутки на затирку, прежде чем можно полноценно пользоваться.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Калькулятор плитки',
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
          name: 'Ремонт',
          item: 'https://pluscalc.ru/remont/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Калькулятор плитки',
          item: 'https://pluscalc.ru/remont/kalkulyator-plitki/',
        },
      ],
    },
  ],
}

function TipsList() {
  return (
    <>
      {tips.map(({ icon: Icon, title, text }) => (
        <div key={title} className="p-5 rounded-lg border border-border bg-background">
          <div className="flex items-center gap-2 mb-2">
            <Icon size={16} strokeWidth={2} className="text-muted-foreground shrink-0" aria-hidden />
            <div className="text-[13px] font-medium text-foreground">{title}</div>
          </div>
          <p className="text-[13px] text-muted-foreground leading-relaxed">{text}</p>
        </div>
      ))}
    </>
  )
}

export default function TilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-10 lg:items-start">
          <main className="mx-auto lg:mx-0 w-full max-w-[768px] lg:max-w-none">
        <div className="pt-8 pb-8">
          <h1 className="text-[32px] md:text-[36px] font-medium text-foreground mb-3 tracking-tight">
            Калькулятор плитки онлайн
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-[52ch]">
            Рассчитайте, сколько плитки нужно на пол или стены — с учётом размеров комнаты, плитки и ширины шва. Заодно покажем расход клея и затирки. Бесплатно, без регистрации, результат мгновенно.
          </p>
        </div>

        <TileCalculator />

        {/* Советы (только мобила/планшет) */}
        <div className="lg:hidden mb-12 flex flex-col gap-3">
          <TipsList />
        </div>

        {/* Как пользоваться */}
        <section className="mb-12">
          <h2 className="text-[22px] md:text-[24px] font-medium text-foreground mb-5 tracking-tight">
            Как пользоваться
          </h2>
          <ol className="list-none p-0 m-0 flex flex-col gap-4 counter-reset-[step]">
            {[
              'Выберите, что облицовываете — пол или стены.',
              'Введите длину и ширину комнаты в метрах. Для стен укажите ещё высоту и количество проёмов.',
              'Укажите размеры плитки в сантиметрах. Эти данные есть на коробке.',
              'Выберите ширину шва. Расчёт обновится мгновенно: количество плиток, расход клея и затирки.',
            ].map((text, i) => (
              <li key={i} className="flex gap-3 items-start text-[15px] leading-relaxed text-foreground">
                <span className="inline-flex items-center justify-center w-6 h-6 shrink-0 mt-0.5 rounded-[6px] bg-muted text-foreground text-xs font-medium">
                  {i + 1}
                </span>
                {text}
              </li>
            ))}
          </ol>
        </section>

        {/* SEO-текст */}
        <section className="mb-12">
          <h2 className="text-[22px] md:text-[24px] font-medium text-foreground mb-5 tracking-tight">
            Как правильно рассчитать плитку
          </h2>
          <div className="flex flex-col gap-5 text-foreground leading-relaxed">
            <p>
              Считать плитку «на глазок» — частый путь к двум поездкам в магазин: сначала
              докупать недостающую коробку, потом возвращать лишнюю. Чтобы не угадывать,
              достаточно знать четыре цифры: площадь поверхности, размер плитки, ширину шва и
              процент запаса. Калькулятор выше всё посчитает сам и сразу покажет, сколько
              клея и затирки взять под этот объём.
            </p>

            <h3 className="text-[18px] md:text-[19px] font-medium text-foreground mt-2 tracking-tight">
              Расчёт плитки на пол и стены
            </h3>
            <p>
              Для пола площадь считается просто: длина × ширина. Для стен сложнее — нужно
              умножить периметр на высоту и вычесть проёмы (окна, дверь). Калькулятор делает
              это автоматически, проёмы вычитаются с типовыми размерами 1,5 м² для окна и
              1,6 м² для двери. Площадь делится на площадь одной плитки — получаем количество
              штук. Сверху добавляется 10% на подрезку.
            </p>

            <h3 className="text-[18px] md:text-[19px] font-medium text-foreground mt-2 tracking-tight">
              Стандартные размеры и количество в 1 м²
            </h3>
            <p>
              В магазинах плитка продаётся в коробках, и количество в коробке зависит от
              размера. Чем крупнее формат — тем меньше штук, но больше площадь. Таблица ниже
              покажет, сколько плиток помещается в одном квадратном метре по самым ходовым
              форматам.
            </p>
            <div className="overflow-x-auto -mx-4 md:mx-0">
              <table className="w-full text-[14px] my-1 border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2.5 px-4 md:px-3 font-medium text-foreground">Размер</th>
                    <th className="text-left py-2.5 px-4 md:px-3 font-medium text-foreground">Штук в 1 м²</th>
                    <th className="text-left py-2.5 px-4 md:px-3 font-medium text-foreground">Где применяется</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-2.5 px-4 md:px-3">10 × 10 см</td>
                    <td className="py-2.5 px-4 md:px-3">100</td>
                    <td className="py-2.5 px-4 md:px-3">Кухонные фартуки, мозаичные стены</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2.5 px-4 md:px-3">20 × 20 см</td>
                    <td className="py-2.5 px-4 md:px-3">25</td>
                    <td className="py-2.5 px-4 md:px-3">Пол ванной, стены санузла</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2.5 px-4 md:px-3">25 × 33,3 см</td>
                    <td className="py-2.5 px-4 md:px-3">12</td>
                    <td className="py-2.5 px-4 md:px-3">Стены ванной и кухни</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2.5 px-4 md:px-3">30 × 30 см</td>
                    <td className="py-2.5 px-4 md:px-3">11</td>
                    <td className="py-2.5 px-4 md:px-3">Универсальный пол и стены</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2.5 px-4 md:px-3">30 × 60 см</td>
                    <td className="py-2.5 px-4 md:px-3">5–6</td>
                    <td className="py-2.5 px-4 md:px-3">Пол санузла, прихожие</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 md:px-3">60 × 60 см</td>
                    <td className="py-2.5 px-4 md:px-3">3</td>
                    <td className="py-2.5 px-4 md:px-3">Крупный формат, гостиные, кухни</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-[18px] md:text-[19px] font-medium text-foreground mt-2 tracking-tight">
              Расход плиточного клея на 1 м²
            </h3>
            <p>
              Средний расход сухой смеси — 4–5 кг на квадратный метр при слое 3–4 мм. Для пола
              цифра обычно выше (5 кг), для стен ниже (4 кг). Крупная плитка от 60 × 60 см
              требует более толстого слоя клея — 6–7 кг/м². На сильно неровном основании
              расход тоже растёт: каждый дополнительный миллиметр слоя добавляет около 1,5 кг
              на квадрат. Стандартный мешок 25 кг хватает в среднем на 5–6 м² пола.
            </p>

            <h3 className="text-[18px] md:text-[19px] font-medium text-foreground mt-2 tracking-tight">
              Расход затирки на 1 м²
            </h3>
            <p>
              Затирка идёт в швы между плитками, и её расход зависит от двух вещей: размера
              плитки и ширины шва. Чем мельче плитка — тем больше суммарная длина швов на
              квадратный метр. Чем шире шов — тем больше объём затирки на каждый погонный
              метр. Для типовой плитки 30 × 30 см со швом 2 мм уходит 0,3–0,4 кг на квадрат.
              Для мозаики 5 × 5 см с тем же швом — уже 2 кг. Калькулятор считает это по
              формуле автоматически.
            </p>

            <h3 className="text-[18px] md:text-[19px] font-medium text-foreground mt-2 tracking-tight">
              Раскладка и сколько брать с запасом
            </h3>
            <p>
              Перед покупкой плитки прикиньте раскладку. Прямая укладка — самая экономная,
              отходов почти нет. Диагональная и ёлочка дают 10–15% в обрезку. Раскладка
              «вразбежку» (со смещением на полплитки) добавляет 5–10%. Калькулятор закладывает
              10% по умолчанию — этого хватает для прямой укладки. Для диагонали, ёлочки или
              комнаты с нишами берите дополнительно одну коробку сверх расчёта.
            </p>
            <p>
              Главное правило: всю плитку для одной поверхности покупайте за один раз, одной
              партии. В разных партиях оттенок и геометрия плавают — на свету или у стыков
              это видно. Номер партии указан на торце коробки рядом с артикулом. Если будете
              заодно <Link href="/remont/kalkulyator-kraski/" className="text-primary hover:text-primary-hover">красить часть стен</Link>{' '}
              или <Link href="/remont/kalkulyator-oboev/" className="text-primary hover:text-primary-hover">клеить обои в соседней комнате</Link>,
              посчитайте материалы сразу — закажете всё одним заходом и сэкономите на
              доставке.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-[22px] md:text-[24px] font-medium text-foreground mb-5 tracking-tight">
            Частые вопросы
          </h2>
          <FAQ items={faqItems} />
        </section>

        {/* Похожие */}
        <section className="mb-12">
          <h2 className="text-[22px] md:text-[24px] font-medium text-foreground mb-5 tracking-tight">
            Похожие калькуляторы
          </h2>
          <RelatedTools categorySlug="remont" excludeSlug="kalkulyator-plitki" limit={3} />
        </section>
          </main>

          <aside className="hidden lg:flex flex-col gap-3 lg:sticky lg:top-20 lg:pt-8">
            <TipsList />
          </aside>
        </div>
      </div>
    </>
  )
}
