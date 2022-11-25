import "../styles/globals.css";
import "../styles/landing.css";
import "aos/dist/aos.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import AOS from "aos";
import type { AppProps } from "next/app";
import SiteLayout from "../components/Layout/SiteLayout";
import { useEffect } from "react";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { Toaster } from "react-hot-toast";
import { alchemyProvider } from "wagmi/providers/alchemy";
const { chains, provider, webSocketProvider } = configureChains(
  [chain.goerli],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY }),
    publicProvider(),
  ]
);

// set up client
const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors: [new MetaMaskConnector({ chains })],
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      offset: 100,
    });
  }, []);
  return (
    <>
      <WagmiConfig client={client}>
        <SiteLayout>
          <Component {...pageProps} />
          <Toaster position="bottom-center" reverseOrder={true} />
        </SiteLayout>
      </WagmiConfig>
    </>
  );
}

export default MyApp;
