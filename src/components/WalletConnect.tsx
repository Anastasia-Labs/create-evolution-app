"use client";
import { useWalletContext } from "@/context/WalletContext";
import { useWallet } from "@/hooks/useWallet";
import { Lucid } from "@lucid-evolution/lucid";
import { Key, useCallback, useEffect, useRef, useState } from "react";

export default function WalletConnect() {
  const { isConnected, stakeAddress, disconnect, accountBalance, initLucid, connect, installedExtensions } = useWallet();
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [lucidInstance, setLucidInstance] = useState<Awaited<ReturnType<typeof Lucid>> | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const hasLoggedAddress = useRef(false);
  const [showCopied, setShowCopied] = useState(false);
  const { isModalOpen, setIsModalOpen } = useWalletContext();
  console.log("WalletConnect: isModalOpen =", isModalOpen);
  console.log("WalletConnect: isConnected =", isConnected);

  // const network =
  //   process.env.NODE_ENV === "development"
  //     ? NetworkType.TESTNET
  //     : NetworkType.MAINNET;

  // const {
  //   isConnected,
  //   stakeAddress,
  //   disconnect,
  //   accountBalance,
  //   connect,
  //   installedExtensions,
  // } = useCardano({
  //   limitNetwork: network,
  // });

  const initialize = useCallback(async () => {
    try {
      const instance = await initLucid();
      if (instance) {
        setLucidInstance(instance);
      }
    } catch (error) {
      console.error("Error initializing Lucid:", error);
    }
  }, [initLucid, walletAddress]);

  useEffect(() => {
    if (isConnected) {
      initialize();
    } else {
      setWalletAddress(null);
      setLucidInstance(null);
      hasLoggedAddress.current = false;
    }
  }, [isConnected, initialize]);

  const handleCopy = async () => {
    if (stakeAddress) {
      await navigator.clipboard.writeText(stakeAddress);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    }
  };

  return (
    <div className="w-full">
      {isConnected && (
        <div className="px-5 py-4">
          <div className="flex flex-col space-y-4">
            <div className="grid grid-cols-[auto_1fr] gap-y-3 gap-x-10">
              <div className="text-xs font-medium text-zinc-400">Address</div>
              <div className="text-xs font-mono text-zinc-200 text-right truncate">
                {stakeAddress?.slice(0, 10)}
                {"..."}
                {stakeAddress?.slice(stakeAddress.length - 6)}
              </div>

              <div className="text-xs font-medium text-zinc-400">Balance</div>
              <div className="text-xs font-mono text-zinc-200 text-right">
                {accountBalance} ₳
              </div>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && !isConnected && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-zinc-900 border border-zinc-800/80 rounded-lg shadow-lg max-w-sm w-full overflow-hidden">
            <div className="px-5 py-3.5 border-b border-zinc-800/60">
              <h2 className="text-sm font-medium text-zinc-100">
                Select Wallet
              </h2>
            </div>

            <div className="p-5 space-y-3">

              <button
                className="w-full px-4 py-2 bg-zinc-800/60 text-zinc-300 rounded-md hover:bg-zinc-700 transition-all text-xs border border-zinc-700/40 font-medium focus:outline-none focus:ring-1 focus:ring-zinc-500/30"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
