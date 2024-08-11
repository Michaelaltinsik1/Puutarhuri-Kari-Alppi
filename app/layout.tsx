import './globals.css';
import type { Metadata } from 'next';

import StyledComponentsRegistry from './registry';

export const metadata: Metadata = {
  robots: { index: true, follow: true },
  title: 'Puutarhuri Kari Alppi',
  description:
    'Tuoretta parsaa ja pensasmustikkaa Mahnalasta. Tutustu valikoimaamme ja ota yhteyttä',
  verification: {
    google: 'i3Xlc0YEXCnihK-y5aqZxVEDnxZJSR3H6Ov5L8ZGVCY',
  },
  openGraph: {
    title: 'Puutarhuri Kari Alppi',
    siteName: 'Puutarhuri Kari Alppi',
    description:
      'Tuoretta parsaa ja pensasmustikkaa Mahnalasta. Tutustu valikoimaamme ja ota yhteyttä',
    url: 'https://puutarhurikarialppi.fi/',
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
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
