import React from "react";
import LoanHistorySingleClient from "../../_components/loan-history-single-client";
import { getUserSession } from "@/lib/auth";
import loanApi from "@/api/loan";


export const revalidate = 0;

export const metadata = {
  title: "Loan Details",
  description: "view your loan details",
}

export interface LoanHistorySingleProps {
  loan: {
    _id: string;
    amount: number;
    totalamount: number;
    balance: number;
    loan_paid: boolean;
    loan_processed: boolean;
    loan_approved: boolean;
    status: string;
    last_payment: string | null;
    approval_slip: string;
    total_amount_paid: number;
    total_days: number;
    daily_interest: number;
    total_installment: number;
    profit: number;
    late_interest: number;
    installment_period: {
      balance: number;
      due_date: string;
      interest: number;
      loan_overdue: boolean;
      loan_paid: boolean;
      principal: number;
      repay_amount: number;
      _id: string;
    }[];
    category: string;
    userid: string;
    loanrequirementid: string;
    createdAt: string;
    __v: number;
  };
  loanhistory: any[];
}


async function getLoanData(loanid: string) {
  try {
    const session = await getUserSession();
    if (!session || !session.user || !('id' in session.user)) {
      throw new Error('User session is invalid or user ID is missing');
    }
    const { data: loanData }: { data: LoanHistorySingleProps } = await loanApi.retrieveSingleLoan({ userid: session.user.id, loanid, session });
    return loanData;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to get loan data');
  }
}

async function LoanHistorySingle({ params }: { params: { loan_id: string } }) {
  const loanData = await getLoanData(params.loan_id);

  return (
    <LoanHistorySingleClient
      loanData={loanData}
    />
  );
}

export default LoanHistorySingle;
