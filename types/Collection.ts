import { Asset } from "./Asset";
import { NFTStatus } from "./enums";
import { Marketplace } from "./Marketplace";
import { Trait } from "./Trait";

export type Collection = {
    id: string;
    chain: string;
    minted_at: Date;
    contract: {
        address: string;
        type: string;
        symbol: string;
        supply: number;
        mints: number;
    };
    name: string;
    description: string;
    logo_url: string;
    banner_url: string;
    creators: string[];
    editors: string[];
    owners: string[];
    stats: {
        volume: string;
        marketcap: string;
        floor_price: string;
        currency: string;
    };
    traits: Trait[];
    status: NFTStatus;
    marketplaces: Marketplace[];
    royalty: {
        percentage: string;
        address: string;
    };
    assets: Asset[];
};
