import { getUserSession } from "@/lib/auth";
import LoanFilterClient from "../_components/loan-filter-client";
import loanApi from "@/api/loan";
import { LoanCategory } from "@/definition";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Loan Categories | Moricol",
  description: "Filter by loan categories",
};

async function getLoanCategories() {
  try {
    const session = await getUserSession();
    if (!session || !session.user || !('id' in session.user)) {
      throw new Error('User session is invalid or user ID is missing');
    }
    const { data: loanData }: { data: LoanCategory[] } = await loanApi.retrieveCategory({ userid: session.user.id, session });
    return loanData;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to get loan data');
  }
}


export default async function Loanfilter() {
  const loanCategories = await getLoanCategories();
  return <LoanFilterClient categories={loanCategories} />;
}
