import { Disclosure } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { useConnect } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import MenuItems from "./MenuItems";
import { Connector, useAccount } from "wagmi";
import Logger from "../../lib/logger";

interface ConnectMetaMaskProps {
  accountWallet?: {
    address?: string;
    connector?: Connector;
    isConnecting?: boolean;
    isReconnecting?: boolean;
    isConnected?: boolean;
    isDisconnected?: boolean;
    status?: "connecting" | "reconnecting" | "connected" | "disconnected";
  };
}

const ConnectMetaMask: React.FunctionComponent<ConnectMetaMaskProps> = ({
  accountWallet,
}) => {
  const {
    connect,
    connectors,
    error,
    isLoading,
    pendingConnector,
    connectAsync,
  } = useConnect();
  const onConnectWallet = () => {
    connect({ connector: new MetaMaskConnector() });
  };

  const onConnect = async (connector: Connector) => {
    try {
      const account = await connectAsync({ connector });
      if (account) {
        // setHasConnected(true);
      }
    } catch (error) {
      Logger.warn("[Connect wallet error]", error);
    }
  };

  const [address, setAddress] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (accountWallet?.address) {
      setAddress(accountWallet.address);
    } else {
      setAddress("");
    }
  }, [accountWallet]);
  return (
    <>
      {address ? (
        <MenuItems address={address} />
      ) : (
        <Disclosure.Button
          // onClick={onConnectWallet}
          onClick={() => onConnect(connectors[0])}
          className="w-full text-left px-2 md:px-3 py-1 rounded-md font-black cursor-pointer text-sm tracking-wide bg-primary-color text-white"
        >
          Connect Wallet
        </Disclosure.Button>
      )}
    </>
  );
};

export default ConnectMetaMask;
