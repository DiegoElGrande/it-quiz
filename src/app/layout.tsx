import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/widgets/navigation';
import StoreProvider from './provider-store';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'IT Quiz for interview',
  description:
    'A set of questions designed to help you train your knowledge for an interview',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <StoreProvider>
          <main className="flex-1 flex justify-center items-center">
            {children}
          </main>
          <Navigation />
          {modal}
        </StoreProvider>
      </body>
    </html>
  );
}
