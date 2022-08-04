/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Collection } from "../types/Collection";
import { getIPFSUrl } from "../utils/processUrl";
import KeyValue from "./KeyValue";

type Props = { collection: Collection };

const CollectionCard = ({ collection }: Props) => {
    const [popup, setPopup] = useState(false);
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
                className="group block cursor-pointer"
                role="NFT Card"
                onClick={() => {
                    setPopup((state) => !state);
                }}
            >
                <div className="flex w-full justify-center overflow-hidden rounded-md object-contain">
                    <img
                        className="h-full w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                        src={collection.banner_url}
                        alt={collection.name}
                    />
                </div>
                <span>{collection.name ? collection.name : "Unnamed"}</span>
                <span>{collection.description}</span>
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
                                        collection.id ? collection.id : "null"
                                    }
                                />
                                <KeyValue
                                    keyValue="chain"
                                    value={
                                        collection.chain
                                            ? collection.chain
                                            : "null"
                                    }
                                />
                                <KeyValue
                                    keyValue="minted_at"
                                    value={
                                        collection.minted_at
                                            ? new Date(
                                                  collection.minted_at
                                              ).toISOString()
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
                                                    collection.contract.address
                                                        ? collection.contract
                                                              .address
                                                        : "null"
                                                }
                                                className="pl-8"
                                            />
                                            <KeyValue
                                                keyValue="type"
                                                value={
                                                    collection.contract.type
                                                        ? collection.contract
                                                              .type
                                                        : "null"
                                                }
                                                className="pl-8"
                                            />
                                            <KeyValue
                                                keyValue="symbol"
                                                value={
                                                    collection.contract.symbol
                                                        ? collection.contract
                                                              .symbol
                                                        : "null"
                                                }
                                                className="pl-8"
                                            />
                                            <KeyValue
                                                keyValue="supply"
                                                value={
                                                    collection.contract.supply
                                                        ? collection.contract
                                                              .supply
                                                        : "null"
                                                }
                                                className="pl-8"
                                            />
                                            <KeyValue
                                                keyValue="mints"
                                                value={
                                                    collection.contract.mints
                                                        ? collection.contract
                                                              .mints
                                                        : "null"
                                                }
                                                className="pl-8"
                                            />
                                        </div>
                                    }
                                />
                                <KeyValue
                                    keyValue="name"
                                    value={
                                        collection.name
                                            ? collection.name
                                            : "null"
                                    }
                                />
                                <KeyValue
                                    keyValue="description"
                                    value={
                                        collection.description
                                            ? collection.description
                                            : "null"
                                    }
                                />
                                <KeyValue
                                    keyValue="logo_url"
                                    value={
                                        collection.logo_url
                                            ? processUrl(collection.logo_url)
                                            : "null"
                                    }
                                />
                                <KeyValue
                                    keyValue="banner_url"
                                    value={
                                        collection.banner_url
                                            ? processUrl(collection.banner_url)
                                            : "null"
                                    }
                                />
                            </div>
                            <div>
                                <KeyValue
                                    keyValue="creators"
                                    value={
                                        collection.creators?.length > 0
                                            ? `Array[${collection.creators.length}]`
                                            : "[]"
                                    }
                                />
                                <KeyValue
                                    keyValue="editors"
                                    value={
                                        collection.editors?.length > 0
                                            ? `Array[${collection.editors.length}]`
                                            : "[]"
                                    }
                                />
                                <KeyValue
                                    keyValue="owners"
                                    value={
                                        collection.owners?.length > 0
                                            ? `Array[${collection.owners.length}]`
                                            : "[]"
                                    }
                                />
                                <KeyValue
                                    keyValue="stats"
                                    value={
                                        collection.stats ? (
                                            <>
                                                <KeyValue
                                                    keyValue="volume"
                                                    value={
                                                        collection.stats.volume
                                                            ? collection.stats
                                                                  .volume
                                                            : "null"
                                                    }
                                                    className="pl-8"
                                                />
                                                <KeyValue
                                                    keyValue="marketcap"
                                                    value={
                                                        collection.stats
                                                            .marketcap
                                                            ? collection.stats
                                                                  .marketcap
                                                            : "null"
                                                    }
                                                    className="pl-8"
                                                />
                                                <KeyValue
                                                    keyValue="floor_price"
                                                    value={
                                                        collection.stats
                                                            .floor_price
                                                            ? collection.stats
                                                                  .floor_price
                                                            : "null"
                                                    }
                                                    className="mb-2 pl-8"
                                                />
                                                <KeyValue
                                                    keyValue="currency"
                                                    value={
                                                        collection.stats
                                                            .currency
                                                            ? collection.stats
                                                                  .currency
                                                            : "null"
                                                    }
                                                    className="mb-2 pl-8"
                                                />
                                            </>
                                        ) : (
                                            "null"
                                        )
                                    }
                                />
                                <KeyValue
                                    keyValue="traits"
                                    value={
                                        Array.isArray(collection.traits)
                                            ? `Array[${collection.traits.length}]`
                                            : "[]"
                                    }
                                />
                                <KeyValue
                                    keyValue="status"
                                    value={
                                        collection.status
                                            ? collection.status
                                            : "null"
                                    }
                                />
                                <KeyValue
                                    keyValue="marketplaces"
                                    value={
                                        Array.isArray(
                                            collection.marketplaces
                                        ) && collection.marketplaces.length > 0
                                            ? collection.marketplaces.map(
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

                                <KeyValue
                                    keyValue="royalty"
                                    value={
                                        collection.royalty ? (
                                            <>
                                                <KeyValue
                                                    keyValue="percentage"
                                                    value={
                                                        collection.royalty
                                                            .percentage
                                                            ? collection.royalty
                                                                  .percentage
                                                            : "null"
                                                    }
                                                    className="pl-8"
                                                />
                                                <KeyValue
                                                    keyValue="address"
                                                    value={
                                                        collection.royalty
                                                            .address
                                                            ? collection.royalty
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
                                    keyValue="assets"
                                    value={
                                        Array.isArray(collection.assets)
                                            ? `Array[${collection.assets.length}]`
                                            : "[]"
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

export default CollectionCard;
