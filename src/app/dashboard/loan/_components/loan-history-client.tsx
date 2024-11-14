"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { Card, CardContent } from "@/components/card";
import Link from "next/link";
import { routes } from "@/constants/routes";
import dayjs from "dayjs";
import { LoanHistoryType } from "../history/page";
import { useRouter } from "next/navigation";
import NoItemsFound from "@/components/no-item-found";
import { Loader2 } from "lucide-react";



interface LoanHistoryProps {
  loanData: LoanHistoryType[];
}

interface LoanCardProps {
  loan: LoanHistoryType;
  view: string;
}

const LoanCard: React.FC<LoanCardProps> = ({ loan, view }) => (

  <Card className="bg-gray-50">
    <CardContent className="p-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-semibold">Loan Amount: {loan.amount}</p>
          <p className="text-sm text-gray-600">
            Duration: {loan.total_days} Months
          </p>
        </div>
        {view === "pending" && (<span
          className={"text-primary-500"
          }
        >
          Pending
        </span>)}

        {view === "processed" && (<span
          className={"font-bold " + (loan.loan_approved ? "text-green-500" : "text-red-500")}
        >
          <Link href={`${routes.LOANSTATUS}/${loan._id}`}>
            {loan.loan_approved ? "View Receipt" : "Declined"}
          </Link>
        </span>)}

        {view === "active" && (<span
          className={"font-bold " + (loan.status === "approved" ? "text-green-500" : "text-red-500")}
        >
          <Link href={`${routes.LOANHISTORY}/${loan._id}`}>
            View Details
          </Link>
        </span>)}
      </div>
      <p className="mt-2 text-right text-sm text-gray-600">
        {loan.status !== "approved" && "Initiated on:"}
        {dayjs(loan.createdAt).format("MMM D, YYYY")}
      </p>
    </CardContent>
  </Card>
);

const Spinner = () => (
  <div className="flex items-center justify-center">
    <Loader2 className="w-4 h-4 animate-spin" />
  </div>
);

export default function LoanHistoryClient({
  loanData,
  view = "pending",
}: LoanHistoryProps & { view: string }) {

  const router = useRouter();
  const [activeTab, setActiveTab] = useState(view);
  const [loading, setLoading] = useState(true);
  const tabChange = (value: string) => {
    setLoading(true);
    setActiveTab(value);
    router.replace(`${routes.LOANHISTORY}?v=${value}`);
  }

  useEffect(() => {
    setActiveTab(view);
  }, [view]);

  useEffect(() => {
    setLoading(false);
    return () => {
      setLoading(false);
    };
  }, [loanData]);

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl">
        <div className="p-4 md:p-6">
          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={(value) => tabChange(value)}>
            <TabsList className="grid w-full grid-cols-3 gap-4 ">
              <TabsTrigger className="text-xs" value="pending">Pending Loans {loading && activeTab === "pending" && <Spinner />}</TabsTrigger>
              <TabsTrigger className="text-xs" value="processed">Processed Loans {loading && activeTab === "processed" && <Spinner />}</TabsTrigger>
              <TabsTrigger className="text-xs" value="active">Active Loans {loading && activeTab === "active" && <Spinner />}</TabsTrigger>
            </TabsList>
            <TabsContent value={activeTab} className="mt-4 space-y-4">
              {loanData.map((loan: LoanHistoryType, index: number) => (
                <LoanCard view={activeTab} key={index} loan={loan} />
              ))}

              {loanData.length === 0 && <NoItemsFound />}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
