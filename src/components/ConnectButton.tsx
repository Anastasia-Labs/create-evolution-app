import { useWallet } from "../hooks/useWallet";
import { useWalletContext } from "@/context/WalletContext";

const ConnectButton = () => {
  const { isConnected, connect, disconnect, installedExtensions } = useWallet();
  const { setIsModalOpen } = useWalletContext();

  const handleConnect = () => {
    if (installedExtensions.length === 1) {
      connect(installedExtensions[0]);
    } else if (installedExtensions.length > 1) {
      setIsModalOpen(true);
    }
  };

  return (
    <li>
      <div className="flex items-center gap-2">
        {!isConnected ? (
          <button
            className="p-2 px-4 bg-red-900/90 hover:bg-red-800 text-zinc-100 rounded-md border border-red-900/60 text-xs font-medium transition-all focus:outline-none focus:ring-1 focus:ring-red-700/30"
            onClick={handleConnect}
          >
            Connect Wallet
          </button>
        ) : (
          <div className="flex items-center gap-2">
            {/* <span className="text-xs text-zinc-300">Connected</span> */}
            <button
              className="p-2 px-4 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 rounded-md border border-zinc-700/50 text-xs font-medium transition-all focus:outline-none focus:ring-1 focus:ring-zinc-500/30"
              onClick={() => disconnect()}
            >
              Disconnect
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default ConnectButton;