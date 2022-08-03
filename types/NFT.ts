import { NFTStatus } from "./enums";
import { Marketplace } from "./Marketplace";
import { Trait } from "./Trait";

export type NFT = {
    id: string;
    token_id: string;
    chain: string;
    minted_at: Date;
    name: string;
    description: string;
    file_url: string;
    associated_url: string;
    collection: {
        id: string;
        name: string;
        contract_address: string;
    };
    owners: string[];
    creators: string[];
    traits: [Trait];
    status: NFTStatus;
    volume: string;
    volume_currency: string;
    marketplaces: [Marketplace];
};
