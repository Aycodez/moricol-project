import SubmitButton from "@/components/auth/form-button";
import TextInput from "@/components/auth/text-input";

export default function AddOrganizationMemberForm() {
  return (
    <form>
      <section className="mb-10">
        <div className="mb-2 grid gap-y-6 lg:gap-x-9">
          <TextInput
            label="Email"
            name="email"
            type="email"
            placeholder="beocminade@gmail.com"
          />
          <TextInput
            label="Phone Number"
            name="tel"
            type="tel"
            placeholder="9080010168"
          />
        </div>
        <AddAnotherMember />
      </section>

      <SubmitButton pendingText="Loggin in..." text="SAVE INFORMATION" />
    </form>
  );
}

function AddAnotherMember() {
  return (
    <div>
      <button className="mb-3 text-xs text-primary-500">
        ADD ANOTHER MEMBER
      </button>

      <ul className="grid w-full gap-y-2 text-sm text-gray-50">
        <li className="flex items-center gap-x-5">
          <div className="grow">
            <h3 className="mb-2 text-sm font-bold text-primary-500">
              Member 1
            </h3>
            <article className="bg-gray-500 px-1 py-2">
              <p>Email: graceakpa123@gmial.com</p>
              <p>Phone Number: 9080010158</p>
            </article>
          </div>
          <button className="shrink-0">❌</button>
        </li>
      </ul>
    </div>
  );
}
