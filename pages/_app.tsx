import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";
import { CoinMarketProvider } from "../context/context";
import { GunProvider } from "../context/gunContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl={`${process.env.NEXT_PUBLIC_MORALIS_SERVER}`}
      appId={`${process.env.NEXT_PUBLIC_MORALIS_APP_ID}`}
    >
      <GunProvider>
        <CoinMarketProvider>
          <Component {...pageProps} />
        </CoinMarketProvider>
      </GunProvider>
    </MoralisProvider>
  );
}

export default MyApp;
