"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type WalletContextType = {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
};

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const setModalState = (isOpen: boolean) => {
        console.log("WalletContext: Setting modal state to", isOpen);
        setIsModalOpen(isOpen);
    };

    // Log whenever the modal state changes
    useEffect(() => {
        console.log("WalletContext: Modal state is now", isModalOpen);
    }, [isModalOpen]);

    return (
        <WalletContext.Provider value={{ isModalOpen, setIsModalOpen: setModalState }}>
            {children}
        </WalletContext.Provider>
    );
}

export function useWalletContext() {
    const context = useContext(WalletContext);
    if (context === undefined) {
        throw new Error("useWalletContext must be used within a WalletProvider");
    }
    return context;
}