type Props = {};

const TextField = (props: Props) => {
    return (
        <div className="relative w-full">
            <label className="sr-only" htmlFor="email">
                {" "}
                Email{" "}
            </label>

            <input
                className="w-full rounded border-2 border-transparent bg-teal-50 py-3 pl-3 pr-12 text-sm outline-none focus:border-gray-600 focus:ring-0"
                autoComplete="off"
                id="email"
                type="email"
                placeholder="Ethereum Address"
            />

            <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-500">
                0x
            </span>
        </div>
    );
};

export default TextField;
