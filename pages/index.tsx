/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import { ReactNode, useEffect, useState } from "react";
import LeftPane from "../components/LeftPane";
import NFTCard from "../components/NFTCard";
import RightPane from "../components/RightPane";
import { View, NFT_API, DAO_API } from "../types/enums";
import { NFT } from "../types/NFT";
import axios from "axios";
import { useNetworkContext } from "../contexts/Network";
import { useAddressContext } from "../contexts/Address";
import { Collection } from "../types/Collection";
import { Transaction } from "../types/Transation";
import { useLoadingContext } from "../contexts/Loading";

const Empty = () => {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <img src="./empty.svg" alt="Empty" className="h-96 w-96" />
        </div>
    );
};
const NFTs_NFTs = ({ nfts }: { nfts: NFT[] }) => {
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
        <div className="container m-auto">
            <div className="flex flex-row space-x-8">
                <div className="mt-16 flex w-full flex-col space-y-4">
                    {nfts
                        .filter((_, index) => index % 3 == 0)
                        .map((nft, index) => {
                            return <NFTCard key={index} nft={nft} />;
                        })}
                </div>
                <div className="flex w-full flex-col space-y-4">
                    {nfts
                        .filter((_, index) => index % 3 == 2)
                        .map((nft, index) => {
                            return <NFTCard key={index} nft={nft} />;
                        })}
                </div>
                <div className="mt-10 flex w-full flex-col space-y-4">
                    {nfts
                        .filter((_, index) => index % 3 == 1)
                        .map((nft, index) => {
                            return <NFTCard key={index} nft={nft} />;
                        })}
                </div>
            </div>
        </div>
    );
};

const NFTs_Collections = ({ collections }: { collections: Collection[] }) => {
    return <div className="grid grid-cols-3 gap-x-6 gap-y-8"></div>;
};

const NFTs_Transactions = ({
    transactions,
}: {
    transactions: Transaction[];
}) => {
    return <div className="grid grid-cols-3 gap-x-6 gap-y-8"></div>;
};

// const DAOs_ = () => {
//     return <div className="grid grid-cols-3 gap-x-6 gap-y-8"></div>;
// };

const Home: NextPage = () => {
    const { network } = useNetworkContext();
    const { address } = useAddressContext();
    const { loading, setLoading } = useLoadingContext();

    const [view, setView] = useState(View.NFTs);
    const [api, setApi] = useState<NFT_API | DAO_API>(NFT_API.NFTs);
    const [rightPaneView, setRightPaneView] = useState<ReactNode>();
    const [nfts, setNfts] = useState<NFT[]>();
    const [collections, setCollections] = useState<Collection[]>();
    const [transactions, setTransactions] = useState<Transaction[]>();

    const updateRightPaneView = () => {
        if (!loading && nfts && collections && transactions)
            switch (view) {
                case View.NFTs:
                    switch (api) {
                        case NFT_API.NFTs:
                            return nfts.length > 0 ? (
                                <NFTs_NFTs nfts={nfts} />
                            ) : (
                                <Empty />
                            );
                        case NFT_API.Collections:
                            return collections.length > 0 ? (
                                <NFTs_Collections collections={collections} />
                            ) : (
                                <Empty />
                            );
                        case NFT_API.Transactions:
                            return transactions.length > 0 ? (
                                <NFTs_Transactions
                                    transactions={transactions}
                                />
                            ) : (
                                <Empty />
                            );
                    }
                case View.DAOs:
                    break;
            }
    };

    const updateNfts = async () => {
        const data = (await (
            await axios.get(`/api/nfts/${network}/${address}`)
        ).data) as NFT[];
        console.log(data);
        setNfts(data);
    };

    const updateCollections = async () => {
        const data = await (
            await axios.get(`/api/nft_collections/${network}/${address}`)
        ).data;
        console.log(data);
        setCollections(data);
    };

    const updateTransactions = async () => {
        const data = await (
            await axios.get(`/api/nfts/transactions/${network}/${address}`)
        ).data;
        console.log(data);
        setTransactions(data);
    };

    const updateData = async () => {
        console.log("updating");
        setLoading(true);
        await updateNfts();
        await updateCollections();
        await updateTransactions();
        setLoading(false);
        console.log("updated");
    };

    useEffect(() => {
        updateData();
    }, []);

    useEffect(() => {
        setRightPaneView(updateRightPaneView());
    }, [view, api, nfts, collections, transactions]);

    return (
        <div className="bg-teal-50 text-gray-900">
            {/* <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head> */}

            <main className="grid grid-cols-3 gap-x-5">
                <LeftPane
                    view={view}
                    api={api}
                    setView={setView}
                    setApi={setApi}
                    handleUpdateData={() => {
                        if (!loading) updateData();
                    }}
                />
                <RightPane>{rightPaneView}</RightPane>
            </main>
        </div>
    );
};

export default Home;
