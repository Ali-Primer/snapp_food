import { Header } from "./components/header";
import "./globals.css";

import localFont from 'next/font/local'

export const metadata = {
  title: "snapp food",
  description: "the final project",
};

const IranSansMobile =  localFont({
  src: '../../public/font/Iranian_Sans.ttf'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={IranSansMobile.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
