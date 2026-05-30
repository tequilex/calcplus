import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'О сайте pluscalc.ru — бесплатные онлайн-инструменты для ежедневных задач',
  description:
    'pluscalc.ru — платформа бесплатных онлайн-инструментов: калькуляторы, конвертеры, генераторы. Как устроен проект, как мы считаем и как связаться.',
  openGraph: {
    title: 'О сайте pluscalc.ru — бесплатные онлайн-инструменты для ежедневных задач',
    description: 'pluscalc.ru — платформа бесплатных онлайн-инструментов: калькуляторы, конвертеры, генераторы.',
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
            В жизни постоянно нужны быстрые расчёты: сколько рулонов обоев на комнату, какой
            индекс массы тела, как изменится платёж по ипотеке при другой ставке, сколько НДФЛ
            удержат с зарплаты. Считать вручную долго, ошибиться легко. А готовые сервисы часто
            прячут результат за регистрацией, баннерами и попапами «подпишитесь, чтобы продолжить».
          </p>
          <p>
            pluscalc.ru — попытка собрать нужные онлайн-инструменты в одном месте: калькуляторы,
            конвертеры, генераторы. Без рекламы поверх формы, без обязательной регистрации, без
            необходимости оставлять email, чтобы увидеть результат. Открыли страницу, ввели
            данные, получили ответ. Всё.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-[22px] md:text-[24px] font-medium text-foreground mb-4 tracking-tight">
          Как мы считаем
        </h2>
        <div className="flex flex-col gap-4 text-foreground leading-relaxed">
          <p>
            Формулы берём из практики и официальных источников: строительных норм, медицинских
            рекомендаций, банковских и налоговых правил. Калькуляторы учитывают то, с чем
            сталкиваешься в реальности — подрезку и раппорт у обоев, рост и возраст для нормы
            калорий, аннуитет и досрочные платежи для ипотеки.
          </p>
          <p>
            Если результат кажется странным или формула вызывает вопросы — напишите. У каждой
            цифры есть основание, и мы готовы его объяснить.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-[22px] md:text-[24px] font-medium text-foreground mb-4 tracking-tight">
          Без регистрации и без слежки
        </h2>
        <div className="flex flex-col gap-4 text-foreground leading-relaxed">
          <p>
            Все расчёты происходят прямо в браузере. Цифры, которые вы вводите, никуда не уходят:
            ни на сервер, ни в базу, ни третьим лицам. Регистрация не нужна, email никто не
            спросит.
          </p>
          <p>
            Из аналитики установлена только Яндекс Метрика. Она собирает обезличенные данные:
            страну, тип устройства, какие страницы вы открывали. Это нужно, чтобы понимать, какие
            инструменты работают удобно, а что стоит улучшить. Никакие персональные данные не
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
            Сайт делает один человек. Каждый раз, когда нужен был простой онлайн-калькулятор или
            конвертер, приходилось пробираться через рекламу, формы подписки и сомнительные
            интерфейсы. После очередной такой попытки решил собрать инструменты, которые хотел бы
            видеть сам: точные, простые, без всплывающих окон и обязательной авторизации.
          </p>
          <p>
            Если у вас есть идеи, какие ещё инструменты стоит добавить — поделитесь. Сайт
            развивается по обратной связи от тех, кто им пользуется.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-[22px] md:text-[24px] font-medium text-foreground mb-4 tracking-tight">
          Обратная связь
        </h2>
        <div className="flex flex-col gap-4 text-foreground leading-relaxed">
          <p>
            Нашли ошибку в расчёте, заметили баг, хотите предложить новый инструмент или просто
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
