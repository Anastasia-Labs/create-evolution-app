// components/HomeContent.tsx
"use client";
import ClientWrapper from "@/components/ClientWrapper";

export default function HomeContent() {
    return (
        <main className="flex-grow flex flex-col items-center justify-center pt-20 px-5">
            <div className="w-full max-w-lg mx-auto">
                <div className="mb-8 text-center">
                    <h2 className="text-base font-medium mb-2 text-zinc-100">
                        Create a Cardano dApp with Lucid Evolution
                    </h2>
                    <p className="text-xs text-zinc-400 max-w-md mx-auto">
                        A minimal starter template for building Cardano dApps with Next.js
                        15
                    </p>
                </div>

                <ClientWrapper />
            </div>
        </main>
    );
}