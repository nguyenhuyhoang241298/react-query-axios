import { LocaleProvider } from '@/components/locale-provider'
import NextAuthProvider from '@/components/next-auth-provider'
import { ReactQueryProvider } from '@/components/react-query-provider'
import { ThemeProvider } from '@/components/themes-provider'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

interface Props {
  children: ReactNode
  params: { locale: string }
}

export default function RootLayout({ children, params: { locale } }: Props) {
  return (
    <html suppressHydrationWarning className={roboto.className}>
      <body className={cn('font-sans', fontSans.variable)}>
        <NextAuthProvider>
          <ThemeProvider>
            <LocaleProvider locale={locale}>
              <TooltipProvider delayDuration={200}>
                <ReactQueryProvider>{children}</ReactQueryProvider>
                <Toaster />
              </TooltipProvider>
            </LocaleProvider>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
