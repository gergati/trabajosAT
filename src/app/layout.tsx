import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Onest } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components";
import { Toaster } from 'sonner'
import { ThemeProvider } from "@/components/ui/theme-provider";


const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s - Trabajos | AT',
    default: 'Home - Trabajos | AT',
  },
  metadataBase: new URL('https://trabajosat.vercel.app/'),
  description: "Una página para buscar trabajo en AT",
  openGraph: {
    title: 'Home - Trabajos | AT',
    description: "Una página para buscar trabajo en AT",
    type: 'website',
    locale: 'es_ES',
    url: "https://trabajosat.vercel.app/",
    siteName: "TrabajosAT",
    images: [
      {
        url: '/trabajosAT.png',
        width: 1260,
        height: 800,
      }
    ]
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={onest.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Provider>
            {children}
            <Analytics />
          </Provider>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
