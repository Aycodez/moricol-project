import Button from "@/components/button";
import { ArrowRightSvg } from "@/components/svgs";
import { routes } from "@/constants/routes";
import loanApi, { CreateOfferParams } from "@/api/loan";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa6";

export default function LoanConfirmDetails({
  prevPage,
  applyData,
  category,
}: {
  prevPage: () => void;
  applyData: Omit<CreateOfferParams, "userid" | "session">;
  category: string;
}) {
  const loanDetails = [
    { label: "Loan Category", value: category },
    { label: "Loan Amount", value: `₦${applyData.amount.toLocaleString()}` },
    { label: "Total Repayment Amount", value: `₦${applyData.totalamount.toLocaleString()}` },
    { label: "Total Days", value: applyData.total_days },
    { label: "Daily Interest", value: `${applyData.daily_interest}%` },
    { label: "Late Interest", value: `${applyData.late_interest}%` },
    { label: "Account Name", value: applyData.bank_details.accountname },
    { label: "Bank Name", value: applyData.bank_details.bankname },
    { label: "Account Number", value: applyData.bank_details.accountnumber },
  ];

  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { data: session } = useSession();
  const router = useRouter();

  const handleApplyForLoan = async () => {
    try {
      setLoading(true);
      await loanApi.createOffer({ ...applyData, userid: session?.user.id as string, session: session as Session });
      enqueueSnackbar("Loan application submitted successfully", { variant: "success" });
      router.push(routes.LOANVERIFICATION);
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("An error occurred while applying for loan", { variant: "error" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[60vh] bg-gray-100">
      <div className="border-b border-gray-300 px-4 py-2">
        <button
          className="flex items-center gap-x-2 text-sm font-bold text-primary-500"
          onClick={prevPage}
        >
          <ArrowRightSvg className="h-4 w-4" /> Go Back
        </button>
      </div>
      <div className="shadow-base bg-white">
        <div className="max-w-2xl p-4 md:p-6">
          <h2 className="mb-4 text-lg font-semibold">Confirm Your Loan</h2>

          <div className="space-y-4">
            {loanDetails.map((detail, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-600">{detail.label}</span>
                <span className="font-medium capitalize">{detail.value}</span>
              </div>
            ))}
          </div>
          <Button onClick={handleApplyForLoan} className="mt-6 flex items-center justify-center w-full rounded-lg bg-primary-500 py-3 text-white hover:bg-primary-600">
            {loading ? <FaSpinner className="animate-spin" /> : "APPLY FOR LOAN"}
          </Button>
        </div>
      </div>
    </div>
  );
}
