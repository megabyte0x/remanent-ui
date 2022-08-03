import React from "react";
import { Collection } from "../types/Collection";

type Props = { collection: Collection };

const CollectionCard = ({ collection }: Props) => {
    return (
        <div className="group block cursor-pointer" role="NFT Card">
            <div className="relative flex w-full justify-center overflow-hidden rounded-md object-contain">
                <img
                    className="h-full w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                    src={collection.banner_url}
                    alt={collection.name}
                />
            </div>
            <span>{collection.name ? collection.name : "Unnamed"}</span>
            <span>{collection.description}</span>
        </div>
    );
};

export default CollectionCard;
