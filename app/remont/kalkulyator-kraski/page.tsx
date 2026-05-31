import type { Metadata } from 'next'
import Link from 'next/link'
import { Lightbulb, AlertTriangle, Clock } from 'lucide-react'
import { FAQ } from '@/components/FAQ'
import { RelatedTools } from '@/components/RelatedTools'
import { PaintCalculator } from '@/components/calculators/PaintCalculator'

export const metadata: Metadata = {
  title: 'Калькулятор краски для стен — расчёт расхода на 1 м² онлайн | pluscalc.ru',
  description:
    'Бесплатный онлайн-калькулятор краски для стен и потолка. Точный расчёт расхода на 1 м² с учётом площади, окон, дверей, типа краски и количества слоёв. Результат — мгновенно.',
  openGraph: {
    title: 'Калькулятор краски для стен — расчёт расхода на 1 м² онлайн | pluscalc.ru',
    description:
      'Бесплатный онлайн-калькулятор краски для стен и потолка. Расход на 1 м² с учётом площади, окон, дверей, типа краски и количества слоёв.',
    locale: 'ru_RU',
    type: 'website',
    siteName: 'pluscalc.ru',
  },
  alternates: {
    canonical: 'https://pluscalc.ru/remont/kalkulyator-kraski/',
  },
}

const faqItems = [
  {
    question: 'Сколько краски нужно на 10 м²?',
    answer:
      'На 10 м² стены акриловой краской (расход 0,15 л/м²) в два слоя уходит 3 литра с запасом 10%. Для водоэмульсионки (0,13 л/м²) — 2,6 л, для фасадной (0,18 л/м²) — 4 л. Если поверхность с рельефом или фактурой, добавьте ещё 30–50%. Точнее посчитает калькулятор выше — он учтёт проёмы, тип краски и количество слоёв.',
    defaultOpen: true,
  },
  {
    question: 'Сколько краски нужно на комнату 18 м²?',
    answer:
      'Для типовой комнаты 18 м² (3 × 6 м) с потолками 2,7 м, одним окном и одной дверью площадь стен — около 45,5 м². Акриловой краской в два слоя уйдёт 15 литров с запасом, водоэмульсионной — 13 литров, фасадной — 18 литров. Если красите ещё и потолок (12 м²), прибавьте 3–4 литра. Под точные размеры рассчитает калькулятор сверху.',
  },
  {
    question: 'Расход краски на 1 м² — какая норма?',
    answer:
      'На этикетке указан «теоретический» расход — 8–10 м²/л для идеально ровной загрунтованной стены и одного слоя. В жизни цифра всегда выше: акриловая — 0,15 л/м², водоэмульсионная — 0,13 л/м², алкидная — 0,10 л/м², фасадная — 0,18 л/м². На два слоя — удваивайте. Без грунта или на впитывающей шпаклёвке расход растёт ещё на 20–30%.',
  },
  {
    question: 'Сколько слоёв краски нужно?',
    answer:
      'Стандарт — два слоя. Один слой почти всегда даёт пятна и просветы, особенно если основание контрастного цвета или впитывает неравномерно. Три слоя нужны редко: при переходе с тёмного на светлый, при покраске поверх старой яркой краски или если краска сильно разбавлена. Между слоями ждите полного высыхания — иначе нижний слой смажется.',
  },
  {
    question: 'Как посчитать расход краски для труб и металла?',
    answer:
      'Площадь трубы считается через периметр: длина × π × диаметр. Для трубы Ø50 мм длиной 5 м это 5 × 3,14 × 0,05 = 0,785 м². Расход краски по металлу — 0,12–0,15 л/м² для алкидной эмали, 0,10 л/м² для краски «3 в 1» с антикоррозионным грунтом. Калькулятор выше для стен, под трубы умножайте площадь на расход вручную. Для металлоконструкций (профили, ограждения) сначала считайте суммарную площадь всех граней.',
  },
  {
    question: 'Какая краска лучше для стен в квартире?',
    answer:
      'Для жилых комнат подходит водно-дисперсионная (акриловая или латексная) — она без запаха, быстро сохнет, держится 8–10 лет. Для кухни и ванной берите моющуюся с пометкой «латексная» или «силиконовая»: она выдерживает влажную уборку. Алкидные эмали в комнатах не используют — у них резкий запах и долгая сушка. Смотрите не на цену, а на класс износостойкости (1 или 2 — самые стойкие).',
  },
  {
    question: 'Нужна ли грунтовка перед покраской?',
    answer:
      'Почти всегда да. Грунтовка выравнивает впитываемость стены: без неё краска ложится пятнами, расход растёт на 20–30%. На голую штукатурку или гипсокартон грунт обязателен в один-два слоя. На старую краску того же типа — достаточно лёгкого слоя адгезионного грунта. Грунтовка экономит банку краски: одна банка грунта по 5 л стоит в 2–3 раза дешевле такой же банки финишной.',
  },
  {
    question: 'Сколько сохнет краска между слоями?',
    answer:
      'Водно-дисперсионная сохнет «на отлип» за 1–2 часа, до второго слоя — 4–6 часов в зависимости от температуры и влажности. Алкидная — сутки минимум. Производитель указывает время на банке, ориентируйтесь на него. Спешка вредит: если положить второй слой раньше срока, нижний начнёт смазываться, а финиш пойдёт пятнами. В прохладной (ниже +15 °C) или влажной комнате время сушки удваивается.',
  },
  {
    question: 'В чём разница матовой и глянцевой краски?',
    answer:
      'Матовая мягко рассеивает свет, скрывает мелкие неровности — выигрывает по эстетике в жилых помещениях, но пачкается заметнее. Глянцевая отражает свет, любые дефекты основания видно как на ладони, зато её можно мыть и расход меньше. Полуматовая (satin) — компромисс: и моется, и неровности не выпячивает. Для коридоров и кухонь обычно берут именно её.',
  },
  {
    question: 'Какой валик выбрать для краски?',
    answer:
      'Для гладких стен берите велюровый или поролоновый с коротким ворсом (4–6 мм) — он даёт ровную плёнку без брызг, расход минимальный. Для фактурных и рельефных поверхностей — длинный ворс (12–18 мм), он заходит в углубления. Поролоновые валики дешёвые, но быстро лысеют и крошат — на одну комнату сойдёт, на большой объём не берите. Ширина валика — 18–25 см: уже не наработаетесь, шире тяжело держать ровно.',
  },
]

const tips = [
  {
    icon: Lightbulb,
    title: 'Главное правило',
    text: 'Считайте расход всегда на 2 слоя. Один слой даёт пятна и просветы, даже если краска укрывистая — это нормально, производители заранее закладывают двухслойное покрытие.',
  },
  {
    icon: AlertTriangle,
    title: 'Что забывают учесть',
    text: 'Фактура стены съедает с этикетки лишнее. Гладкая штукатурка — норма, рельеф и «шуба» — в 1,5–2 раза больше. Грунт перед покраской снижает расход на 20–30%.',
  },
  {
    icon: Clock,
    title: 'Сколько займёт',
    text: 'Покраска комнаты в 2 слоя — день работы с напарником. Между слоями водоэмульсионки нужно 4–6 часов сушки, алкидной — сутки. Не торопитесь, иначе пойдут разводы.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Калькулятор краски',
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
          name: 'Калькулятор краски',
          item: 'https://pluscalc.ru/remont/kalkulyator-kraski/',
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

export default function PaintPage() {
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
            Калькулятор краски для стен онлайн
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-[52ch]">
            Рассчитайте, сколько литров краски нужно на стены или потолок — с учётом расхода на 1 м², проёмов, типа краски и количества слоёв. Бесплатно, без регистрации, результат мгновенно.
          </p>
        </div>

        <PaintCalculator />

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
              'Измерьте длину, ширину и высоту комнаты в метрах — рулеткой по плинтусу и стене у двери.',
              'Укажите количество окон и дверей: их площадь автоматически вычтется из площади стен.',
              'Выберите, что красите: только стены, только потолок или всё вместе.',
              'Укажите тип краски и количество слоёв. Расчёт обновится мгновенно, запас 10% уже учтён.',
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
            Как правильно рассчитать краску
          </h2>
          <div className="flex flex-col gap-5 text-foreground leading-relaxed">
            <p>
              На банке всегда есть цифра «расход 8–10 м²/л», но это идеальные условия из лаборатории:
              гладкая загрунтованная стена, один слой, опытный маляр. В жизни расход всегда выше:
              стена впитывает по-разному, валик отжимается неравномерно, нужен второй слой. Чтобы
              не бегать в магазин за докупкой, считайте по верхней границе и добавляйте 10% сверху.
            </p>

            <h3 className="text-[18px] md:text-[19px] font-medium text-foreground mt-2 tracking-tight">
              Расход краски на 1 м²
            </h3>
            <p>
              Расход — это объём краски, который уходит на покрытие одного квадратного метра в один
              слой. Цифра зависит от типа состава, степени блеска и впитываемости основания. Гладкие
              водно-дисперсионные ложатся тонким слоем (0,10–0,15 л/м²), фасадные и фактурные —
              толстым (0,18–0,25 л/м²). На два слоя расход удваивается, на три — утраивается. Если
              стена без грунта или с фактурой, добавляйте ещё 20–50% сверху.
            </p>

            <h3 className="text-[18px] md:text-[19px] font-medium text-foreground mt-2 tracking-tight">
              Расход разных типов краски
            </h3>
            <p>
              По типу состава краски делятся на четыре больших группы: водно-дисперсионные (акрил,
              латекс, водоэмульсионка), алкидные эмали, фасадные и декоративные. У каждой свой
              расход и сфера применения. Таблица — типовые значения с этикеток, увеличенные на
              реальный расход без идеальной грунтовки.
            </p>
            <div className="overflow-x-auto -mx-4 md:mx-0">
              <table className="w-full text-[14px] my-1 border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2.5 px-4 md:px-3 font-medium text-foreground">Тип краски</th>
                    <th className="text-left py-2.5 px-4 md:px-3 font-medium text-foreground">Расход, л/м²</th>
                    <th className="text-left py-2.5 px-4 md:px-3 font-medium text-foreground">Где применяется</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-2.5 px-4 md:px-3">Алкидная эмаль</td>
                    <td className="py-2.5 px-4 md:px-3">0,10</td>
                    <td className="py-2.5 px-4 md:px-3">Двери, радиаторы, металл</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2.5 px-4 md:px-3">Водоэмульсионная</td>
                    <td className="py-2.5 px-4 md:px-3">0,13</td>
                    <td className="py-2.5 px-4 md:px-3">Потолки, бюджетная отделка стен</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2.5 px-4 md:px-3">Акриловая, латексная</td>
                    <td className="py-2.5 px-4 md:px-3">0,15</td>
                    <td className="py-2.5 px-4 md:px-3">Спальни, гостиные, детские</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2.5 px-4 md:px-3">Фасадная, силиконовая</td>
                    <td className="py-2.5 px-4 md:px-3">0,18</td>
                    <td className="py-2.5 px-4 md:px-3">Балконы, фасады, влажные зоны</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2.5 px-4 md:px-3">Фактурная, декоративная</td>
                    <td className="py-2.5 px-4 md:px-3">0,20</td>
                    <td className="py-2.5 px-4 md:px-3">Акцентные стены, рельеф</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 md:px-3">Резиновая</td>
                    <td className="py-2.5 px-4 md:px-3">0,30</td>
                    <td className="py-2.5 px-4 md:px-3">Кровли, цоколь, гидрозащита</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-[18px] md:text-[19px] font-medium text-foreground mt-2 tracking-tight">
              Сколько краски нужно на типовую комнату
            </h3>
            <p>
              Чтобы быстро прикинуть бюджет до похода в магазин, удобно держать готовые цифры под
              популярные размеры. Таблица — для акриловой/латексной краски (0,15 л/м²) на стены, с
              потолками 2,7 м, одним окном и одной дверью. Запас 10% уже включён. Под другие типы
              краски и потолок — пересчитайте через калькулятор сверху.
            </p>
            <div className="overflow-x-auto -mx-4 md:mx-0">
              <table className="w-full text-[14px] my-1 border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2.5 px-4 md:px-3 font-medium text-foreground">Комната</th>
                    <th className="text-left py-2.5 px-4 md:px-3 font-medium text-foreground">Площадь стен</th>
                    <th className="text-left py-2.5 px-4 md:px-3 font-medium text-foreground">1 слой</th>
                    <th className="text-left py-2.5 px-4 md:px-3 font-medium text-foreground">2 слоя</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-2.5 px-4 md:px-3">12 м² (3 × 4)</td>
                    <td className="py-2.5 px-4 md:px-3">34,7 м²</td>
                    <td className="py-2.5 px-4 md:px-3">5,8 л</td>
                    <td className="py-2.5 px-4 md:px-3">11,5 л</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2.5 px-4 md:px-3">15 м² (3 × 5)</td>
                    <td className="py-2.5 px-4 md:px-3">40,1 м²</td>
                    <td className="py-2.5 px-4 md:px-3">6,7 л</td>
                    <td className="py-2.5 px-4 md:px-3">13,3 л</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2.5 px-4 md:px-3">18 м² (3 × 6)</td>
                    <td className="py-2.5 px-4 md:px-3">45,5 м²</td>
                    <td className="py-2.5 px-4 md:px-3">7,6 л</td>
                    <td className="py-2.5 px-4 md:px-3">15,1 л</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2.5 px-4 md:px-3">24 м² (4 × 6)</td>
                    <td className="py-2.5 px-4 md:px-3">50,9 м²</td>
                    <td className="py-2.5 px-4 md:px-3">8,4 л</td>
                    <td className="py-2.5 px-4 md:px-3">16,8 л</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 md:px-3">30 м² (5 × 6)</td>
                    <td className="py-2.5 px-4 md:px-3">56,3 м²</td>
                    <td className="py-2.5 px-4 md:px-3">9,3 л</td>
                    <td className="py-2.5 px-4 md:px-3">18,6 л</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-[18px] md:text-[19px] font-medium text-foreground mt-2 tracking-tight">
              Калькулятор краски для стен по площади
            </h3>
            <p>
              Принцип расчёта простой: площадь стен × расход краски × количество слоёв = нужный
              объём. Площадь стен — это периметр комнаты, умноженный на высоту, минус окна и двери.
              Калькулятор сверху делает это автоматически, проёмы вычитаются с типовыми размерами
              1,5 м² на окно и 1,6 м² на дверь. Площадь умножается на расход краски и на число
              слоёв, сверху добавляется 10% — на брак, подкраску и неровный отжим валика.
            </p>
            <p>
              Если хотите посчитать вручную: для комнаты 4 × 3 м с высотой 2,7 м и одним окном/дверью
              площадь стен = (4 + 3) × 2 × 2,7 − 1,5 − 1,6 = 34,7 м². Акриловой краской в два слоя:
              34,7 × 0,15 × 2 × 1,1 = 11,5 л. Округление в большую сторону: берите ведро 12 л или
              комбинацию 9 + 3 л.
            </p>

            <h3 className="text-[18px] md:text-[19px] font-medium text-foreground mt-2 tracking-tight">
              Расход краски на трубы и металл
            </h3>
            <p>
              Калькулятор сверху считает плоские поверхности — стены и потолок. Для труб формула
              другая: площадь трубы = длина × π × диаметр. Например, труба Ø50 мм длиной 5 метров
              имеет площадь 5 × 3,14 × 0,05 = 0,785 м². На алкидную эмаль (0,12 л/м²) в два слоя
              уйдёт 0,2 литра. Округляйте до ближайшей банки — реально это 0,5 или 1 л.
            </p>
            <p>
              Для металлоконструкций (ограждения, профили, ворота) считайте суммарную площадь всех
              видимых граней — обычно это 4 стороны для квадратного профиля или две для листового
              металла. По металлу выгодно брать составы «3 в 1»: они работают как грунт,
              антикоррозионная защита и финиш одновременно, расход 0,10–0,12 л/м².
            </p>

            <h3 className="text-[18px] md:text-[19px] font-medium text-foreground mt-2 tracking-tight">
              Сколько слоёв краски нужно
            </h3>
            <p>
              Один слой почти никогда не даёт ровного цвета: остаются просветы, пятна, разная
              интенсивность. Это нормально — производители заранее рассчитывают на два слоя. Три
              слоя нужны редко: когда перекрашиваете тёмное в светлое, когда основание сильно
              впитывает (свежая шпаклёвка без грунта), или когда краска разбавлена больше нормы.
              Удваивайте расход на каждый дополнительный слой.
            </p>
            <p>
              Между слоями выдерживайте паузу — она указана на банке. Для водно-дисперсионных
              обычно 4–6 часов, для алкидных сутки. Спешка ломает финиш: второй слой потянет
              недосохший первый, и стена пойдёт разводами. В прохладной или влажной комнате время
              сушки удваивается.
            </p>

            <h3 className="text-[18px] md:text-[19px] font-medium text-foreground mt-2 tracking-tight">
              Сколько краски брать с запасом
            </h3>
            <p>
              Калькулятор прибавляет 10% к расчёту — это страховка от непредвиденного: подкраска
              после повреждений, чуть больший расход на углах, лужицы в ванночке. На сложной
              поверхности (рельеф, гипсокартон со стыками, сильно впитывающая шпаклёвка) берите
              ещё 5–10% сверх. Лишнюю запечатанную банку магазин обычно принимает обратно в
              течение 14 дней.
            </p>
            <p>
              Главное правило: всю краску для одной поверхности покупайте за один раз, желательно
              одной партии. В разных партиях оттенок плавает — особенно у колерованных составов.
              Номер партии указан на этикетке рядом с артикулом. Если будете заодно{' '}
              <Link href="/remont/kalkulyator-oboev/" className="text-primary hover:text-primary-hover">клеить обои в соседней комнате</Link>
              {' '}или{' '}
              <Link href="/remont/kalkulyator-plitki/" className="text-primary hover:text-primary-hover">класть плитку в санузле</Link>,
              посчитайте материалы сразу — закажете всё одним заходом и сэкономите на доставке.
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
          <RelatedTools categorySlug="remont" excludeSlug="kalkulyator-kraski" limit={3} />
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
