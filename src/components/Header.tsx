// components/Header.tsx
"use client";
import dynamic from "next/dynamic";
import Image from "next/image";

const ConnectButton = dynamic(
    () => import("@/components/ConnectButton"),
    { ssr: false }
);

// Same dynamic import for the modal
const WalletModal = dynamic(
    () => import("@/components/WalletModal"),
    { ssr: false }
);

export default function Header() {
    return (
        <header className="fixed w-full z-10 border-b border-zinc-800/30">
            <div className="bg-zinc-950/80 backdrop-blur-md">
                <div className="max-w-4xl mx-auto px-5 py-3.5 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                        <div className="relative h-5 w-5 flex items-center justify-center">
                            <Image
                                src="/lucid-evolution-al-red.svg"
                                alt="Lucid Evolution Logo"
                                width={22}
                                height={22}
                                className="h-[18px] w-[18px] object-contain"
                            />
                        </div>
                        <h1 className="text-sm font-medium bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                            Lucid Evolution
                        </h1>
                    </div>

                    <nav>
                        <ul className="flex space-x-6 text-xs">
                            <li>

                                <a
                                    href="https://discord.gg/s89P9gpEff"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-400 hover:text-zinc-200 transition-colors relative group"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                                    </svg>
                                    {/* Discord */}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent/50 transition-all group-hover:w-full"></span>
                                </a>
                            </li>
                            <li>

                                <a
                                    href="https://github.com/Anastasia-Labs/lucid-evolution"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-400 hover:text-zinc-200 transition-colors relative group"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.24.73-.53v-1.85c-3.03.66-3.67-1.45-3.67-1.45-.5-1.27-1.21-1.6-1.21-1.6-.98-.67.08-.66.08-.66 1.09.08 1.66 1.12 1.66 1.12.96 1.65 2.53 1.17 3.15.9.1-.7.38-1.17.69-1.44-2.42-.28-4.96-1.21-4.96-5.4 0-1.19.42-2.17 1.12-2.93-.11-.28-.49-1.39.11-2.89 0 0 .92-.3 3 1.12a10.38 10.38 0 015.5 0c2.08-1.42 3-1.12 3-1.12.6 1.5.22 2.61.11 2.89.7.76 1.12 1.74 1.12 2.93 0 4.2-2.55 5.12-4.98 5.39.39.34.74 1 .74 2.02v3c0 .29.18.62.74.52A11 11 0 0012 1.27" />
                                    </svg>
                                    {/* GitHub */}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent/50 transition-all group-hover:w-full"></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://anastasia-labs.github.io/lucid-evolution"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-400 hover:text-zinc-200 transition-colors relative group"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M5.272 3.365C5 3.9 5 4.6 5 6v12c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C6.9 22 7.6 22 9 22h6c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C19 20.1 19 19.4 19 18V9.988c0-.734 0-1.1-.083-1.446a3 3 0 0 0-.36-.867c-.185-.303-.444-.562-.963-1.08l-3.188-3.19c-.519-.518-.778-.777-1.081-.963a3.001 3.001 0 0 0-.867-.36C12.112 2 11.745 2 11.012 2H9c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093zM11 9V4.82a.821.821 0 0 1 1.377-.604l4.386 4.386a.819.819 0 0 1-.58 1.398H12a1 1 0 0 1-1-1z" />
                                    </svg>
                                    {/* Docs */}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent/50 transition-all group-hover:w-full"></span>
                                </a>
                            </li>

                            <ConnectButton />

                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}