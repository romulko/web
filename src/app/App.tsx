import React, {useEffect} from 'react';
import {useGetTransactions} from "./hooks";
import TransactionList from "./components/TransactionList";

const App: React.FC = () => {
    const {transactions, getTransactions} = useGetTransactions();

    useEffect(() => {
        getTransactions();
    }, [getTransactions]);

    return (
        <TransactionList transactions={transactions}/>
    );
}

export default App;
