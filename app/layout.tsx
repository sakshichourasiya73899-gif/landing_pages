import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: "MoodTunes | Music Recommendation Dashboard",
  description: "Discover music that matches your mood with AI-powered recommendations",
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
