import React from "react";
import LoanApplicationClient from "../../_components/loan-application-client";
import { getUserSession } from "@/lib/session";
import loanApi from "@/api/loan";
import { LoanDetails } from "@/definition";

export const metadata = {
  title: "Apply for Loan | Moricol",
  description: "Apply for loan",
};

export const revalidate = 0;

async function getLoanCategory(id: string) {
  try {
    const session = await getUserSession();
    if (!session || !session.user || !('id' in session.user)) {
      throw new Error('User session is invalid or user ID is missing');
    }
    const { data: loanData }: { data: LoanDetails } = await loanApi.retrieveSingleCategory({ userid: session.user.id, id, session });
    return loanData;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to get loan data');
  }
}


async function LoanApplication({ params, searchParams }: { params: { loan_category: string }, searchParams: { amount: string } }) {
  const loanDetails = await getLoanCategory(params.loan_category);
  return <LoanApplicationClient loan_category={params.loan_category} loanDetails={loanDetails} amount={searchParams.amount} />;
}

export default LoanApplication;
