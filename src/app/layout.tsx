'use client';
import './globals.css';
import Nav from './components/Nav';
import { RecoilRoot } from 'recoil';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>OPENER</title>
      </head>
      <body>
        <header className="">
          <Nav />
        </header>
        <RecoilRoot>{children}</RecoilRoot>
      </body>
    </html>
  );
}
