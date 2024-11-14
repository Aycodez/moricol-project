"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { Card, CardContent } from "@/components/card";
import Button from "@/components/button";
import NavigationBackBtn from "@/components/nav-back-btn";
import { LoanHistorySingleProps } from "../history/[loan_id]/page";
import { formatDateToWords } from "@/util/format-dates-words";
import { useState } from "react";
import MakeLoanPayment from "./make-loan-payment";
import { Input } from "@/components/input";
import { FaInfoCircle } from "react-icons/fa";


interface LoanHistoryProps {
  loanData: LoanHistorySingleProps;
}

export default function LoanHistorySingleClient({
  loanData
}: LoanHistoryProps) {


  const { loan, loanhistory } = loanData;
  const { total_days, amount, status, daily_interest, installment_period } = loan;

  const outstanding_exists = loan.balance > 0;
  const [amountToPay, setAmountToPay] = useState(0);


  const getNextPayment = () => {
    const nextPayment = installment_period.find((payment, index) =>
      !payment.loan_paid && index > installment_period.findIndex(p => p.loan_paid)
    );

    const due_date = nextPayment?.due_date ? formatDateToWords(nextPayment.due_date) : 'Nil';
    const next_payment_amount = nextPayment?.repay_amount ? nextPayment.repay_amount : 0;
    const next_payment_id = nextPayment?._id;
    return { due_date, next_payment_amount, next_payment_id };
  }

  return (
    <div className="min-h-screen">
      <div className="border-b border-gray-300 px-4 py-2">
        <NavigationBackBtn />
      </div>
      <div className="max-w-2xl">
        <div className="p-4 md:p-6">
          <div>
            <Card className="relative mb-6 overflow-hidden rounded-xl bg-primary-500 text-white">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">Loan amount</p>
                    <p className="text-3xl font-bold">₦{amount.toLocaleString('en-NG')}</p>
                    <p className="text-xs text-gray-200 font-semibold py-2">Total amount due : ₦{loan.totalamount.toLocaleString('en-NG')} | Interest : ₦{loan.profit.toLocaleString('en-NG')}</p>
                  </div>
                  <div className={`absolute right-[-10px] top-[-10px] h-12 w-12 rounded-full ${status === 'approved' || status === 'completed' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                </div>
                <br />
                <hr />
                <div className="mt-4 flex justify-between text-sm">
                  <div>
                    <p>Loan duration</p>
                    <p>{total_days} days</p>
                  </div>
                  <div>
                    <p>Next payment</p>
                    <p>{getNextPayment().due_date}</p>
                  </div>
                  <div>
                    <p>Interest rate</p>
                    <p>{daily_interest}%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {outstanding_exists && <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <FaInfoCircle className="text-xl text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800"></h3>
                  <p className="text-blue-700">
                    You have an outstanding payment of ₦{(loan.totalamount - loan.total_amount_paid).toLocaleString('en-NG')}
                  </p>
                </div>
              </div>
            </div>}
            {!outstanding_exists && <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <FaInfoCircle className="text-xl text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-800"></h3>
                  <p className="text-green-700">
                    Loan has been fully paid. <span className="font-bold">(₦{loan.total_amount_paid.toLocaleString('en-NG')} of ₦{loan.totalamount.toLocaleString('en-NG')})</span>
                  </p>
                </div>
              </div>
            </div>}

            <Tabs defaultValue="schedule">
              <TabsList className="mb-4 grid w-full grid-cols-2">
                <TabsTrigger value="schedule">Payment Schedule</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              <TabsContent value="schedule" className="space-y-4">
                {installment_period.map((payment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b py-2"
                  >
                    <div>
                      <p className="font-semibold">N{payment.repay_amount.toLocaleString('en-NG')}</p>
                      <p className="text-sm text-gray-600">{formatDateToWords(payment.due_date)}</p>
                    </div>
                    <span
                      className={`rounded-full px-2 py-1 text-xs ${payment.loan_paid === true
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                        }`}
                    >
                      {payment.loan_paid === true ? "Paid" : "Pending"}
                    </span>
                  </div>
                ))}
                {installment_period.length === 0 && (
                  <div className="flex items-center justify-center py-10">
                    <p className="text-sm text-gray-600">No payment schedule</p>
                  </div>
                )}
              </TabsContent>
              <TabsContent value="history" className="space-y-4">
                {loanhistory.map((payment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b py-2"
                  >
                    <div>
                      <p className="font-semibold">N{payment.amount}</p>
                      <p className="text-sm text-gray-600">{payment.date}</p>
                    </div>
                    <span
                      className={`rounded-full px-2 py-1 text-xs ${payment.status === "Received Loan"
                        ? "bg-green-100 text-green-800"
                        : "text-primary-800 bg-primary-100"
                        }`}
                    >
                      {payment.status}
                    </span>
                  </div>
                ))}

                {loanhistory.length === 0 && (
                  <div className="flex items-center justify-center py-10">
                    <p className="text-sm text-gray-600">No payment history</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>


            {outstanding_exists && <dialog id="paymentDialog" className="p-6 rounded-lg shadow-lg w-96 max-w-full">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Make Payment</h3>
                <p className="text-sm text-gray-600">Choose an amount to pay</p>
                {Array.from(new Set(installment_period.map(p => p.repay_amount))).map((amount, index) => (
                  <span onClick={() => setAmountToPay(amount)} key={index} className="inline-block cursor-pointer hover:bg-gray-200  bg-blue-100 rounded-full px-2 py-1 text-xs">
                    ₦{amount.toLocaleString('en-NG')}
                  </span>
                ))}

                <div className="space-y-2">
                  <label htmlFor="paymentAmount" className="block text-sm font-medium text-gray-700">
                    Or enter an amount
                  </label>
                  <Input
                    type="number"
                    id="paymentAmount"
                    name="paymentAmount"
                    value={amountToPay.toString()}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter amount"
                    min="0"
                    step="0.01"
                    onChange={(e) => setAmountToPay(Number(e.target.value.toString()))}
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => {
                      const dialog = document.getElementById('paymentDialog') as HTMLDialogElement;
                      dialog.close();
                    }}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <MakeLoanPayment price={amountToPay} loanid={loan._id} />
                </div>
              </div>
            </dialog>}
            {outstanding_exists && <Button
              onClick={() => {
                const dialog = document.getElementById('paymentDialog') as HTMLDialogElement;
                dialog.showModal();
              }}
              variant="primary"
              className="mt-4"
            >
              Make Payment
            </Button>}



          </div>
        </div>
      </div>
    </div>
  );
}
