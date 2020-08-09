export enum TransactionType {
    credit = 'credit', debit = 'debit'
}

export interface Transaction {
    id: string;
    type: TransactionType;
    amount: number;
    effectiveDate: Date;
}