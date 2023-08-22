import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Sides from '@/components/Sides';
import { SideBarProvider } from '@/utils/SideBarContext';
import SideBar from '@/components/SideBar';
import ModalShade from '@/components/ModalShade';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kay Yan Cheung',
  description: "Kay Yan Cheung's portfolio site v2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SideBarProvider>
          <Header />
          {children}
          <Sides />
          <Footer />
          <SideBar />
          <ModalShade />
        </SideBarProvider>
      </body>
    </html>
  );
}
