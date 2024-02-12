'use client'
import { Provider } from "react-redux";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import "./globals.css";

import localFont from 'next/font/local'
import { store } from "./redux/store";

// export const metadata = {
//   title: "snapp food",
//   description: "the final project",
// };

const IranSansMobile = localFont({
  src: '../../public/font/Iranian_Sans.ttf'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
