"use client";

import { LoanDetails } from "@/definition";
import LoanApplyForm from "./loan-apply-form";
import LoanConfirmDetails from "./loan-confirm-details";
import LoanPaymentDetails, { BankDetails } from "./loan-payment-details";
import { useState } from "react";
import { CreateOfferParams } from "@/api/loan";
import LoanOfferClient, { InstallmentPeriod } from "./loan-offer-client";

const initialData: Omit<CreateOfferParams, "userid" | "session"> = {
  category: "",
  amount: 0,
  balance: 0,
  total_installment: 0,
  total_days: 0,
  daily_interest: 0,
  late_interest: 0,
  profit: 0,
  totalamount: 0,
  installment_period: [
    {
      due_date: "",
      interest: 0,
      principal: 0,
      repay_amount: 0,
      balance: 0,
    },
  ],
  bvn: "",
  workaddress: "",
  workstatus: "",
  bankname: "",
  bankbranch: "",
  residentialaddress: "",
  utilitybill: "",
  monthlyincome: "",
  proof_of_income: "",
  bank_details: {
    accountnumber: "",
    accountname: "",
    bankname: "",
  },
  guarantor_one: {
    name: "",
    email: "",
    utility: "",
    residential_address: "",
    relationship: "",
    workstatus: "",
    phone: "",
  },
  guarantor_two: {
    name: "",
    email: "",
    utility: "",
    residential_address: "",
    relationship: "",
    workstatus: "",
    phone: "",
  },
  collaterals: [
    {
      item: "",
      proof_of_item: "",
    }
  ],
  outstanding: {
    owe: false,
    amount: 0,
  },
};

export default function LoanApplicationClient({
  loan_category,
  loanDetails,
  amount,
}: {
  loan_category: string;
  loanDetails: LoanDetails;
  amount: string;
}) {

  const [page, setPage] = useState<"offer" | "form" | "banks" | "confirm">("offer");

  const [applyData, setApplyData] = useState<Omit<CreateOfferParams, "userid" | "session">>({
    ...initialData, amount: Number(amount),
    category: loan_category,
    total_installment: loanDetails.durations[0].installment_days.length,
    total_days: loanDetails.durations[0].days,
    daily_interest: loanDetails.durations[0].interest,
    late_interest: loanDetails.durations[0].late_interest,
    profit: 0,
    totalamount: 0,
    installment_period: loanDetails.durations[0].installment_days.map(() => ({
      due_date: '',
      interest: 0,
      principal: 0,
      repay_amount: 0,
      balance: 0,
    })),
  });

  const handleUpdateApplyDataField = (field: keyof Omit<CreateOfferParams, "userid" | "session">, value: string | number | InstallmentPeriod[] | BankDetails) => {
    setApplyData((prev) => ({ ...prev, [field]: value }));
  };

  const nextPage = () => {
    if (page === "offer") {
      setPage("form");
    } else if (page === "form") {
      setPage("banks");
    } else if (page === "banks") {
      setPage("confirm");
    }
  };

  const prevPage = () => {
    if (page === "form") {
      setPage("offer");
    } else if (page === "banks") {
      setPage("form");
    } else if (page === "confirm") {
      setPage("banks");
    }
  };


  return (
    <>
      {page === "offer" && (
        <LoanOfferClient handleUpdateApplyDataField={handleUpdateApplyDataField} loanDetails={loanDetails} nextPage={nextPage} />
      )}
      {page === "form" && (
        <LoanApplyForm prevPage={prevPage} nextPage={nextPage} applyData={applyData} handleUpdateApplyDataField={handleUpdateApplyDataField} />
      )}
      {page === "banks" && (
        <LoanPaymentDetails prevPage={prevPage} nextPage={nextPage} applyData={applyData} handleFieldChangeAndUpdate={handleUpdateApplyDataField} />
      )}
      {page === "confirm" && <LoanConfirmDetails category={loanDetails.name} prevPage={prevPage} applyData={applyData} />}
    </>
  );
}
