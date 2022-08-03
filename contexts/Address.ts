import { createContext, useContext } from "react";

const AddressContext = createContext<{
    address: string;
    setAddress: (address: string) => void;
}>({ address: "", setAddress: () => {} });

export function useAddressContext() {
    return useContext(AddressContext);
}

export default AddressContext;
