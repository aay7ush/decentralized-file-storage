import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { WalletProvider } from "@/components/MintbaseWalletProvider"
import Provider from "@/components/Provider"
import { Toaster } from "@/components/ui/toaster"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Decentralized File Storage",
  description:
    "This application leverages the power of blockchain technology, specifically the NEAR blockchain, to provide a secure and decentralized platform for storing, downloading, uploading, and sharing files.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Provider>
      <WalletProvider>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            {children}
            <Toaster />
            <Footer />
          </body>
        </html>
      </WalletProvider>
    </Provider>
  )
}
