import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Sides from '@/components/Sides';
import { SideBarProvider } from '@/utils/SideBarContext';
import SideBar from '@/components/SideBar';
import ModalShade from '@/components/ModalShade';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <ToastContainer
            position='top-right'
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover={false}
            theme='dark'
          />
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
