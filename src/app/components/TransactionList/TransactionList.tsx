import React from 'react';
import {TransactionItem} from "./TransactionItem";
import {Transaction} from "../../model";
import {Typography} from "@material-ui/core";

type Props = Readonly<{
    transactions: Transaction[];
}>;

const TransactionList: React.FC<Props> = ({transactions}) => {
    return (
        <div>
            <Typography variant='h4'>Transactions List</Typography>

            {transactions.map(tx => <TransactionItem key={tx.id} transaction={tx}/>)}
        </div>
    );
};

export default TransactionList;