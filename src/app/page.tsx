// app/page.tsx
"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeContent from "@/components/HomeContent";
import { WalletProvider } from "@/context/WalletContext";

export default function Home() {
  return (
    <WalletProvider>
      <div className="flex flex-col min-h-screen bg-zinc-950">
        <Header />
        <main className="pt-16">
          <HomeContent />
        </main>
        <Footer />
      </div>
    </WalletProvider>


  );
}