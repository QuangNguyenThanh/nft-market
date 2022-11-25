import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import clsx from "clsx";
import Slug from "./Slug";
import {
  Connector,
  useAccount,
  useContractWrite,
  useDisconnect,
  usePrepareContractWrite,
} from "wagmi";
import LogoutIcon from "@heroicons/react/outline/LogoutIcon";
import Cookies from "js-cookie";
import { hideString } from "../../utils";
import { isAddress } from "ethers/lib/utils";
import { GiftIcon, UserIcon } from "@heroicons/react/outline";
import useReadContractMarket from "../../hooks/useReadContractMarket";
import { ethers } from "ethers";
import { useEffect } from "react";
import { useState } from "react";
import { configContractMarket } from "../../models";
import Logger from "../../lib/logger";
import toast from "react-hot-toast";
import { Spinner } from "../UI/Spinner";

interface MenuItemsProps {
  accountWallet?: {
    address?: string;
    connector?: Connector;
    isConnecting?: boolean;
    isReconnecting?: boolean;
    isConnected?: boolean;
    isDisconnected?: boolean;
    status?: "connecting" | "reconnecting" | "connected" | "disconnected";
  };
  address: string | undefined;
}

export const NextLink = ({ href, children, ...rest }: Record<string, any>) => (
  <Link href={href}>
    <a {...rest}>
      <div>{children}</div>
    </a>
  </Link>
);
const MenuItems: React.FunctionComponent<MenuItemsProps> = ({
  accountWallet,
  address,
}) => {
  const { disconnect } = useDisconnect();

  const getProceeds = useReadContractMarket({
    functionName: "getProceeds",
    args: [address],
  });

  const [calmBudget, setCalmBudget] = useState<string>("");
  useEffect(() => {
    if (getProceeds) {
      setCalmBudget(ethers.utils.formatEther(getProceeds?.toString()));
    }
  }, [getProceeds]);

  const configWithdrawProceeds = usePrepareContractWrite({
    ...configContractMarket,
    functionName: "withdrawProceeds",
  });

  const withdraw = useContractWrite(configWithdrawProceeds.config);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCalmCrypto = async () => {
    if (calmBudget !== "0.0") {
      try {
        setIsLoading(true);

        const writeTxn = await withdraw.writeAsync?.();
        const result = await writeTxn?.wait();
      } catch (error) {
        Logger.error("We has error: ", error);
      } finally {
        setCalmBudget("0.0");
        toast.success("Calm ETH success! Please check your wallet", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        setIsLoading(false);
      }
    }
  };
  return (
    <Menu as="div">
      {({ open }) => {
        return (
          <>
            <Menu.Button
              as="img"
              src="https://storage.googleapis.com/opensea-static/opensea-profile/19.png"
              className="w-8 h-8 rounded-full cursor-pointer"
              alt="User"
            />
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute right-0 py-1 mt-2 w-48 bg-white rounded-xl border shadow-sm dark:bg-gray-900 focus:outline-none dark:border-gray-700/80"
              >
                <Menu.Item
                  as={NextLink}
                  href={``}
                  className={({ active }: { active: boolean }) =>
                    clsx({ "dropdown-active": active }, "menu-item")
                  }
                >
                  <div>Logged in as</div>
                  <div className="truncate">
                    <Slug
                      className="font-bold"
                      prefix="@"
                      slug={hideString({
                        start: 5,
                        end: (address && isAddress.length - 4) || 0,
                        originalString: address || "",
                        replaceBy: "...",
                      })}
                    />
                  </div>
                </Menu.Item>
                <div className="divider" />
                <Menu.Item
                  as={NextLink}
                  href={`/owner`}
                  className={({ active }: { active: boolean }) =>
                    clsx({ "dropdown-active": active }, "menu-item")
                  }
                >
                  <div className="flex items-center space-x-1.5">
                    <UserIcon className="w-4 h-4" />
                    <div>Your Profile</div>
                  </div>
                </Menu.Item>
                {/* Balance */}
                <Menu.Item
                  as="a"
                  className={({ active }: { active: boolean }) =>
                    clsx({ "dropdown-active": active }, "menu-item")
                  }
                  onClick={handleCalmCrypto}
                >
                  <div className="flex items-center space-x-1.5">
                    <GiftIcon className="w-4 h-4" />
                    <div>Calm</div>
                  </div>
                  <div className="flex items-centers gap-2">
                    <img
                      src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                      alt="EHT"
                      className="w-4 h-4"
                    />
                    <span className="flex items-center">
                      {isLoading ? (
                        <Spinner className="w-4 h-4" size="xs" />
                      ) : (
                        calmBudget
                      )}{" "}
                      <strong className="px-1">ETH</strong>
                    </span>
                  </div>
                </Menu.Item>
                <Menu.Item
                  as="a"
                  className={({ active }: { active: boolean }) =>
                    clsx({ "dropdown-active": active }, "menu-item")
                  }
                  onClick={() => {
                    if (disconnect) disconnect();
                    localStorage.removeItem("wagmi.store");
                  }}
                >
                  <div className="flex items-center space-x-1.5">
                    <LogoutIcon className="w-4 h-4" />
                    <div>Logout</div>
                  </div>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        );
      }}
    </Menu>
  );
};

export default MenuItems;
