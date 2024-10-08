import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './components/ui/Footer';
import Navbar from './components/ui/Navbar';

import { AuthProvider } from './authContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ICVerify',
  description: 'Digital Signatures on the Internet Computer Blockchain',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-satoshi">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
