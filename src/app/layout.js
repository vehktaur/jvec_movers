import Navbar from './components/navbar';
import Footer from './components/footer';
import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'JVEC Movers',
  description:
    'JPC Movers offers smooth and stress-free moving services, including safety protocols, highly trained professionals, and exceptional customer service. Fully licensed and insured.',
  keywords: [
    'moving services',
    'professional movers',
    'stress-free moving',
    'safety protocols',
    'customer service',
    'licensed movers',
    'JVEC Movers',
    'home moving',
    'commercial moving',
    'fully insured movers',
    'trained professionals',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={outfit.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
