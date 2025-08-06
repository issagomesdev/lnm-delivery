import { ReactNode } from 'react';
import StyledComponentsRegistry from '@/lib/registry';

export const metadata = {
  title: 'Litoral na mesa',
  description: 'Peça nos melhores deliveries do litoral.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Litoral na mesa</title>
        <meta name="theme-color" content="#FF5722" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#FF5722" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#FF5722" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <main>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
