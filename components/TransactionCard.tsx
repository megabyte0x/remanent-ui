import { Transaction } from "../types/Transation";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { useAddressContext } from "../contexts/Address";
import { useState } from "react";
import { getIPFSUrl } from "../utils/processUrl";
import KeyValue from "./KeyValue";
TimeAgo.setDefaultLocale(en.locale);
TimeAgo.addLocale(en);

type Props = { transaction: Transaction };

const TransactionCard = ({ transaction }: Props) => {
    const [popup, setPopup] = useState(false);
    const { address } = useAddressContext();
    const timeAgo = new TimeAgo("en-US");
    const processAddress = (addr: string) => {
        if (!addr) {
            return "unknown";
        }
        if (addr.toLowerCase() == address.toLowerCase()) {
            return "user";
        }
        return addr;
    };
    function processUrl(url: string) {
        url = getIPFSUrl(url);
        return (
            <a className="text-blue-600 underline" href={url}>
                link
            </a>
        );
    }
    return (
        <div>
            <div
                className="flex flex-col justify-center border-b-2 border-gray-200 px-6 py-6 hover:bg-white"
                onClick={() => {
                    setPopup((state) => !state);
                }}
            >
                <div className="flex w-min justify-between gap-3 font-mono text-sm">
                    <span
                        className={
                            processAddress(transaction.sender) == "user"
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
                            processAddress(transaction.receivers) == "user"
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
            {popup && (
                <div className="fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-center overflow-scroll overscroll-none text-sm backdrop-blur-sm">
                    <div className="relative flex w-1/2 flex-col rounded-lg bg-white shadow-2xl">
                        <button
                            type="button"
                            className="absolute top-2 right-4 self-end font-mono text-lg font-bold text-gray-500 hover:text-gray-700"
                            onClick={() => {
                                setPopup((state) => !state);
                            }}
                        >
                            x
                        </button>
                        <div className="my-10 flex justify-evenly">
                            <div>
                                <KeyValue
                                    keyValue="id"
                                    value={
                                        transaction.id ? transaction.id : "null"
                                    }
                                />
                                <KeyValue
                                    keyValue="nft_asset_id"
                                    value={
                                        transaction.nft_asset_id
                                            ? transaction.nft_asset_id
                                            : "null"
                                    }
                                />
                                <KeyValue
                                    keyValue="token_id"
                                    value={
                                        transaction.token_id
                                            ? transaction.token_id
                                            : "null"
                                    }
                                />
                                <KeyValue
                                    keyValue="contract"
                                    value={
                                        <div className="mb-2">
                                            <KeyValue
                                                keyValue="address"
                                                value={
                                                    transaction.contract.address
                                                        ? transaction.contract
                                                              .address
                                                        : "null"
                                                }
                                                className="pl-8"
                                            />
                                            <KeyValue
                                                keyValue="type"
                                                value={
                                                    transaction.contract.type
                                                        ? transaction.contract
                                                              .type
                                                        : "null"
                                                }
                                                className="pl-8"
                                            />
                                            <KeyValue
                                                keyValue="symbol"
                                                value={
                                                    transaction.contract.symbol
                                                        ? transaction.contract
                                                              .symbol
                                                        : "null"
                                                }
                                                className="pl-8"
                                            />
                                            <KeyValue
                                                keyValue="supply"
                                                value={
                                                    transaction.contract.supply
                                                        ? transaction.contract
                                                              .supply
                                                        : "null"
                                                }
                                                className="pl-8"
                                            />
                                            <KeyValue
                                                keyValue="mints"
                                                value={
                                                    transaction.contract.mints
                                                        ? transaction.contract
                                                              .mints
                                                        : "null"
                                                }
                                                className="pl-8"
                                            />
                                        </div>
                                    }
                                />
                            </div>
                            <div>
                                <KeyValue
                                    keyValue="sender"
                                    value={
                                        transaction.sender
                                            ? transaction.sender
                                            : "null"
                                    }
                                />
                                <KeyValue
                                    keyValue="creators"
                                    value={
                                        transaction.creator?.length > 0
                                            ? `Array[${transaction.creator.length}]`
                                            : "[]"
                                    }
                                />
                                <KeyValue
                                    keyValue="receivers"
                                    value={
                                        transaction.receivers
                                            ? transaction.receivers
                                            : "null"
                                    }
                                />
                                <KeyValue
                                    keyValue="marketplace"
                                    value={
                                        transaction.marketplace
                                            ? transaction.marketplace
                                            : "null"
                                    }
                                />
                                <KeyValue
                                    keyValue="price"
                                    value={
                                        transaction.price
                                            ? transaction.price
                                            : "null"
                                    }
                                />
                                <KeyValue
                                    keyValue="type"
                                    value={
                                        transaction.type
                                            ? transaction.type
                                            : "null"
                                    }
                                />
                                <KeyValue
                                    keyValue="signature"
                                    value={
                                        transaction.signature
                                            ? transaction.signature
                                            : "null"
                                    }
                                />
                                <KeyValue
                                    keyValue="royalty"
                                    value={
                                        transaction.royalty ? (
                                            <>
                                                <KeyValue
                                                    keyValue="percentage"
                                                    value={
                                                        transaction.royalty
                                                            .percentage
                                                            ? transaction
                                                                  .royalty
                                                                  .percentage
                                                            : "null"
                                                    }
                                                    className="pl-8"
                                                />
                                                <KeyValue
                                                    keyValue="address"
                                                    value={
                                                        transaction.royalty
                                                            .address
                                                            ? transaction
                                                                  .royalty
                                                                  .address
                                                            : "null"
                                                    }
                                                    className="pl-8"
                                                />
                                            </>
                                        ) : (
                                            "null"
                                        )
                                    }
                                />
                                <KeyValue
                                    keyValue="currency"
                                    value={
                                        transaction.currency
                                            ? transaction.currency
                                            : "null"
                                    }
                                />
                                <KeyValue
                                    keyValue="timestamp"
                                    value={
                                        transaction.timestamp
                                            ? new Date(
                                                  transaction.timestamp
                                              ).toISOString()
                                            : "null"
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TransactionCard;
