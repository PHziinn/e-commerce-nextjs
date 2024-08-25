import { Inter } from 'next/font/google';
import './globals.css';
import { ReactQueryClientProvider } from '@/service/reactQueryClient';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E-commerce',
  description: 'E-commerce com Next.js',
};

export default function RootLayout({ children }) {
  return (
    <ReactQueryClientProvider>
      <html lang="pt-BR">
        <body className={inter.className}>{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
}
