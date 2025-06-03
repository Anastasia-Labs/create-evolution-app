// components/WalletModal.tsx
import { useWallet } from "@/hooks/useWallet";
import { useWalletContext } from "@/context/WalletContext";

const WalletModal = () => {
    const { connect, installedExtensions, isConnected } = useWallet();
    const { isModalOpen, setIsModalOpen } = useWalletContext();

    if (!isModalOpen || isConnected) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 max-w-md w-full mx-4">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-zinc-200">
                        Select Wallet
                    </h3>
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="text-zinc-400 hover:text-zinc-200 transition-colors"
                    >
                        ✕
                    </button>
                </div>

                <div className="space-y-3">
                    {installedExtensions.map((wallet) => (
                        <button
                            key={wallet}
                            className="w-full flex items-center justify-between p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors text-left"
                            onClick={() => {
                                connect(wallet);
                                setIsModalOpen(false);
                            }}
                        >
                            <span className="text-zinc-200">{wallet}</span>
                            {window.cardano?.[wallet]?.icon && (
                                <img
                                    src={window.cardano[wallet].icon}
                                    alt={`${wallet} icon`}
                                    className="w-6 h-6"
                                />
                            )}
                        </button>
                    ))}

                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="w-full p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors text-zinc-400"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WalletModal;