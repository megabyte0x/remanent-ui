// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NFT } from "../../../types/NFT";
import axios from "axios";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<NFT[]>
) {
    const { slug } = req.query;
    // to handle slug not found
    if (!slug || slug.length < 2) {
        res.status(400);
        return;
    }

    const chainId = slug[0];
    const ownerAddr = slug[1];
    // to handle undefined chainId or ownerAddr
    if (!chainId || !ownerAddr) {
        res.status(400);
        return;
    }

    const API_ENDPOINT = "https://remanent-api.vercel.app/v1/web3/nfts";
    const url = `${API_ENDPOINT}/${chainId}/${ownerAddr}`;

    const nfts = (await (await axios.get(url)).data) as NFT[];

    res.status(200).json(nfts);
}
