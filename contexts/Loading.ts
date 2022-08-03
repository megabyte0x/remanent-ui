import { createContext, useContext } from "react";

const LoadingContext = createContext<Boolean>(true);

export function useLoadingContext() {
    const loading = useContext(LoadingContext);
    return loading;
}

export default LoadingContext;
