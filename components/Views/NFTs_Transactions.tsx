import React from "react";
import { Transaction } from "../../types/Transation";
import TransactionCard from "../TransactionCard";

type Props = {
    transactions: Transaction[];
};

const NFTs_Transactions = ({ transactions }: Props) => {
    return (
        <div className="my-10 flex flex-col">
            {transactions.map((transaction, index) => {
                return (
                    <TransactionCard key={index} transaction={transaction} />
                );
            })}
        </div>
    );
};
export default NFTs_Transactions;
