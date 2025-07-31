import Header from '@/components/Header'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata = {
  title: 'Dhathri P M - Portfolio',
  description: 'Data Analyst Portfolio of Dhathri P M',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='relative'>
        <ThemeProvider >
          <div className=" sticky top-0 left-0 w-full z-20">
            <Header />
          </div>
          {children}
          </ThemeProvider>
      </body>
    </html>
  )
}
