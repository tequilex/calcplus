import type { Metadata } from 'next'
import Link from 'next/link'
import { Lightbulb, AlertTriangle, Clock } from 'lucide-react'
import { FAQ } from '@/components/FAQ'
import { RelatedTools } from '@/components/RelatedTools'
import { WallpaperCalculator } from '@/components/calculators/WallpaperCalculator'

export const metadata: Metadata = {
  title: 'Калькулятор обоев онлайн — расчёт рулонов и клея на комнату | pluscalc.ru',
  description:
    'Бесплатный онлайн-калькулятор обоев на комнату любой площади. Точный расчёт количества рулонов и расхода клея с учётом окон, дверей и раппорта рисунка. Результат — мгновенно.',
  openGraph: {
    title: 'Калькулятор обоев онлайн — расчёт рулонов и клея на комнату | pluscalc.ru',
    description:
      'Бесплатный онлайн-калькулятор обоев на комнату любой площади. Точный расчёт количества рулонов и расхода клея с учётом окон, дверей и раппорта рисунка.',
    locale: 'ru_RU',
    type: 'website',
    siteName: 'pluscalc.ru',
  },
  alternates: {
    canonical: 'https://pluscalc.ru/remont/kalkulyator-oboev/',
  },
}

const faqItems = [
  {
    question: 'Сколько рулонов обоев нужно на комнату 12 м²?',
    answer:
      'Для типовой комнаты 12 м² (примерно 3 × 4 м) с потолками 2,7 м, одним окном и одной дверью периметр под оклейку — около 11,6 м. Стандартными рулонами 0,53 × 10 м потребуется 9 штук с запасом, метровыми 1,06 × 10 м — 5. С крупным раппортом прибавьте по 1–2 рулона. Точную цифру под ваши размеры покажет калькулятор выше — он же сразу посчитает, сколько клея взять.',
    defaultOpen: true,
  },
  {
    question: 'Сколько рулонов обоев нужно на комнату 18 м²?',
    answer:
      'Для типовой комнаты 18 м² (3 × 6 м) с потолками 2,7 м, окном и дверью нужно 11 рулонов 0,53 × 10 м или 6 рулонов 1,06 × 10 м — это уже с запасом 1 рулон. Если потолки выше 3 м, прибавьте 1–2 рулона: из десятиметрового получится только две полные полосы вместо трёх, расход вырастает в полтора раза. С крупным раппортом тоже плюс 1–2 рулона.',
  },
  {
    question: 'Что такое раппорт?',
    answer:
      'Раппорт — это шаг повторения рисунка по вертикали. Чем он крупнее, тем больше уходит в обрезки при подгонке соседних полос. У гладких обоев раппорт нулевой, у мелких узоров — обычно 32 см, у крупных — 64 см и больше. Размер раппорта всегда указан на этикетке рулона. При крупном раппорте общий расход вырастает на 10–20%.',
  },
  {
    question: 'Как посчитать обои на потолок?',
    answer:
      'Калькулятор выше считает только стены — потолок надо посчитать отдельно. Берите площадь потолка (длина × ширина комнаты) и делите на площадь одного рулона (ширина × длина рулона). Для комнаты 3 × 4 м площадь потолка 12 м², а в рулоне 0,53 × 10 м — 5,3 м². Получается 12 / 5,3 ≈ 2,3 — берите 3 рулона. На потолок обычно выбирают флизелин: с ним удобнее работать снизу вверх, и он не растягивается под весом клея.',
  },
  {
    question: 'Что точнее: расчёт по площади или по периметру?',
    answer:
      'Калькулятор считает по периметру, и это точнее. По площади (площадь стен ÷ площадь рулона) считают для оценки «на коленке», но способ не учитывает, что обои клеятся вертикальными полосами, а не как ковёр. У каждой полосы остаётся обрезок снизу или сверху, и его в другое место не пристроишь. Расчёт по периметру учитывает реальное число полос и потери от подгонки рисунка — именно этим он точнее.',
  },
  {
    question: 'Сколько обоев брать в запас?',
    answer:
      'Калькулятор сразу добавляет один рулон сверх минимально нужного — это страховка от повреждений в работе и для будущей подклейки. Если в комнате сложная геометрия с нишами и выступами, имеет смысл взять ещё один рулон. Главное — покупать все рулоны из одной партии, иначе оттенки могут чуть отличаться. Невскрытые рулоны магазины принимают обратно в течение 14 дней.',
  },
  {
    question: 'Сколько клея нужно на обои?',
    answer:
      'Средний расход — 25 г сухого клея на квадратный метр стены. Калькулятор сразу показывает нужное количество в килограммах. На комнату 18 м² (площадь стен около 30 м²) уйдёт примерно 0,75 кг — это три стандартные пачки по 250 г. Для тяжёлых виниловых и флизелиновых обоев расход выше, для бумажных — ниже. Берите клей под ваш тип обоев: универсальные стоят дороже, но подходят ко всему.',
  },
  {
    question: 'Чем отличаются метровые от полуметровых?',
    answer:
      'Метровые обои шире — 1,06 м против стандартных 0,53 м. Стыков получается вдвое меньше, поэтому стена выглядит цельнее. Но клеить их в одиночку тяжелее: широкое полотно нужно ровно прижать к стене, не допустив пузырей. Для маленьких комнат и углов обычно удобнее полуметровые. По расходу метровые выгоднее — на ту же площадь уходит почти вдвое меньше рулонов.',
  },
  {
    question: 'Можно ли клеить обои на старые?',
    answer:
      'Нет, старые обои нужно снять полностью. Под ними часто прячутся пузыри, плесень или плохо приклеенные участки. Новые на такой основе быстро отвалятся вместе со старыми. По-хорошему стену зачищают до штукатурки, шпаклюют неровности, грунтуют, и только потом клеят. Так результат продержится 10–15 лет, а не два года.',
  },
]

const tips = [
  {
    icon: Lightbulb,
    title: 'Главное правило',
    text: 'Все рулоны — одной партии. Номер указан на этикетке рядом с артикулом. В разных партиях оттенок плавает, на свету разница видна.',
  },
  {
    icon: AlertTriangle,
    title: 'Что забывают учесть',
    text: 'Раппорт добавляет 10–20% обрезков, а высоту мерьте у стены: потолки «плывут», берите максимум — иначе самой высокой полосы не хватит.',
  },
  {
    icon: Clock,
    title: 'Сколько займёт',
    text: 'Поклейка типовой комнаты — день работы с напарником. Плюс сутки на просушку клея, прежде чем заносить мебель и снимать малярный скотч.',
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
          name: 'Ремонт',
          item: 'https://pluscalc.ru/remont/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Калькулятор обоев',
          item: 'https://pluscalc.ru/remont/kalkulyator-oboev/',
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

export default function WallpaperPage() {
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
            Калькулятор обоев онлайн
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-[52ch]">
            Рассчитайте, сколько обоев и клея нужно на комнату — с учётом окон, дверей и раппорта рисунка. Бесплатно, без регистрации, результат мгновенно.
          </p>
        </div>

        <WallpaperCalculator />

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
              'Укажите количество окон и дверей: их площадь автоматически вычтется из периметра.',
              'Выберите ширину и длину рулона — данные есть на этикетке. Если обои с рисунком, укажите раппорт.',
              'Результат пересчитывается мгновенно: рулоны с запасом 1 шт. и количество клея в килограммах.',
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
            Как правильно рассчитать обои на комнату
          </h2>
          <div className="flex flex-col gap-5 text-foreground leading-relaxed">
            <p>
              «10 метров в рулоне» на этикетке — это длина полотна, а не площадь, которую он
              закроет. Этот момент сбивает с толку чаще всего. Чтобы правильно посчитать рулоны на
              комнату, надо знать четыре вещи: периметр, высоту потолков, размер рулона и раппорт
              рисунка. Калькулятор выше всё считает сам и заодно показывает, сколько клея взять
              под этот объём. Но логику стоит понимать — хотя бы чтобы проверить, не выдал ли он
              странный результат.
            </p>

            <h3 className="text-[18px] md:text-[19px] font-medium text-foreground mt-2 tracking-tight">
              Какие данные нужны для расчёта
            </h3>
            <p>
              Возьмите рулетку. Длину и ширину комнаты меряйте в метрах, по плинтусу. Высоту
              потолков обязательно меряйте у стены: в старых домах потолок «плывёт», и где-то
              получится 2,65, а где-то 2,72. Берите максимум, иначе самой высокой полосы не хватит.
              Окна и двери просто посчитайте по штукам, их площадь калькулятор вычтет сам. Размеры
              рулона и раппорт смотрите на этикетке: чаще всего это ширина 0,53 или 1,06 м, длина
              10 м, раппорт от 0 до 64 см.
            </p>

            <h3 className="text-[18px] md:text-[19px] font-medium text-foreground mt-2 tracking-tight">
              Стандартные размеры рулонов обоев
            </h3>
            <p>
              В магазинах продаются обои разной ширины и длины, и от этого напрямую зависит, сколько
              рулонов уйдёт на комнату. Метровый виниловый закрывает вдвое больше площади, чем
              полуметровый бумажный, при той же длине. Поэтому одной и той же комнате может хватить
              и 6, и 12 рулонов — смотря какие выбрать.
            </p>
            <div className="overflow-x-auto -mx-4 md:mx-0">
              <table className="w-full text-[14px] my-1 border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2.5 px-4 md:px-3 font-medium text-foreground">Ширина</th>
                    <th className="text-left py-2.5 px-4 md:px-3 font-medium text-foreground">Длина</th>
                    <th className="text-left py-2.5 px-4 md:px-3 font-medium text-foreground">Тип</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-2.5 px-4 md:px-3">0,53 м</td>
                    <td className="py-2.5 px-4 md:px-3">10 м</td>
                    <td className="py-2.5 px-4 md:px-3">Стандартные бумажные и виниловые</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2.5 px-4 md:px-3">0,53 м</td>
                    <td className="py-2.5 px-4 md:px-3">15 м</td>
                    <td className="py-2.5 px-4 md:px-3">Удлинённые бумажные</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2.5 px-4 md:px-3">1,06 м</td>
                    <td className="py-2.5 px-4 md:px-3">10 м</td>
                    <td className="py-2.5 px-4 md:px-3">Метровые виниловые</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 md:px-3">0,7–0,75 м</td>
                    <td className="py-2.5 px-4 md:px-3">10 м</td>
                    <td className="py-2.5 px-4 md:px-3">Флизелиновые европейские</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-[18px] md:text-[19px] font-medium text-foreground mt-2 tracking-tight">
              Сколько рулонов нужно на типовую комнату
            </h3>
            <p>
              Чтобы быстро прикинуть бюджет до похода в магазин, удобно держать в голове готовые
              цифры для популярных размеров комнат. Таблица ниже — для высоты потолков 2,7 м с
              одним окном и одной дверью, запас 1 рулон уже учтён. Под ваши размеры точнее
              посчитает калькулятор сверху.
            </p>
            <div className="overflow-x-auto -mx-4 md:mx-0">
              <table className="w-full text-[14px] my-1 border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2.5 px-4 md:px-3 font-medium text-foreground">Комната</th>
                    <th className="text-left py-2.5 px-4 md:px-3 font-medium text-foreground">Периметр</th>
                    <th className="text-left py-2.5 px-4 md:px-3 font-medium text-foreground">0,53 × 10 м</th>
                    <th className="text-left py-2.5 px-4 md:px-3 font-medium text-foreground">1,06 × 10 м</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-2.5 px-4 md:px-3">12 м² (3 × 4)</td>
                    <td className="py-2.5 px-4 md:px-3">11,6 м</td>
                    <td className="py-2.5 px-4 md:px-3">9 рулонов</td>
                    <td className="py-2.5 px-4 md:px-3">5 рулонов</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2.5 px-4 md:px-3">15 м² (3 × 5)</td>
                    <td className="py-2.5 px-4 md:px-3">13,6 м</td>
                    <td className="py-2.5 px-4 md:px-3">10 рулонов</td>
                    <td className="py-2.5 px-4 md:px-3">6 рулонов</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2.5 px-4 md:px-3">18 м² (3 × 6)</td>
                    <td className="py-2.5 px-4 md:px-3">15,6 м</td>
                    <td className="py-2.5 px-4 md:px-3">11 рулонов</td>
                    <td className="py-2.5 px-4 md:px-3">6 рулонов</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2.5 px-4 md:px-3">24 м² (4 × 6)</td>
                    <td className="py-2.5 px-4 md:px-3">17,6 м</td>
                    <td className="py-2.5 px-4 md:px-3">13 рулонов</td>
                    <td className="py-2.5 px-4 md:px-3">7 рулонов</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 md:px-3">30 м² (5 × 6)</td>
                    <td className="py-2.5 px-4 md:px-3">19,6 м</td>
                    <td className="py-2.5 px-4 md:px-3">14 рулонов</td>
                    <td className="py-2.5 px-4 md:px-3">8 рулонов</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-[18px] md:text-[19px] font-medium text-foreground mt-2 tracking-tight">
              Расход клея на обои
            </h3>
            <p>
              Калькулятор показывает количество клея в килограммах из расчёта 25 г сухой смеси на
              квадратный метр стены — это средняя норма для виниловых обоев на флизелиновой основе.
              Для лёгких бумажных уйдёт меньше (15–20 г/м²), для тяжёлого винила и флизелина —
              больше (30–40 г/м²). Стандартная пачка 250 г закрывает 4–5 рулонов. Берите пачку с
              запасом: разводить клей частями неудобно, а остатки в открытой упаковке быстро портятся.
            </p>
            <p>
              Тип клея подбирают под обои. Для бумажных — обычный КМЦ. Для виниловых на флизелиновой
              основе — клей с пометкой «для тяжёлых обоев». Для флизелиновых — специальный
              флизелиновый: он наносится только на стену, а не на полотно. Универсальные дороже,
              но работают со всем подряд.
            </p>

            <h3 className="text-[18px] md:text-[19px] font-medium text-foreground mt-2 tracking-tight">
              Калькулятор обоев на потолок
            </h3>
            <p>
              Калькулятор выше считает только стены. Потолок надо посчитать отдельно: площадь
              потолка (длина × ширина комнаты) разделите на площадь одного рулона (ширина × длина
              рулона). Для комнаты 3 × 4 м потолок — 12 м², рулон 0,53 × 10 м даёт 5,3 м²,
              получаем 12 / 5,3 ≈ 2,3 — берите 3 рулона. Метровым флизелином 1,06 × 10 м (10,6 м²)
              хватит двух.
            </p>
            <p>
              На потолок чаще выбирают флизелин: он не растягивается под весом клея и легче клеится
              в одиночку, потому что клей мажется только на потолок, а не на полотно. И помните про
              раппорт: при крупном рисунке цельные полосы должны идти от окна, иначе будет видно
              стыки.
            </p>

            <h3 className="text-[18px] md:text-[19px] font-medium text-foreground mt-2 tracking-tight">
              По площади или по периметру — что точнее
            </h3>
            <p>
              В интернете встречаются два подхода: считать по площади стен или по периметру.
              Калькулятор выше использует периметр — это точнее. По площади (площадь стен ÷ площадь
              рулона) удобно прикидывать «на коленке», но способ не учитывает, что обои клеятся
              вертикальными полосами, а не как ковёр.
            </p>
            <p>
              У каждой полосы снизу или сверху остаётся обрезок, и пристроить его в другое место
              почти невозможно: на стене не должно быть горизонтальных стыков. Расчёт по периметру
              сразу учитывает реальное количество полос, сколько их выйдет из одного рулона и
              сколько уйдёт на подгонку рисунка. Поэтому результат ближе к реальной покупке, чем
              «формула из учебника».
            </p>

            <h3 className="text-[18px] md:text-[19px] font-medium text-foreground mt-2 tracking-tight">
              Как учитывать раппорт рисунка
            </h3>
            <p>
              Самое коварное при расчёте — рисунок. У гладких обоев без узора полосы стыкуются как
              удобно, потерь не будет. С крупным раппортом всё сложнее. Раппорт — это
              повторяющийся по вертикали узор, и каждую следующую полосу нужно сдвинуть так, чтобы
              рисунок совпал с предыдущей. В обрезки уходит от пары сантиметров до полуметра на
              полосу. Общий расход вырастает процентов на 10–20.
            </p>
            <p>
              На этикетке раппорт обозначается стрелками. Прямая стрелка вверх значит «прямая
              стыковка»: рисунок совпадает на одной высоте. Стрелка со сдвигом — «обратная
              стыковка»: каждую вторую полосу нужно перевернуть. Если рисунок крупный (64 см и
              больше), берите не один, а два рулона в запас. С крупным раппортом обрезков всегда
              много.
            </p>

            <h3 className="text-[18px] md:text-[19px] font-medium text-foreground mt-2 tracking-tight">
              Сколько обоев брать с запасом
            </h3>
            <p>
              Калькулятор сразу прибавляет один рулон сверх минимума. Это страховка от повреждений
              в работе и для подклейки, если через год-два обои случайно порвутся. Главное правило:
              все рулоны брать из одной партии. В разных партиях оттенок может слегка плавать, и на
              свету это бросается в глаза. Номер партии указан на этикетке рядом с артикулом —
              проверьте, что он одинаковый на всех рулонах.
            </p>
            <p>
              Для комнаты сложной формы (ниши, выступы, эркер) берите ещё один рулон сверх. Лишнее
              всегда можно вернуть в магазин: большинство сетей принимает обои в течение 14 дней,
              если этикетка не повреждена. А вот ехать второй раз за недостающим рискованно — часто
              оказывается, что нужной партии уже нет. Если будете заодно{' '}
              <Link href="/remont/kalkulyator-kraski/" className="text-primary hover:text-primary-hover">красить часть стен</Link>{' '}
              или{' '}
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
          <RelatedTools categorySlug="remont" excludeSlug="kalkulyator-oboev" limit={3} />
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
