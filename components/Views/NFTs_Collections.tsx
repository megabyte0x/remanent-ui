/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Collection } from "../../types/Collection";
import CollectionCard from "../CollectionCard";

type Props = { collections: Collection[] };

const NFTs_Collections = ({ collections }: Props) => {
    return (
        <div className="flex flex-col">
            <div className="sticky top-0 z-10 h-10 bg-teal-50"></div>
            <div className="sticky top-10 z-10 mb-8 grid grid-cols-2 gap-10 rounded-md bg-gradient-to-t from-teal-50/75 via-teal-400/90 to-teal-400/100 p-8 backdrop-blur-lg">
                <img
                    className="col-span-1 h-full w-full rounded-md"
                    src={collections[0].banner_url}
                    alt={collections[0].name}
                />
                <div className="flex flex-col gap-3 pt-5">
                    {collections[0].logo_url && (
                        <img
                            className="col-span-1 h-24 w-24 rounded-full"
                            src={collections[0].logo_url}
                            alt={collections[0].name}
                        />
                    )}
                    <p className="text-3xl font-semibold">
                        {collections[0].name ? collections[0].name : ""}
                    </p>
                    <p className="">{collections[0].description}</p>
                </div>
            </div>
            <div className="container px-5">
                <div className="flex flex-row space-x-8">
                    <div className="flex w-full flex-col space-y-6">
                        {collections
                            .filter((_, index) => index % 3 == 0)
                            .map((collection, index) => {
                                return (
                                    <CollectionCard
                                        key={index}
                                        collection={collection}
                                    />
                                );
                            })}
                    </div>
                    <div className="flex w-full flex-col space-y-6">
                        {collections
                            .filter((_, index) => index % 3 == 2)
                            .map((collection, index) => {
                                return (
                                    <CollectionCard
                                        key={index}
                                        collection={collection}
                                    />
                                );
                            })}
                    </div>
                    <div className="flex w-full flex-col space-y-6">
                        {collections
                            .filter((_, index) => index % 3 == 1)
                            .map((collection, index) => {
                                return (
                                    <CollectionCard
                                        key={index}
                                        collection={collection}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NFTs_Collections;
