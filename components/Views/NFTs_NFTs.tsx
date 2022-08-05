import React from "react";
import { NFT } from "../../types/NFT";
import NFTCard from "../NFTCard";

type Props = { nfts: NFT[] };

const NFTs_NFTs = ({ nfts }: Props) => {
    // return (
    //     <div className="grid grid-cols-3 gap-x-6 gap-y-8">
    //         {nfts.map((nft, index) => {
    //             return <NFTCard key={index} nft={nft} />;
    //         })}
    //     </div>
    // );
    nfts = nfts.filter((nft) => {
        return nft.name;
    });
    return (
        <div className="my-10">
            <div className="grid grid-cols-1 gap-x-8 xl:grid-cols-2">
                <div className="flex flex-row flex-wrap space-x-8 2xl:flex-nowrap">
                    <div className="flex w-full flex-col space-y-6">
                        {nfts
                            .filter((_, index) => index % 4 == 0)
                            .map((nft, index) => {
                                return <NFTCard key={index} nft={nft} />;
                            })}
                    </div>
                    <div className="flex w-full flex-col space-y-6">
                        {nfts
                            .filter((_, index) => index % 4 == 1)
                            .map((nft, index) => {
                                return <NFTCard key={index} nft={nft} />;
                            })}
                    </div>
                </div>
                <div className="flex flex-row flex-wrap space-x-8 2xl:flex-nowrap">
                    <div className="flex w-full flex-col space-y-6">
                        {nfts
                            .filter((_, index) => index % 4 == 2)
                            .map((nft, index) => {
                                return <NFTCard key={index} nft={nft} />;
                            })}
                    </div>
                    <div className="flex w-full flex-col space-y-6">
                        {nfts
                            .filter((_, index) => index % 4 == 3)
                            .map((nft, index) => {
                                return <NFTCard key={index} nft={nft} />;
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NFTs_NFTs;
