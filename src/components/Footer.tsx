// components/Footer.tsx
export default function Footer() {
    return (
        <footer className="mt-auto py-6">
            <div className="max-w-4xl mx-auto px-5">
                <div className="border-t border-zinc-800/30 pt-5 text-center">
                    <div className="flex items-center justify-center space-x-4 text-xs">
                        <a
                            href="https://anastasia-labs.github.io/lucid-evolution"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-700/90 hover:text-red-600 transition-colors group flex items-center space-x-1"
                        >
                            <span className="text-[9px] text-zinc-500">Powered by</span>
                            <span className="relative">
                                Lucid Evolution
                                <span className="absolute -bottom-px left-0 w-0 h-px bg-red-700/50 transition-all group-hover:w-full"></span>
                            </span>
                        </a>

                        <span className="text-zinc-700">•</span>

                        <a
                            href="https://nextjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 hover:text-zinc-400 transition-colors group flex items-center"
                        >
                            <span className="relative">
                                Next.js 15
                                <span className="absolute -bottom-px left-0 w-0 h-px bg-zinc-700 transition-all group-hover:w-full"></span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}