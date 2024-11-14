"use client";
import { useEffect, useState } from "react";

import Button from "@/components/button";
import { BiChevronLeft, BiChevronRight, BiInfoCircle } from "react-icons/bi";
import { LoanDetails, } from "@/definition";
import { CreateOfferParams } from "@/api/loan";
import dayjs from "dayjs";

export interface InstallmentPeriod {
  due_date: string;
  interest: number;
  principal: number;
  repay_amount: number;
  balance: number;
}


export default function LoanOfferClient({
  handleUpdateApplyDataField,
  loanDetails,
  nextPage
}: {
  handleUpdateApplyDataField: (field: keyof Omit<CreateOfferParams, "userid" | "session">, value: string | number | InstallmentPeriod[]) => void
  loanDetails: LoanDetails;
  nextPage: () => void;
}) {


  const sortedRangeArray = Object.values(loanDetails.range).sort((a, b) => {
    return a - b
  });
  const [loanAmountIndex, setLoanAmountIndex] = useState(sortedRangeArray.length - 2);
  const loanOptions = sortedRangeArray;
  const loanAmount = loanOptions[loanAmountIndex];
  const [loanDurationIndex, setLoanDurationIndex] = useState(0);
  const loanDuration = loanDetails.durations[loanDurationIndex];
  const loanInterest = loanDuration.interest;
  const loanLateInterest = loanDuration.late_interest;

  const dailyInterest = (loanInterest / 100) * loanAmount;
  const totalDailyInterest = dailyInterest * loanDuration.days;
  const dailyLateInterest = (loanLateInterest / 100) * loanAmount;
  const totalAmount = totalDailyInterest + loanAmount;



  const handleLeftChevronClick = () => {
    setLoanAmountIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex,
    );
  };

  const handleRightChevronClick = () => {
    setLoanAmountIndex((prevIndex) =>
      prevIndex < loanOptions.length - 1 ? prevIndex + 1 : prevIndex,
    );
  };



  const calculateInstallmentDaysValues = (installment_days: LoanDetails['durations'][0]['installment_days'][0]) => {
    const { days, period } = installment_days;
    const installmentIndex = loanDuration.installment_days.findIndex((installment) => installment.days === days && installment.period === period);
    const previousInstallmentsArray = loanDuration.installment_days.slice(0, installmentIndex);
    const sumOfPreviousInstallmentDays = previousInstallmentsArray.reduce((acc, installment) => acc + installment.days, 3);

    const dueDate = dayjs().add(sumOfPreviousInstallmentDays + days, "days").format("ddd, DD MMM YYYY");

    const installmentTotalAmount = (days / loanDuration.days) * totalAmount
    const installmentLoanAmount = (days / loanDuration.days) * loanAmount
    const installmentInterest = (days / loanDuration.days) * totalDailyInterest

    const sumPrevInstallmentTotalAmount = previousInstallmentsArray.reduce((acc, installment) => acc + (installment.days / loanDuration.days) * totalAmount, 0)

    const installmentBalance = Math.round((Math.round(totalAmount) - Math.round(sumPrevInstallmentTotalAmount)) - Math.round(installmentTotalAmount))

    return { dueDate, installmentInterest, installmentLoanAmount, installmentTotalAmount, installmentBalance };
  }

  const updateApplyData = () => {
    handleUpdateApplyDataField("amount", loanAmount);
    handleUpdateApplyDataField("total_days", loanDuration.days);
    handleUpdateApplyDataField("daily_interest", loanInterest);
    handleUpdateApplyDataField("late_interest", loanLateInterest);
    handleUpdateApplyDataField("total_installment", loanDuration.installment_days.length);
    handleUpdateApplyDataField("profit", totalDailyInterest);
    handleUpdateApplyDataField("totalamount", totalDailyInterest + loanAmount);
    handleUpdateApplyDataField("balance", totalDailyInterest + loanAmount);
    handleUpdateApplyDataField("installment_period", loanDuration.installment_days.map((installment) => ({
      due_date: calculateInstallmentDaysValues(installment).dueDate,
      interest: calculateInstallmentDaysValues(installment).installmentInterest,
      principal: calculateInstallmentDaysValues(installment).installmentLoanAmount,
      repay_amount: calculateInstallmentDaysValues(installment).installmentTotalAmount,
      balance: calculateInstallmentDaysValues(installment).installmentBalance,
    })));

  }

  useEffect(() => {
    updateApplyData();
  }, [loanAmount, loanDuration]);



  return (
    <div className="min-h-screen">
      <div className="mx-auto bg-white">
        <div className="grid grid-cols-1 gap-x-8 p-4 md:p-6 xl:grid-cols-5">
          <section className="xl:col-span-4">
            <div className="mb-6 flex items-center justify-between bg-gray-100 p-3">
              <BiChevronLeft
                className="h-10 w-10 border-r border-gray-300 pr-2 text-gray-400 hover:text-primary-500"
                onClick={handleLeftChevronClick}
              />
              <span className="text-3xl font-bold text-red-500">
                ₦{loanAmount.toLocaleString()}
              </span>
              <BiChevronRight
                className="h-10 w-10 border-l border-gray-300 pl-2 text-gray-400 hover:text-primary-500"
                onClick={handleRightChevronClick}
              />
            </div>

            <div className="mb-6 flex justify-between">
              {loanOptions.map((amount, index) => (
                <Button
                  key={amount + 'ehbrd'}
                  variant={index === loanAmountIndex ? "primary" : "outline"}
                  onClick={() => setLoanAmountIndex(index)}
                  className={`w-24 ${index === loanAmountIndex ? "bg-primary-500 text-white" : "border-primary-500 text-primary-500"}`}
                >
                  ₦{amount.toLocaleString()}
                </Button>
              ))}
            </div>

            <p className="mb-6 text-sm text-gray-600">
              Your loan amount range is ₦{loanOptions[0].toLocaleString()} to ₦{loanOptions[loanOptions.length - 1].toLocaleString()}
            </p>
            <section>
              <div className="mb-6 grid grid-cols-3 gap-4">
                {loanDetails.durations.map((option, index) => (

                  <Button
                    key={option.days + 'ehbrrbev'}
                    variant={option.days === loanDuration.days ? "primary" : "outline"}
                    onClick={() => {
                      setLoanDurationIndex(index);
                    }}
                    className={`flex h-24 flex-col items-center justify-center ${option.days === loanDuration.days
                      ? "border-secondary-500 bg-secondary-400"
                      : "bg-red-300"
                      }`}
                  >
                    <span className="text-lg font-semibold">
                      {option.days} Days
                    </span>
                    <span className="text-sm">
                      {loanInterest.toFixed(2)}% Daily
                    </span>
                  </Button>

                ))}
              </div>

              <div className="mb-6 space-y-4">
                <div className="flex justify-between">
                  <span>How to pay back</span>
                  <span>{loanDuration.installment_days.length} Installment for {loanDuration.days} days</span>
                </div>
                <div className="flex justify-between">
                  <span>Interest Daily</span>
                  <span>{loanDuration.interest.toFixed(2)}% / {loanDuration.late_interest.toFixed(2)}% </span>
                </div>
                <div className="flex justify-between">
                  <span>Charges Daily</span>
                  <span>₦{Math.round(dailyInterest).toLocaleString()} / ₦{Math.round(dailyLateInterest).toLocaleString()}</span>
                </div>
              </div>
              <div className="mb-6 flex items-start rounded-lg bg-primary-100 p-4">
                <BiInfoCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary-500" />
                <p className="text-sm">
                  You need to pay back{" "}
                  <span className="font-semibold">₦{Math.round(calculateInstallmentDaysValues(loanDuration.installment_days[0]).installmentTotalAmount).toLocaleString()}</span> in the first installment
                  in the next <span className="font-semibold">
                    {loanDuration.installment_days[0].days} Days</span>
                </p>
              </div>
              <div className="mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="">
                      <th className="py-2 text-left">Installments</th>
                      <th className="py-2 text-left">Total Amount</th>
                      <th className="py-2 text-left">Interest</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td>{loanDuration.installment_days.length}</td>
                      <td>₦{Math.round(totalAmount).toLocaleString()}</td>
                      <td>₦{Math.round(totalDailyInterest).toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <br />

              <div className="mb-6 space-y-4">
                {loanDuration.installment_days.map((installment, index) => (
                  <div key={installment._id + Math.random()} className="mb-4">
                    <h3 className="mb-2 font-semibold">{index + 1 === 1 ? "First" : index + 1 === 2 ? "Second" : "Third"} Installment </h3>
                    <table className="w-full text-sm">
                      <thead>
                        <tr>
                          <th className="py-2 text-left">Due Date</th>
                          <th className="py-2 text-left">Repay Amount</th>
                          <th className="py-2 text-left">Principal</th>
                          <th className="py-2 text-left">Interest</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{calculateInstallmentDaysValues(installment).dueDate}</td>
                          <td>₦{Math.round(calculateInstallmentDaysValues(installment).installmentTotalAmount).toLocaleString()}</td>
                          <td>₦{Math.round(calculateInstallmentDaysValues(installment).installmentLoanAmount).toLocaleString()}</td>
                          <td>₦{Math.round(calculateInstallmentDaysValues(installment).installmentInterest).toLocaleString()}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            </section>

            <div className="xl:col-span-2 pb-4">
              <Button onClick={nextPage} className="w-full rounded-lg bg-primary-500 py-3 text-white hover:bg-primary-600">
                APPLY FOR THIS LOAN
              </Button>
            </div>
          </section>


        </div>
      </div>
    </div>
  );
}
