import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Himanshu Dental Care | Premium & Elegant Dental Clinic',
  description: 'Experience premium, painless, and world-class dental treatments at Himanshu Dental Care. Your smile is our absolute priority.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#FAFAFA] text-[#222222] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
