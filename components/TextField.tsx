type Props = {
    label: string;
    htmlFor: string;
    placeholder: string;
    span: string;
};

const TextField = ({ label, htmlFor, placeholder, span }: Props) => {
    return (
        <div className="relative w-full">
            <label className="sr-only" htmlFor={htmlFor}>
                {label}
            </label>

            <input
                className="w-full rounded border-2 border-transparent bg-teal-50 py-3 pl-3 pr-12 font-mono text-sm font-semibold placeholder-gray-400 outline-none placeholder-shown:font-sans placeholder-shown:font-normal focus:border-gray-600 focus:ring-0"
                autoComplete="off"
                id={label}
                placeholder={placeholder}
            />

            <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 font-mono text-sm font-bold text-gray-400">
                {span}
            </span>
        </div>
    );
};

export default TextField;
