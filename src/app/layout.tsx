import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'OpsBoard UI/UX Skillup',
  description: 'UI/UX improvement practice template'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className="page-shell">{children}</main>
      </body>
    </html>
  );
}
