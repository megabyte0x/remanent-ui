import React from "react";
import DropDown from "./DropDown";
import TextField from "./TextField";

type Props = {};

const LeftPane = (props: Props) => {
    return (
        <>
            <div className="col-span-1"></div>
            <div className="fixed col-span-1 flex h-screen flex-col justify-center bg-teal-400 px-12">
                <section className="mb-10 flex justify-center">
                    <div className="flex w-min items-center space-x-2">
                        <button
                            className="block rounded-xl border-2 border-gray-600 p-4 font-semibold outline-none"
                            type="button"
                        >
                            NFTs
                        </button>

                        <button
                            className="block rounded-xl border-2 border-transparent p-4 outline-none"
                            type="button"
                        >
                            DAOs
                        </button>
                    </div>
                </section>
                <section className="mx-20 mb-20">
                    <ul className="flex border-b-2 border-transparent">
                        <li className="flex-1 cursor-pointer">
                            <div className="relative block p-4">
                                <span className="absolute inset-x-0 -bottom-px h-[2px] w-full bg-gray-600"></span>
                                <div className="flex items-center justify-center">
                                    <span className="ml-3 text-sm font-medium">
                                        NFTs
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="flex-1 cursor-pointer">
                            <div className="relative block p-4">
                                <div className="flex items-center justify-center">
                                    <span className="ml-3 text-sm font-medium">
                                        Collections
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="flex-1 cursor-pointer">
                            <div className="relative block p-4">
                                <div className="flex items-center justify-center">
                                    <span className="ml-3 text-sm font-medium">
                                        Transactions
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
                {/*  */}
                <form
                    className="flex flex-col gap-5"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div className="flex gap-2">
                        <DropDown />
                        <TextField
                            label="Ethereum Address"
                            htmlFor="Ethereum Address"
                            placeholder="Ethereum Address"
                            span="0x"
                        />
                    </div>
                    <button
                        type="submit"
                        className="group inline-flex items-center justify-center rounded border border-gray-700 bg-gray-700 px-8 py-3 text-teal-50 outline-none"
                    >
                        <span className="text-sm font-medium">Search</span>
                        <svg
                            className="ml-3 h-5 w-5 transition ease-in-out group-hover:translate-x-3"
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
                    </button>
                </form>

                {/* <footer></footer> */}
            </div>
        </>
    );
};

export default LeftPane;
