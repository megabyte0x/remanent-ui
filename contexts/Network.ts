import { createContext, useContext } from "react";
import { Network } from "../types/enums";

const NetworkContext = createContext<Network>(Network.ETHEREUM);

export function useNetworkContext() {
    const network = useContext(NetworkContext);
    return network;
}

export default NetworkContext;
