import { Metadata } from "next";
// import Head from "next/head";
import Script from "next/script";
import { Roboto, Rubik_80s_Fade, Raleway_Dots, Ubuntu } from "next/font/google";
// import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";

import "./globals.css";
import Footer from "../components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700"],
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const rubik = Raleway_Dots({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "BigBrain Club | De Anza College",
  description: "BigBrain Club | De Anza College",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XR4FE2XFN6"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js"
        async
      ></Script>
      <Script id="google-analytics">
        {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
     
       gtag('config', 'G-XR4FE2XFN6');
        `}
      </Script>
      {/* <body className={GeistSans.className}> */}

      <body className={ubuntu.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
