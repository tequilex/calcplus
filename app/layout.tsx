import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://calcplus.ru'),
  title: 'Calcplus.ru — калькуляторы для ремонта квартиры',
  description:
    'Онлайн-калькуляторы для квартирного ремонта: обои, краска, плитка, ламинат. Точный расчёт материалов бесплатно.',
  openGraph: {
    siteName: 'calcplus.ru',
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
        {/* TODO: insert real Metrica */}
        {/* <script dangerouslySetInnerHTML={{ __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};...})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(XXXXXXXX, "init", {clickmap:true});` }} /> */}
        <ThemeProvider attribute="data-theme" defaultTheme="light" disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
