import { useLoadingContext } from "../contexts/Loading";

type Props = {
    children?: React.ReactNode;
};

const RightPane = ({ children }: Props) => {
    const { loading } = useLoadingContext();
    return (
        <div className="col-span-2 min-h-screen w-full py-10 pr-10">
            {loading ? (
                <div className="flex h-full w-full items-center justify-center gap-1 text-6xl">
                    <span className="animate-bounce-medium">.</span>
                    <span className="animate-bounce-fast">.</span>
                    <span className="animate-bounce-slow">.</span>
                </div>
            ) : (
                children
            )}
        </div>
    );
};

export default RightPane;
