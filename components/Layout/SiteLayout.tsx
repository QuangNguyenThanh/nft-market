import { Disclosure } from "@headlessui/react";
import React, { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout: React.FunctionComponent<SiteLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default SiteLayout;
