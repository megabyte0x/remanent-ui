import { createContext, useContext } from "react";

const AddressContext = createContext<string>("");

export function useAddressContext() {
    const address = useContext(AddressContext);
    return address;
}

export default AddressContext;
