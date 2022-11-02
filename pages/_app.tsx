import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Network } from "../types/enums";
import LoadingContext from "../contexts/Loading";
import AddressContext from "../contexts/Address";
import NetworkContext from "../contexts/Network";

function MyApp({ Component, pageProps }: AppProps) {
  const [address, setAddress] = useState(
    "0x2D2E4c335EEE674Bd8F2EB3622E4156EbAbC864d"
  );
  const [network, setNetwork] = useState(Network.ETHEREUM);
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <AddressContext.Provider value={{ address, setAddress }}>
        <NetworkContext.Provider value={{ network, setNetwork }}>
          <Component {...pageProps} />
        </NetworkContext.Provider>
      </AddressContext.Provider>
    </LoadingContext.Provider>
  );
}

export default MyApp;
