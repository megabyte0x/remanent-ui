import { createContext, useContext } from "react";

const LoadingContext = createContext<{
    loading: boolean;
    setLoading: (loading: boolean) => void;
}>({
    loading: true,
    setLoading: () => {},
});

export function useLoadingContext() {
    return useContext(LoadingContext);
}

export default LoadingContext;
