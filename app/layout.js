import { Inter } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/context/ContextApi";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task Manager",
  description: "A simple task manager built with Next.js and MongoDB.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <Toaster />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
