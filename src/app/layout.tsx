
import Header from '@/compontents/Header'
import './globals.css'
import { Montserrat, Roboto } from 'next/font/google'
import Footer from '@/compontents/Footer'


const montserrat = Montserrat({
  subsets: ['latin'], weight: ['400', '700']
})

export const metadata = {
  title: 'UXMK',
  description: 'User Experience for businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">


      <body className={`${montserrat.className} `}>
        <div className='m-auto container text-black ' >
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  )
}
