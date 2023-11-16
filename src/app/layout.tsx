import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextAuthProvider } from './providers'
import AuthChecker from '@/components/auth/authchecker'
import MainLayout from '@/components/layout/MainLayout'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CPI Cambaúba',
  description: 'Controle dos Processos Internos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
          <NextAuthProvider>
            {/* <AuthChecker> */}
            <MainLayout>
              {children}
            </MainLayout>
            <ToastContainer />
            {/* </AuthChecker> */}
          </NextAuthProvider>
        
      </body>
    </html>
  )
}
