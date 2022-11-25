import { Disclosure } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GridItemTwelve, GridLayout } from "../Layout/GridLayout";
import NavItems from "./NavItems";
import Search from "./Search";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import Logger from "../../lib/logger";
import MenuItems from "./MenuItems";
import ConnectMetaMask from "./ConnectMetaMask";
import { useRouter } from "next/router";
interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const router = useRouter();

  // console.log(isScroll);
  const { ...accountWallet } = useAccount();
  useEffect(() => {
    const handleScroll = () => {
      // console.log("window.scrollY", window.scrollY);
      if (window.scrollY > 1) {
        setIsScroll(true);
      } else if (window.scrollY === 0) {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  const onConnectWallet = () => {
    connect({ connector: new MetaMaskConnector() });
  };

  const [isHome, setIsHome] = useState<boolean>(true);
  useEffect(() => {
    if (router.pathname !== "/") {
      setIsHome(false);
    }
  }, [router]);

  // useEffect(() => {
  //   if (address) {
  //     Logger.check(address);
  //   }
  // }, [address]);

  return (
    <Disclosure
      as="nav"
      className={clsx("px-4 top-0 z-50 w-full transition-all py-2", {
        "sticky transition ease-in-out delay-1500000 fixed bg-white border-b-2":
          isScroll,
        "bg-transparent absolute transition ease-in-out": !isScroll && isHome,
      })}
    >
      {({ open }) => (
        <>
          <div className="container mx-auto max-w-screen-xl">
            <div className="flex relative justify-between items-center">
              <div className="flex justify-start items-center">
                <div className="flex items-center">
                  <Image
                    className="w-screen h-screen"
                    height={55}
                    width={55}
                    src={"/logo_new.png"}
                    alt="Logo"
                    onClick={() => {
                      router.push("/");
                    }}
                  />
                </div>
                <div className="flex items-center">
                  <Image
                    className="w-8 h-8"
                    height={30}
                    width={87}
                    src={"/sm_logo.png"}
                    alt="Logo"
                    onClick={() => {
                      router.push("/");
                    }}
                  />
                </div>

                <div className="ml-6 w-96">
                  <Search
                    className={clsx("bg-white bg-opacity-5 ", {
                      "border bg-opacity-100": isScroll,
                      "border-none": !isScroll && isHome,
                    })}
                  />
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <NavItems isHome={isHome} />
                <ConnectMetaMask accountWallet={accountWallet} />
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
