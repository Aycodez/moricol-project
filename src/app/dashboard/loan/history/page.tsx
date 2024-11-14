import NavigationBackBtn from "@/components/nav-back-btn";
import React from "react";
import LoanHistoryClient from "../_components/loan-history-client";
import { getUserSession } from "@/lib/auth";
import loanApi from "@/api/loan";

export const metadata = {
  title: "Loan History",
  description: "view your loan history",
}

export type LoanHistoryType = {
  _id: string;
  amount: number;
  total_days: number;
  createdAt: string;
  loan_approved?: boolean;
  status: string;
}

async function getLoanData(type: 'pending' | 'active' | 'processed') {
  try {
    const session = await getUserSession();
    if (!session || !session.user || !('id' in session.user)) {
      throw new Error('User session is invalid or user ID is missing');
    }
    const { data: loanData }: { data: LoanHistoryType[] } = await loanApi.retrievePendingOrActiveOrProcessedLoan({ userid: session.user.id, type, session });
    return loanData;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to get loan data');
  }
}


async function LoanHistory({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  const loans = await getLoanData(searchParams.v as 'pending' | 'active' | 'processed');


  return (
    <div>
      <div className="border-b border-gray-300 px-4 py-2">
        <NavigationBackBtn />
      </div>
      <LoanHistoryClient
        loanData={loans}
        view={(searchParams.v as string) ?? "pending"}
      />
    </div>
  );
}

export default LoanHistory;
