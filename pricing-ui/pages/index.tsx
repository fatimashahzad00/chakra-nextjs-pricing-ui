import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import { Header } from '@/components/Header';
import { Pricing } from '@/components/Pricing';
import { Features } from '@/components/Features';

export default function Home() {
  return (
    <div className='App'>
      <Header />
      <Pricing />
      <Features />
    </div>
  );
}

