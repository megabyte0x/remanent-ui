import { TransactionType } from "./enums";

export type Transaction = {
    id: string;
    nft_asset_id: string;
    token_id: string;
    contract: {
        address: string;
        type: string;
        symbol: string;
        supply: number;
        mints: number;
    };
    sender: string;
    creator: string[];
    receivers: string;
    marketplace: string;
    price: string;
    type: TransactionType;
    signature: string;
    royalty: {
        percentage: string;
        address: string;
    };
    currency: string;
    timestamp: string;
};
