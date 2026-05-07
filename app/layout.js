import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "InvestSmart | Intelligent Investment Management",
  description:
    "Secure, transparent, and intelligent investment management platform to grow your wealth.",
};

import QueryProvider from "@/components/providers/query-provider";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-50">
        <QueryProvider>
          {children}
          <Toaster
            position="top-right"
            // toastOptions={{
            //   style: {
            //     background: "#0f172a",
            //     color: "#f8fafc",
            //     borderRadius: "9999px",
            //     border: "1px solid #1e293b", // slate-800
            //     fontSize: "14px",
            //     padding: "12px 24px",
            //   },
            //   success: {
            //     iconTheme: {
            //       primary: "#10b981", // emerald-500
            //       secondary: "#fff",
            //     },
            //   },
            //   error: {
            //     iconTheme: {
            //       primary: "#f43f5e", // rose-500
            //       secondary: "#fff",
            //     },
            //   },
            // }}
          />
        </QueryProvider>
      </body>
    </html>
  );
}
