import { useState } from "react";
import { NFT } from "../types/NFT";
import { getIPFSUrl } from "../utils/processUrl";
import KeyValue from "./KeyValue";

/* eslint-disable @next/next/no-img-element */
type Props = { nft: NFT };

const NFTCard = ({ nft }: Props) => {
    const [popup, setPopup] = useState(false);
    function processUrl(url: string) {
        url = getIPFSUrl(url);
        return (
            <a className="text-blue-600 underline" href={url}>
                link
            </a>
        );
    }
    const processString = (str: string) => {
        if (str.length < 45) return str;
        return `${str.substring(0, 46)}...`;
    };
    return (
        <div>
            <div
                className="group cursor-pointer"
                role="NFT Card"
                onClick={() => {
                    setPopup((state) => !state);
                }}
            >
                <div className="flex w-full justify-center overflow-hidden rounded-md object-contain">
                    <img
                        className="h-full w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                        src={nft.associated_url}
                        alt={nft.name}
                    />
                </div>

                <div className="px-2 pt-2 pb-4">
                    <h5 className="text-xl font-bold">{nft.name}</h5>
                    <p className="mt-2 text-gray-500">{nft.description}</p>
                </div>
            </div>
            {popup && (
                <div className="fixed top-0 left-0 z-50 m-3 flex h-screen w-full items-center justify-center overflow-scroll overscroll-none text-sm backdrop-blur-sm">
                    <div className="relative flex flex-col rounded-lg bg-white px-10 shadow-2xl">
                        <button
                            type="button"
                            className="absolute top-2 right-4 self-end font-mono text-lg font-bold text-gray-500 hover:text-gray-700"
                            onClick={() => {
                                setPopup((state) => !state);
                            }}
                        >
                            x
                        </button>
                        <div className="my-10 grid grid-cols-1 gap-x-10 xl:grid-cols-2">
                            <div>
                                <KeyValue
                                    keyValue="id"
                                    value={
                                        nft.id ? processString(nft.id) : "null"
                                    }
                                    tooltip={nft.id}
                                />
                                <KeyValue
                                    keyValue="token_id"
                                    value={
                                        nft.token_id
                                            ? processString(nft.token_id)
                                            : "null"
                                    }
                                    tooltip={nft.token_id}
                                />
                                <KeyValue
                                    keyValue="chain"
                                    value={nft.chain ? nft.chain : "null"}
                                />
                                <KeyValue
                                    keyValue="minted_at"
                                    value={
                                        nft.minted_at
                                            ? new Date(
                                                  nft.minted_at
                                              ).toISOString()
                                            : "null"
                                    }
                                />
                                <KeyValue
                                    keyValue="name"
                                    value={
                                        nft.name
                                            ? processString(nft.name)
                                            : "null"
                                    }
                                    tooltip={nft.name}
                                />
                                <KeyValue
                                    keyValue="description"
                                    value={
                                        nft.description
                                            ? processString(nft.description)
                                            : "null"
                                    }
                                    tooltip={nft.description}
                                />
                                <KeyValue
                                    keyValue="file_url"
                                    value={
                                        nft.file_url
                                            ? processUrl(nft.file_url)
                                            : "null"
                                    }
                                />
                                <KeyValue
                                    keyValue="associated_url"
                                    value={
                                        nft.associated_url
                                            ? processUrl(nft.associated_url)
                                            : "null"
                                    }
                                />
                                <KeyValue
                                    keyValue="collection"
                                    value={
                                        <span className="mb-2">
                                            <KeyValue
                                                keyValue="id"
                                                value={
                                                    nft.collection.id
                                                        ? processString(
                                                              nft.collection.id
                                                          )
                                                        : "null"
                                                }
                                                className="pl-8"
                                                tooltip={nft.collection.id}
                                            />
                                            <KeyValue
                                                keyValue="name"
                                                value={
                                                    nft.collection.name
                                                        ? processString(
                                                              nft.collection
                                                                  .name
                                                          )
                                                        : "null"
                                                }
                                                className="pl-8"
                                                tooltip={nft.collection.name}
                                            />
                                            <KeyValue
                                                keyValue="contract_address"
                                                value={
                                                    nft.collection
                                                        .contract_address
                                                        ? nft.collection
                                                              .contract_address
                                                        : "null"
                                                }
                                                className="pl-8"
                                            />
                                        </span>
                                    }
                                />
                            </div>
                            <div>
                                <KeyValue
                                    keyValue="traits"
                                    value={
                                        Array.isArray(nft.traits)
                                            ? `Array[${nft.traits.length}]`
                                            : "[]"
                                    }
                                />
                                <KeyValue
                                    keyValue="status"
                                    value={nft.status ? nft.status : "null"}
                                />
                                <KeyValue
                                    keyValue="volume"
                                    value={nft.volume ? nft.volume : "null"}
                                />
                                <KeyValue
                                    keyValue="owners"
                                    value={
                                        nft.owners.length > 0
                                            ? `Array[${nft.owners.length}]`
                                            : "[]"
                                    }
                                />
                                <KeyValue
                                    keyValue="creators"
                                    value={
                                        nft.creators?.length > 0
                                            ? `Array[${nft.creators.length}]`
                                            : "[]"
                                    }
                                />
                                <KeyValue
                                    keyValue="volume_currency"
                                    value={
                                        nft.volume_currency
                                            ? nft.volume_currency
                                            : "null"
                                    }
                                />
                                <KeyValue
                                    keyValue="marketplaces"
                                    value={
                                        Array.isArray(nft.marketplaces) &&
                                        nft.marketplaces.length > 0
                                            ? nft.marketplaces.map(
                                                  (marketplace, index) => {
                                                      return (
                                                          <div key={index}>
                                                              <KeyValue
                                                                  keyValue="name"
                                                                  value={
                                                                      marketplace.name
                                                                          ? marketplace.name
                                                                          : "null"
                                                                  }
                                                                  className="pl-8"
                                                              />
                                                              <KeyValue
                                                                  keyValue="url"
                                                                  value={
                                                                      marketplace.url
                                                                          ? processUrl(
                                                                                marketplace.url
                                                                            )
                                                                          : "null"
                                                                  }
                                                                  className="pl-8"
                                                              />
                                                              <KeyValue
                                                                  keyValue="accepted_currencies"
                                                                  value={
                                                                      marketplace.accepted_currencies
                                                                          ? marketplace.accepted_currencies.join(
                                                                                ", "
                                                                            )
                                                                          : "null"
                                                                  }
                                                                  className="pl-8"
                                                              />
                                                          </div>
                                                      );
                                                  }
                                              )
                                            : "[]"
                                    }
                                />
                            </div>
                        </div>
                        <span
                            className="absolute bottom-2 right-4 cursor-pointer text-xs text-blue-600 hover:underline"
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    JSON.stringify(nft, null, "\t")
                                );
                            }}
                        >
                            Copy as JSON
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NFTCard;
