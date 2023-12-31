import './globals.css';
import type { Metadata } from 'next';

// import { Open_Sans } from 'next/font/google';

import StyledComponentsRegistry from './registry';
// export const OpenSans = Open_Sans({
//   subsets: ['latin'],
//   variable: '--font-open-sans',
// });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={OpenSans.className}> */}
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
