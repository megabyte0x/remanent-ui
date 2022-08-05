// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Collection } from "../../../types/Collection";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Collection[]>
) {
    const { slug } = req.query;
    // to handle slug not found
    if (!slug || slug.length < 2) {
        res.status(400);
        return;
    }
    const network = slug[0];
    const contractAddr = slug[1];
    // to handle undefined network or contractAddr
    if (!network || !contractAddr) {
        res.status(400);
        return;
    }
    const API_ENDPOINT =
        "https://remanent-api.vercel.app/v1/web3/nft_collections";
    const url = `${API_ENDPOINT}/${network}/${contractAddr}`;
    try {
        const collections = (await (await axios.get(url)).data) as Collection[];
        res.status(200).json(collections);
    } catch (error) {
        res.status(400);
    }
}
