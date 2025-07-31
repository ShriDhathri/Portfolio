import Header from '@/components/Header'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata = {
  title: 'Your App',
  description: 'App description',
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
