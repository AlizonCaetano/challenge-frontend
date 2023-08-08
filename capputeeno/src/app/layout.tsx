import { Header } from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import { DefaultProvider } from '@/components/default-provider'

const saira = Saira({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Capputeeno',
  description: 'Created by Alizon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <DefaultProvider>
          <Header />
          {children}
        </DefaultProvider>
      </body>
    </html>
  )
}
