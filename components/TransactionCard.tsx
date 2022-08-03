import { Transaction } from "../types/Transation";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { useAddressContext } from "../contexts/Address";
TimeAgo.addDefaultLocale(en);

type Props = { transaction: Transaction };

const TransactionCard = ({ transaction }: Props) => {
    const { address } = useAddressContext();
    const timeAgo = new TimeAgo("en-US");
    const processAddress = (addr: string) => {
        if (!addr) {
            return "unknown";
        }
        if (addr.toLowerCase() == address.toLowerCase()) {
            return "owner";
        }
        return addr;
    };
    return (
        <div className="flex flex-col justify-center rounded-md border-b-2 border-gray-200 px-6 py-6 hover:bg-white">
            <div className="flex w-min justify-between gap-3 font-mono text-sm">
                <span
                    className={
                        address.toLowerCase() ==
                        transaction.sender.toLowerCase()
                            ? "font-semibold text-teal-600"
                            : ""
                    }
                >
                    {processAddress(transaction.sender)}
                </span>
                <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>
                <span
                    className={
                        address.toLowerCase() ==
                        transaction.receivers.toLowerCase()
                            ? "font-semibold text-teal-600"
                            : ""
                    }
                >
                    {processAddress(transaction.receivers)}
                </span>
            </div>
            <span className="self-end text-xs text-gray-500">
                From contract{" "}
                <span className="font-mono text-blue-400">
                    {transaction.contract.address}
                </span>
            </span>
            <span>{transaction.price}</span>
            <span className="self-end text-xs text-gray-500">
                Succeeded&nbsp;
                {timeAgo.format(new Date(transaction.timestamp))}
            </span>
        </div>
    );
};

export default TransactionCard;
