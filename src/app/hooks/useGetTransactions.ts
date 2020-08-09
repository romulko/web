import {useCallback, useState} from "react";
import {Transaction} from '../model';
import {REST_TRANSACTIONS_PATH} from "../config";

type GetTransactions = Readonly<{
    transactions: Transaction[];
    getTransactions: () => Promise<void>;
}>;

export const useGetTransactions = (): GetTransactions => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const getTransactions = useCallback(async () => {
        const response = await fetch(REST_TRANSACTIONS_PATH);

        const data: any[] = await response.json();
        const normalizedTransactions = data.map(obj => ({...obj, effectiveDate: new Date(obj.effectiveDate)}));
        setTransactions(normalizedTransactions);
    }, []);

    return {
        transactions,
        getTransactions
    };
};