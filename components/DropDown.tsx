/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

type Props = {};

const DropDown = (props: Props) => {
    const [open, setOpen] = useState(false);
    return (
        <div
            className="inline-flex cursor-pointer items-stretch rounded border-2 border-transparent bg-teal-50 focus-within:border-gray-600"
            onClick={() => {
                setOpen((state) => !state);
            }}
        >
            <div className="relative">
                <button
                    type="button"
                    className="inline-flex h-full items-center justify-center rounded-r px-2 hover:text-gray-700"
                >
                    <div className="flex items-center rounded-l px-4 py-2 text-center text-sm hover:text-gray-700">
                        <span>Network</span>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                {open && (
                    <div
                        className="absolute -left-1 z-10 mt-4 w-40 rounded bg-teal-50 shadow-lg"
                        role="menu"
                    >
                        <div className="p-2">
                            <span
                                className="flex cursor-pointer items-center justify-between rounded px-4 py-2 text-sm hover:bg-teal-400 hover:font-medium"
                                role="menuitem"
                            >
                                <img
                                    src="/ethereum.svg"
                                    alt="ethereum logo"
                                    className="h-6"
                                />
                                Ethereum
                            </span>

                            <span
                                className="flex cursor-pointer items-center justify-between rounded px-4 py-2 text-sm hover:bg-teal-400 hover:font-medium"
                                role="menuitem"
                            >
                                <img
                                    src="/polygon-matic.svg"
                                    alt="polygon logo"
                                    className="h-5"
                                />
                                Polygon
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DropDown;
