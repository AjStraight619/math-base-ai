import { getChatMetaData } from "@/actions/chat-actions";
import Sidebar from "@/components/sidebar/sidebar";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const chats = await getChatMetaData();
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} relative bg-background`}>
          <Sidebar chats={chats} />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster position="bottom-center" />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
