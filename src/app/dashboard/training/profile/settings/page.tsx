import SelectInput from "@/components/auth/select-input";
import TextInput from "@/components/auth/text-input";
import Button from "@/components/button";

export default function Setttings() {
  return (
    <main className="py-20">
      <section className="gray-container px-14 py-8">
        <div className="mb-6 text-right">
          <button className="text-lg font-medium text-primary-500">
            Change Password?
          </button>
        </div>

        <form className="max-w-[796px]">
          <ul className="grid gap-y-6">
            <li className="grid grid-cols-2 gap-x-16">
              <TextInput name="" label="First Name" />
              <TextInput name="" label="Last Name" />
            </li>
            <li className="grid grid-cols-2 gap-x-16">
              <TextInput name="" label="Email" />
              <TextInput name="" label="Phone number" />
            </li>
            <li className="grid grid-cols-2 gap-x-16">
              <TextInput name="" label="Date of Birth" type="date" />
              <SelectInput name="" label="Phone number">
                <option value="">Gender</option>
                <option value="">Male</option>
                <option value="">Female</option>
              </SelectInput>
            </li>
            <li className="grid grid-cols-2 gap-x-16">
              <TextInput name="" label="Religion" />
              <TextInput name="" label="Occupation" />
            </li>
            <li className="grid grid-cols-2 gap-x-16">
              <TextInput name="" label="Marital Status" />
              <TextInput name="" label="Country" />
            </li>
            <li className="grid grid-cols-2 gap-x-16">
              <TextInput name="" label="State" />
              <div />
            </li>
          </ul>
          <Button className="mt-10">UPDATE</Button>
        </form>
      </section>
    </main>
  );
}
