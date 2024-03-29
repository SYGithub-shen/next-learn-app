import type {Metadata} from "next";
import {Inter, Roboto} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import {ReactNode, Suspense} from "react";
import NavBar from "@/app/NavBar";
import Loading from "@/app/loading";
import GithubProvider from "@/app/auth/GithubProvider";
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";

const inter = Inter({subsets: ["latin"]});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '500'],
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  openGraph: {
    title: "Create Next App",
    description: "Generated by create next app",
  }
};


const pingFang = localFont({
  src: "../public/fonts/苹方黑体-准-简.ttf",
  variable: '--font-pingFang',
})
export default function RootLayout({children,}: Readonly<{children: ReactNode}>) {
  return (
    <html lang="en" data-theme={'winter'}>
      <body className={pingFang.variable}>
      <GoogleAnalyticsScript />
      <GithubProvider>
        <NavBar/>
        <main className='p-5'>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </main>
      </GithubProvider>
      </body>
    </html>
  );
}
