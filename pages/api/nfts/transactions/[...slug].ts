// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Transaction } from "../../../../types/Transation";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Transaction[]>
) {
    const { slug } = req.query;
    // to handle slug not found
    if (!slug || slug.length < 2) {
        res.status(400);
        return;
    }

    const chainId = slug[0];
    const ownerAdd = slug[1];
    // to handle undefined chainId or ownerAddress
    if (!chainId || !ownerAdd) {
        res.status(400);
        return;
    }

    const API_ENDPOINT =
        "https://remanent-api.vercel.app/v1/web3/nfts/transactions";
    const url = `${API_ENDPOINT}/${chainId}/${ownerAdd}`;

    const transactions = (await (await axios.get(url)).data) as Transaction[];

    res.status(200).json(transactions);
}
