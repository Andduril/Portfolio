import './globals.css';
import 'keen-slider/keen-slider.min.css';

import type { Metadata } from 'next';
import { Inter, Geist_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Background from '@/components/ui/Background';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cookies } from 'next/headers';
import Glass from '@/components/ui/Glass';

const geistSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Anddy Labrut',
  description: 'Portfolio of Anddy Labrut, a web developer specializing in Next.js and React.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  const theme = (await (await cookies()).get('theme')?.value) || 'light';

  return (
    <html lang={locale} className={`${theme === 'dark' ? 'dark' : ''}`}>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased relative min-h-screen
          bg-radial-[at_50%_0%] from-[#cad5ff] to-[#bde8f8] dark:from-[#0f0f0f] dark:to-[#050505]
          text-black dark:text-slate-200
          `}
      >
        {/* <Background /> */}
        <NextIntlClientProvider messages={messages}>
          {/* <Background /> */}
          <main className="min-h-screen relative flex flex-col">
            <Glass opacity={20} className="flex-grow relative flex flex-col items-center">
              <Header theme={theme} lang={locale} />
              <div className="flex-grow max-w-md w-full">{children}</div>
              <Footer className="mt-8" />
            </Glass>
            {/* <Header theme={theme} lang={locale} /> */}
            {/* <div className="flex-grow">{children}</div> */}
            {/* <Footer /> */}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
