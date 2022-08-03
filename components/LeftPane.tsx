import { Dispatch, SetStateAction } from "react";
import { useAddressContext } from "../contexts/Address";
import { useNetworkContext } from "../contexts/Network";
import { DAO_API, Network, NFT_API, View } from "../types/enums";
import DropDown from "./DropDown";
import TextField from "./TextField";

type Props = {
    view: View;
    api: NFT_API | DAO_API;
    setView: Dispatch<SetStateAction<View>>;
    setApi: Dispatch<SetStateAction<NFT_API | DAO_API>>;
    handleUpdateData: () => void;
};

const LeftPane = ({ view, api, setView, setApi, handleUpdateData }: Props) => {
    const { setNetwork } = useNetworkContext();
    const { address, setAddress } = useAddressContext();
    return (
        <>
            <div className="col-span-1 w-full"></div>
            <div className="fixed flex h-screen w-[31%] flex-col justify-center bg-teal-400 px-12">
                <section className="mb-10 flex justify-center">
                    <div className="flex w-min items-center space-x-2">
                        {Object.keys(View)
                            .filter((v) => isNaN(Number(v)))
                            .map((view_, index) => {
                                return (
                                    <button
                                        className={
                                            View[view] == View[index]
                                                ? "block rounded-xl border-2 border-gray-600 p-4 font-semibold outline-none"
                                                : "block rounded-xl border-2 border-transparent p-4 outline-none"
                                        }
                                        type="button"
                                        key={index}
                                        onClick={() => {
                                            setView(
                                                View[
                                                    view_ as unknown as View
                                                ] as unknown as View
                                            );
                                        }}
                                    >
                                        {view_}
                                    </button>
                                );
                            })}
                    </div>
                </section>
                <section className="mx-20 mb-20">
                    <ul className="flex gap-2 border-b-2 border-transparent">
                        {view == View.NFTs &&
                            Object.keys(NFT_API)
                                .filter((v) => isNaN(Number(v)))
                                .map((api_, index) => {
                                    return (
                                        <li
                                            className="flex-1 cursor-pointer"
                                            key={index}
                                            onClick={() =>
                                                setApi(
                                                    NFT_API[
                                                        api_ as unknown as NFT_API
                                                    ] as unknown as NFT_API
                                                )
                                            }
                                        >
                                            <div className="relative block p-4">
                                                {NFT_API[
                                                    api as unknown as NFT_API
                                                ] == NFT_API[index] && (
                                                    <span className="absolute inset-x-0 -bottom-px h-[2px] w-full bg-gray-600"></span>
                                                )}
                                                <div className="flex items-center justify-center">
                                                    <span className="text-sm font-medium">
                                                        {api_}
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                        {view == View.DAOs &&
                            Object.keys(DAO_API)
                                .filter((v) => isNaN(Number(v)))
                                .map((api_, index) => {
                                    return (
                                        <li
                                            className="flex-1 cursor-pointer"
                                            key={index}
                                            onClick={() =>
                                                setApi(
                                                    DAO_API[
                                                        api_ as unknown as DAO_API
                                                    ] as unknown as DAO_API
                                                )
                                            }
                                        >
                                            <div className="relative block p-4">
                                                {DAO_API[
                                                    api as unknown as DAO_API
                                                ] == DAO_API[index] && (
                                                    <span className="absolute inset-x-0 -bottom-px h-[2px] w-full bg-gray-600"></span>
                                                )}
                                                <div className="flex items-center justify-center">
                                                    <span className="text-sm font-medium">
                                                        {api_}
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                    </ul>
                </section>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-2">
                        <DropDown
                            menuOptions={[
                                {
                                    item: "Ethereum",
                                    symbol: "./ethereum.svg",
                                    attribute: Network.ETHEREUM,
                                },
                                {
                                    item: "Polygon",
                                    symbol: "./polygon-matic.svg",
                                    class: "h-5",
                                    attribute: Network.POLYGON,
                                },
                            ]}
                            defaultSelected={0}
                            setState={setNetwork}
                        />
                        <TextField
                            label="Ethereum Address"
                            name="eth_addr"
                            htmlFor="Ethereum Address"
                            placeholder="Ethereum Address"
                            span="0x"
                            value={address}
                            onChange={(e) => {
                                console.log(e.target.value);
                                setAddress(e.target.value);
                            }}
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleUpdateData}
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
                </div>

                {/* <footer></footer> */}
            </div>
        </>
    );
};

export default LeftPane;
