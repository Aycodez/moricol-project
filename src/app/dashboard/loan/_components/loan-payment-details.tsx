import React from "react";
import { Input } from "@/components/input";
import Button from "@/components/button";
import { ArrowRightSvg } from "@/components/svgs";
import { Label } from "@/components/label";
import { banksInNigeria } from "@/constants/banks";
import { CreateOfferParams } from "@/api/loan";
import { InstallmentPeriod } from "./loan-offer-client";

export type BankDetails = {
  accountnumber: string;
  accountname: string;
  bankname: string;
}

function LoanPaymentDetails({
  nextPage,
  prevPage,
  applyData,
  handleFieldChangeAndUpdate
}: {
  nextPage: () => void;
  prevPage: () => void;
  applyData: Omit<CreateOfferParams, "userid" | "session">;
  handleFieldChangeAndUpdate: (field: keyof Omit<CreateOfferParams, "userid" | "session">, value: string | number | InstallmentPeriod[] | BankDetails) => void
}) {
  return (
    <div className="min-h-[50vh] bg-white">
      <div className="border-b border-gray-300 bg-gray-50 px-4 py-2">
        <button
          className="flex items-center gap-x-2 text-sm font-bold text-primary-500"
          onClick={prevPage}
        >
          <ArrowRightSvg className="h-4 w-4" /> Go Back
        </button>
      </div>

      <div className="max-w-xl p-4 md:p-6">
        <p className="mb-6 text-gray-700">
          Provide details of the account you would like to get the loan to
        </p>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label className="block pb-2" htmlFor="bank-name">
              Bank Name *
            </Label>
            <Input
              id="bank-name"
              value={applyData.bankname}
              onChange={(e) => {
                handleFieldChangeAndUpdate('bankname', e.target.value);
                handleFieldChangeAndUpdate('bank_details', { ...applyData.bank_details, bankname: e.target.value });
              }}
              placeholder="Enter bank name"
              list="bank-names"
              className="w-full"
            />
            <datalist id="bank-names">
              {banksInNigeria.map((bank) => (
                <option key={bank} value={bank} />
              ))}
            </datalist>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="account-number"
              className="block text-sm font-medium text-gray-700"
            >
              Bank account number
            </label>
            <Input
              type="number"
              id="account-number"
              placeholder="Enter your account number"
              className="w-full"
              value={applyData.bank_details.accountnumber}
              onChange={(e) => handleFieldChangeAndUpdate('bank_details', { ...applyData.bank_details, accountnumber: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="accountname"
              className="block text-sm font-medium text-gray-700"
            >
              Account Name
            </label>
            <Input
              type="text"
              id="account-name"
              placeholder="Enter your account name"
              className="w-full"
              value={applyData.bank_details.accountname}
              onChange={(e) => handleFieldChangeAndUpdate('bank_details', { ...applyData.bank_details, accountname: e.target.value })}
            />
          </div>

          <Button
            onClick={nextPage}
            className="mt-6 w-full rounded-lg bg-primary-500 py-3 text-white hover:bg-primary-600"
          >
            CONTINUE
          </Button>
        </form>
      </div>
    </div>
  );
}

export default LoanPaymentDetails;
