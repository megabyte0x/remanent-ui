import { NFT } from "../types/NFT";

/* eslint-disable @next/next/no-img-element */
type Props = { nft: NFT };

const NFTCard = ({ nft }: Props) => {
    return (
        <div className="group block cursor-pointer" role="NFT Card">
            <div className="relative flex w-full justify-center overflow-hidden rounded-md object-contain">
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
    );
};

export default NFTCard;
