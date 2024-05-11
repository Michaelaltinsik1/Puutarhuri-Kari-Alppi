import './globals.css';
import type { Metadata } from 'next';

import StyledComponentsRegistry from './registry';

export const metadata: Metadata = {
  title: 'Puutarhuri Kari Alppi',
  description:
    'Tervetuloa puutarhaliikkeeseemme! Tutustu valikoimaamme. Aukioloajat, valikoima, tilaukset, tietoa meistä ja yhteystiedot löydät helposti sivustoltamme.',
  openGraph: {
    title: 'Puutarhuri Kari Alppi',
    description:
      'Tervetuloa puutarhaliikkeeseemme! Tutustu valikoimaamme. Aukioloajat, valikoima, tilaukset, tietoa meistä ja yhteystiedot löydät helposti sivustoltamme.',
    url: 'https://puutarhuri-kari-alppi.vercel.app/',
    type: 'website',
  },
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
