import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'О сайте pluscalc.ru — бесплатные онлайн-калькуляторы для ремонта',
  description:
    'pluscalc.ru — проект бесплатных онлайн-калькуляторов для расчёта материалов при квартирном ремонте. Как мы считаем, кто стоит за сайтом и как связаться.',
  openGraph: {
    title: 'О сайте pluscalc.ru — бесплатные онлайн-калькуляторы для ремонта',
    description: 'pluscalc.ru — проект бесплатных онлайн-калькуляторов для квартирного ремонта.',
    locale: 'ru_RU',
    type: 'website',
    siteName: 'pluscalc.ru',
  },
  alternates: {
    canonical: 'https://pluscalc.ru/o-saite/',
  },
}

export default function AboutPage() {
  return (
    <div className="max-w-[768px] mx-auto px-4 md:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-[28px] md:text-[32px] font-medium text-foreground mb-3 tracking-tight">
          О сайте
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-[52ch]">
          Как устроен проект, какие задачи решает и кто за ним стоит.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-[22px] md:text-[24px] font-medium text-foreground mb-4 tracking-tight">
          Зачем мы сделали сайт
        </h2>
        <div className="flex flex-col gap-4 text-foreground leading-relaxed">
          <p>
            Когда делаете ремонт самостоятельно, постоянно возникает один и тот же вопрос: «а
            сколько брать?». Сколько рулонов обоев на комнату 18 м². Сколько банок краски на
            коридор. Сколько плитки на стены в ванной с учётом подрезки. Считать вручную долго,
            легко ошибиться. Покупать с запасом «на глаз» — значит переплачивать за лишнее.
          </p>
          <p>
            pluscalc.ru — попытка собрать все нужные при ремонте калькуляторы в одном месте. Без
            рекламы поверх формы, без обязательной регистрации, без необходимости оставлять email,
            чтобы увидеть результат. Открыли страницу, ввели размеры, получили число рулонов или
            литров. Всё.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-[22px] md:text-[24px] font-medium text-foreground mb-4 tracking-tight">
          Как мы считаем
        </h2>
        <div className="flex flex-col gap-4 text-foreground leading-relaxed">
          <p>
            Формулы взяты из строительной практики, а не из учебника геометрии. Учитывается, что в
            жизни есть подрезка, раппорт рисунка, прямые и обратные стыковки, разные размеры окон
            и дверей. Калькуляторы автоматически добавляют разумный запас на возможный брак —
            обычно 5–10% в зависимости от материала.
          </p>
          <p>
            Если результат кажется странным или формула вызывает вопросы — напишите. У каждой
            цифры в калькуляторе есть основание, и мы готовы его объяснить.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-[22px] md:text-[24px] font-medium text-foreground mb-4 tracking-tight">
          Без регистрации и без слежки
        </h2>
        <div className="flex flex-col gap-4 text-foreground leading-relaxed">
          <p>
            Все расчёты происходят прямо в браузере. Размеры комнаты, которые вы вводите, никуда
            не уходят: ни на сервер, ни в базу, ни третьим лицам. Регистрация не нужна, email
            никто не спросит.
          </p>
          <p>
            Из аналитики установлена только Яндекс Метрика. Она собирает обезличенные данные:
            страну, тип устройства, какие страницы вы открывали. Это нужно, чтобы понимать, что в
            калькуляторах работает удобно, а что стоит улучшить. Никакие персональные данные не
            записываются.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-[22px] md:text-[24px] font-medium text-foreground mb-4 tracking-tight">
          Кто за этим стоит
        </h2>
        <div className="flex flex-col gap-4 text-foreground leading-relaxed">
          <p>
            Сайт делает один человек. Несколько раз сам проходил через ремонт и каждый раз заново
            искал в интернете нормальные калькуляторы. После очередной неудобной попытки решил
            собрать инструменты, которые хотел бы видеть сам: точные, простые, без всплывающих
            окон и обязательной авторизации.
          </p>
          <p>
            Если у вас есть опыт ремонта и идеи, какие ещё калькуляторы стоит добавить, —
            поделитесь. Сайт развивается по обратной связи от тех, кто им пользуется.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-[22px] md:text-[24px] font-medium text-foreground mb-4 tracking-tight">
          Обратная связь
        </h2>
        <div className="flex flex-col gap-4 text-foreground leading-relaxed">
          <p>
            Нашли ошибку в расчёте, заметили баг, хотите предложить новый калькулятор или просто
            сказать спасибо — пишите на{' '}
            <a href="mailto:hello@pluscalc.ru" className="text-primary">
              hello@pluscalc.ru
            </a>
            . Письма читаем лично, отвечаем обычно в течение пары дней.
          </p>
        </div>
      </section>
    </div>
  )
}
