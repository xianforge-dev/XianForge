import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XianForge | AI-Powered Xianxia Manhua Creator",
  description:
    "Forge any raw cultivation text into stunning vertical full-color manhua pages with one-click Solana minting.",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

import { ThemeProvider } from "@/components/providers/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
