import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "AI Consultancy | Agents that do the work",
  description: "AI solutions for mid-sized businesses — delivered responsibly from strategy to scale. Get AI agents & automated workflows that work.",
  keywords: ["AI consultancy", "AI agents", "automation", "mid-sized business", "AgentOps"],
  authors: [{ name: "AI Consultancy" }],
  creator: "AI Consultancy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ai-consultancy.com",
    title: "AI Consultancy | Agents that do the work",
    description: "AI solutions for mid-sized businesses — delivered responsibly from strategy to scale.",
    siteName: "AI Consultancy",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consultancy | Agents that do the work",
    description: "AI solutions for mid-sized businesses — delivered responsibly from strategy to scale.",
    creator: "@aiconsultancy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
