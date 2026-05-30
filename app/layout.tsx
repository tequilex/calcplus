import type { Metadata } from 'next'
import Script from 'next/script'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/Header'
import { SubHeader } from '@/components/SubHeader'
import { Footer } from '@/components/Footer'
import './globals.css'

const YANDEX_METRIKA_ID = 109350467

export const metadata: Metadata = {
  metadataBase: new URL('https://pluscalc.ru'),
  title: 'Pluscalc — все нужные расчёты в одном месте',
  description:
    'Бесплатная платформа онлайн-инструментов для ежедневных задач: калькуляторы, конвертеры, генераторы. Без регистрации и без рекламы.',
  openGraph: {
    siteName: 'pluscalc.ru',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_ID}', 'ym');

            ym(${YANDEX_METRIKA_ID}, 'init', {ssr:true, webvisor:false, clickmap:true, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img
              src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`}
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <SubHeader />
            <main className="bg-lines flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
