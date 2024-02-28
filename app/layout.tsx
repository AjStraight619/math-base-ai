import Sidebar from "@/components/sidebar/sidebar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Math Base",
  description:
    "Math Base is a math learning platform for students and teachers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} relative bg-background`}>
          <Sidebar />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ModeToggle />
            <Toaster position="bottom-center" />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
