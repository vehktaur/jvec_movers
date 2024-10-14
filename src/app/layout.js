import Footer from './components/footer';
import Navbar from './components/navbar';
import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Outfit } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'JVEC Movers',
  description:
    'JPC Movers offers smooth and stress-free moving services, including safety protocols, highly trained professionals, and exceptional customer service. Fully licensed and insured.',
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
