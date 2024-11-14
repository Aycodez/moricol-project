import SelectInput from "@/components/auth/select-input";
import TextInput from "@/components/auth/text-input";
import { PaypalSvg } from "@/components/svgs";
import PaymentSuccessful from "../../../modals/payment-success";

export default function PaymentForm() {
  return (
    <form className="-mx-10 grid gap-y-6 bg-white px-10 py-6">
      <SelectInput name="" label="Select Payment Method">
        <option value="">Credit Card, Debit Card & E-wallet</option>
      </SelectInput>
      <TextInput
        name=""
        label="Card Holder's name"
        placeholder="Card holder's name"
      />
      <TextInput
        name=""
        label="Card Number"
        placeholder="0000 - 0000 - 0000 - 0000"
      />

      <div className="flex gap-x-8">
        <div className="w-full">
          <TextInput
            name=""
            type="date"
            label="Card Expiration"
            placeholder="Card holder's name"
          />
        </div>
        <div className="w-full">
          <TextInput name="" label="CVV" placeholder="XXX" />
        </div>
      </div>
      <div>
        <label
          htmlFor=""
          className="text-grey-800 mb-2.5 inline-block font-medium"
        >
          Other services
        </label>
        <div className="flex gap-x-7">
          <div>
            <button className="flex h-11 items-center gap-x-3 rounded-full border border-[#D0D5DD] px-6">
              <PaypalSvg />
              Paystack
            </button>
            <p className="mt-2.5 text-center text-[#667085]">Paystack</p>
          </div>
          {/* <div>
            <button className="flex h-11 items-center gap-x-3 rounded-full border border-[#D0D5DD] px-6">
              <GoogleSvg />
              Pay
            </button>
            <p className="mt-2.5 text-center text-[#667085]">Google Play</p>
          </div>
          <div>
            <button className="flex h-11 items-center gap-x-3 rounded-full border border-[#D0D5DD] px-6">
              <AppleSvg />
              Pay
            </button>
            <p className="mt-2.5 text-center text-[#667085]">Apple Pay</p>
          </div> */}
        </div>
      </div>

      <div className="mt-5 bg-gray-50">
        <PaymentSuccessful />
      </div>
    </form>
  );
}
