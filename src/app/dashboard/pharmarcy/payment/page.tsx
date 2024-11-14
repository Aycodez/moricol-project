import TextInput from "@/components/auth/text-input";
import Button from "@/components/button";
import NavigationBackBtn from "@/components/nav-back-btn";
import { CreditCardSvg } from "@/components/svgs";

export default function Payment() {
  return (
    <main className="py-14">
      <div className="mx-auto mb-6 max-w-[818px]">
        <NavigationBackBtn />
      </div>

      <section className="gray-container py-14">
        <div className="mx-auto mb-2.5 max-w-[466px] rounded border-2 border-gray-500 bg-white px-3 py-4">
          <CreditCardSvg stroke="#E29A13" className="h-5 w-5" />
          Card
        </div>
        <form className="mx-auto grid max-w-[466px] gap-y-2.5">
          <TextInput label="Card Number" name="" />
          <div className="flex gap-x-2.5">
            <TextInput name="" label="Expiry" />
            <TextInput name="" label="CVC" />
          </div>
          <div className="flex gap-x-2.5">
            <TextInput name="" label="Country" />
            <TextInput name="" label="Postal code" />
          </div>
          <Button className="mt-4">Submit</Button>
        </form>
      </section>
    </main>
  );
}
