import { useLoadingContext } from "../contexts/Loading";

type Props = {
    children?: React.ReactNode;
};

const RightPane = ({ children }: Props) => {
    const { loading } = useLoadingContext();
    return (
        <div className="col-span-1 min-h-screen w-full pr-10 xl:col-span-2">
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
