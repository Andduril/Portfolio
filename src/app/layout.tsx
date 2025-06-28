// import './globals.css';
// import 'keen-slider/keen-slider.min.css';

// import type { Metadata } from 'next';
// import { Inter, Geist_Mono } from 'next/font/google';
// import { NextIntlClientProvider } from 'next-intl';
// import { getLocale, getMessages } from 'next-intl/server';
// import Background from '@/components/ui/Background';
// import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';
// import { cookies } from 'next/headers';
// import { Glass, MotionGl } from '@/components/ui/Glass';
// import UnderConstruct from '@/components/ui/UnderConstruct';
// import Presentation from '@/components/sections/home/presentation/Presentation';
// import Description from '@/components/sections/home/description/Description';

// import { motion } from 'motion/react';

// const geistSans = Inter({
//   variable: '--font-inter-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-mono',
//   subsets: ['latin'],
// });

// export const metadata: Metadata = {
//   title: 'Anddy Labrut',
//   description: 'Portfolio of Anddy Labrut, a web developer specializing in Next.js and React.',
// };

// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const locale = await getLocale();
//   const messages = await getMessages();

//   const theme = (await (await cookies()).get('theme')?.value) || 'light';

//   return (
//     <html lang={locale} className={`${theme === 'dark' ? 'dark' : ''}`}>
//       <body
//         className={`
//           ${geistSans.variable}
//           ${geistMono.variable}
//           antialiased relative min-h-screen
//           text-black dark:text-slate-200
//           `}
//       >
//         {/* <Background /> */}
//         <NextIntlClientProvider messages={messages}>
//           <Background />
//           {/* <div className="relative flex flex-col">
//             <section className="min-h-screen p-20 flex flex-col items-center">
//               <Glass className="flex-1 flex flex-row justify-center gap-15 items-center w-full max-w-[1400px] p-10">
//                 <Glass opacity={30} className="p-10 min-w-[400px]">
//                   <Presentation />
//                 </Glass>
//                 <Description />
//               </Glass>
//             </section>
//           </div> */}
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }

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

  const theme = (await (await cookies()).get('theme')?.value) || 'dark';

  return (
    <html lang={locale} className={`${theme === 'dark' ? 'dark' : ''}`}>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased relative min-h-screen
          text-slate-200
          flex flex-col gap-8
          `}
      >
        {/* <Background /> */}
        <NextIntlClientProvider messages={messages}>
          <Background />
          <Header theme={theme} lang={locale} />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
