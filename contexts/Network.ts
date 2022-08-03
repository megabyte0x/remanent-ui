import { createContext, useContext } from "react";
import { Network } from "../types/enums";

const NetworkContext = createContext<{
    network: Network;
    setNetwork: (network: Network) => void;
}>({ network: Network.ETHEREUM, setNetwork: () => {} });

export function useNetworkContext() {
    return useContext(NetworkContext);
}

export default NetworkContext;
