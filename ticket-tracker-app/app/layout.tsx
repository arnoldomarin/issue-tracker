import '@radix-ui/themes/styles.css';
import './theme-config.css';
import './globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import { Theme } from '@radix-ui/themes';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Issue Tracket',
  description: 'App where you can create, edit, delete issues and assign them to users',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.variable}>
          <Theme appearance="light" accentColor="violet" radius="full">
            <NavBar />
            <main className='p-5'>
              {children}
            </main>
          </Theme>
        </body>
    </html>
  )
}
