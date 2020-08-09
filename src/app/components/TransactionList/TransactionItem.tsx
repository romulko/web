import React from "react";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Transaction, TransactionType} from "../../model";
import {dateFormat} from "../../utils";

type Props = Readonly<{
    transaction: Transaction;
}>;

export const TransactionItem: React.FC<Props> = ({transaction: {id, type, amount, effectiveDate}}) => {
    return (
        <Accordion key={id}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography color={type === TransactionType.debit ? 'primary' : 'secondary'}>{type},</Typography>
                <Typography>{amount}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div>
                    <Typography><strong>Transactions Details:</strong></Typography>
                    <Typography><strong>Id:</strong> {id}</Typography>
                    <Typography><strong>Type:</strong> {type}</Typography>
                    <Typography><strong>Amount:</strong> {amount}</Typography>
                    <Typography><strong>Effective Date:</strong> {dateFormat(effectiveDate)}</Typography>
                </div>
            </AccordionDetails>
        </Accordion>
    );
};