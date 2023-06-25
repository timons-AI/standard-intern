import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({weight:['100','200','300','400','500','600','700','800','900'],
subsets: ['latin'],})
export const metadata = {
  title: 'Standard Intern',
  description: 'A standard website for standard interns.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
