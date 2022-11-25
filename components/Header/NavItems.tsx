import { Disclosure } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface NavItemsProps {
  isHome: boolean;
}

interface NavItemProps {
  url: string;
  name: string;
  current: boolean;
  isHome: boolean;
}

const NavItem = ({ url, name, current, isHome }: NavItemProps) => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  // console.log(isScroll);
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
  return (
    <Link href={url}>
      <a href={url} aria-current={current ? "page" : undefined}>
        <Disclosure.Button
          className={clsx(
            "w-full text-left px-2 md:px-3 py-1 rounded-md font-black cursor-pointer text-sm tracking-wide",
            {
              // "text-black": current,
              // "text-gray-700 hover:text-black hover:bg-gray-200": !current,
              "text-white hover:bg-white hover:bg-opacity-5":
                !isScroll && isHome,
              "text-gray-700 hover:text-black hover:bg-gray-200": isScroll,
            }
          )}
        >
          {name}
        </Disclosure.Button>
      </a>
    </Link>
  );
};
const NavItems: React.FunctionComponent<NavItemsProps> = ({ isHome }) => {
  const { pathname } = useRouter();
  return (
    <>
      <NavItem
        url="/collections"
        name="Collections"
        current={pathname == "/collections"}
        isHome={isHome}
      />
      <NavItem
        url="/communities"
        name="Communities"
        current={pathname == "/communities"}
        isHome={isHome}
      />
    </>
  );
};

export default NavItems;
