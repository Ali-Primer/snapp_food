'use client'
import { Provider } from "react-redux";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import "./globals.css";

import localFont from 'next/font/local'
import { store } from "./redux/store";
import { metadata } from "./metadata";


const IranSansMobile = localFont({
  src: '../../public/font/Iranian_Sans.ttf'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="infos" content={metadata.description}/>
      </head>
      <body className={IranSansMobile.className}>
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
