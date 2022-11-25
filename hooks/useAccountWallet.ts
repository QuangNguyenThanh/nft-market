import React, { useEffect, useMemo } from "react";
import { Connector, useAccount } from "wagmi";

interface useAccountWalletProps {
  address?: string;
  connector?: Connector;
  isConnecting: boolean;
  isReconnecting: boolean;
  isConnected: boolean;
  isDisconnected: boolean;
  status: "connecting" | "reconnecting" | "connected" | "disconnected";
}

const useAccountWallet = () => {
  const { ...accountWallet }: useAccountWalletProps = useAccount();
  return useMemo(() => {
    return {
      ...accountWallet,
    };
  }, [accountWallet]);
};

export default useAccountWallet;
