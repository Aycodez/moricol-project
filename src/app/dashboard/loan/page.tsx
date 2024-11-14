import Button from "@/components/button";
import {
  BankSVG,
  FilterBoldSVG,
  HistorySVG,
  StackOverflow,
} from "@/components/svgs/loan-svg";
import Link from "next/link";
import LoanHistory from "./_components/loan-history";
import { routes } from "@/constants/routes";
import { getUserSession } from "@/lib/auth";
import loanApi from "@/api/loan";
import { LoanDataType } from "@/definition";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Loan Dashboard | Moricol",
  description: "View your loan history and manage your loan accounts",
};

async function getLoanData() {
  try {
    const session = await getUserSession();
    if (!session || !session.user || !('id' in session.user)) {
      throw new Error('User session is invalid or user ID is missing');
    }
    const { data: loanData }: { data: LoanDataType[] } = await loanApi.homepage({ userid: session.user.id, session });
    return loanData;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to get loan data');
  }
}


export default async function LoanDashboard() {
  const loanData = await getLoanData();

  const links = [
    {
      title: "Payback",
      path: routes.LOANHISTORY + "?v=active",
      icon: <StackOverflow />,
    },
    { title: "History", path: routes.LOANHISTORY, icon: <HistorySVG /> },
    { title: "Accounts", path: routes.LOANACCOUNTS, icon: <BankSVG /> },
  ];



  return (
    <div className="py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:space-x-6 lg:flex">
          <div className="lg:w-1/3">
            <Link
              href={routes.LOANHISTORY}
              className="mb-4 ml-auto block w-fit text-lg text-primary-500"
            >
              See all my Loans
            </Link>

            <Link href={routes.LOANFILTER}>
              <Button className="text-md mb-6 flex w-full items-center justify-center gap-x-4 bg-secondary-400 text-white hover:bg-red-600">
                Filter By Categories <FilterBoldSVG />
              </Button>
            </Link>

            <div className="mb-6 flex justify-between rounded-xl bg-gray-100 p-4 ">
              {links.map((item, index) => (
                <Link
                  href={item.path}
                  key={index}
                  className="flex flex-col items-center"
                >
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                    <span className="text-xl text-primary-500">
                      {item.icon}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3">
            <LoanHistory loans={loanData} />
          </div>
        </div>
      </div>
    </div>
  );
}


