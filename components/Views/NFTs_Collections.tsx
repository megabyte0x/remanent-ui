/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Collection } from "../../types/Collection";
import CollectionCard from "../CollectionCard";

type Props = { collections: Collection[] };

const NFTs_Collections = ({ collections }: Props) => {
    return (
        <div className="mb-10 flex flex-col">
            <div className="sticky top-0 z-10 h-5 bg-teal-50 xl:h-10"></div>
            <div className="sticky top-5 z-10 mb-8 grid grid-cols-1 gap-5 rounded-md bg-gradient-to-t from-teal-50/75 via-teal-400/90 to-teal-400/100 p-3 backdrop-blur-lg xl:top-10 xl:grid-cols-2 xl:gap-10 xl:p-8">
                <img
                    className="col-span-1 h-full w-full rounded-md"
                    src={
                        collections[0].banner_url
                            ? collections[0].banner_url
                            : "/img_not_found.png"
                    }
                    alt={collections[0].name}
                />
                <div className="flex gap-3 pt-5 xl:flex-col">
                    {collections[0].logo_url && (
                        <img
                            className="col-span-1 h-12 w-12 rounded-full xl:h-24 xl:w-24"
                            src={collections[0].logo_url}
                            alt={collections[0].name}
                        />
                    )}
                    <div className="flex flex-col space-y-3">
                        <p className="text-xl font-semibold xl:text-3xl">
                            {collections[0].name ? collections[0].name : ""}
                        </p>
                        <p className="text-sm xl:text-base">
                            {collections[0].description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="container px-5">
                <div className="grid grid-cols-1 gap-x-2 xl:grid-cols-2 2xl:grid-cols-3">
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
                    <div className="flex w-full flex-col xl:col-span-2 xl:grid xl:grid-cols-2 xl:gap-y-6 xl:gap-x-2 xl:pt-6 2xl:col-span-1 2xl:flex 2xl:w-full 2xl:flex-col 2xl:pt-0">
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
                </div>
            </div>
        </div>
    );
};

export default NFTs_Collections;
