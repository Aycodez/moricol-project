import DashboardToolbar from "@/components/dashboard/dashboard-toolbar";
import Link from "next/link";

export default function OrganizationPlan() {
  return (
    <main>
      <DashboardToolbar />

      <section className="mx-auto max-w-[952px] py-20">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-lg font-medium">
            Pick a plan that’s right for you
          </h2>
          <p>
            To ensure flexible and accessible telemedicine services, Moricol
            Healthcare offers tiered pricing options based on the number of
            registered users within an organization. Whether you have a small
            team or a larger workforce, we aim to accommodate your needs
            effectively
          </p>
        </div>

        <div className="flex gap-x-5">
          <div className="py-7">
            <PlanCard
              min={1}
              max={5}
              option={{
                weekly: "₦5,000",
                monthly: "₦8,000",
                quarterly: "₦10,000",
              }}
            />
          </div>
          <PopularPlanCard
            min={6}
            max={10}
            option={{
              weekly: "₦10,000",
              monthly: "₦20,000",
              quarterly: "₦50,000",
            }}
          />
          <div className="py-7">
            <PlanCard
              min={11}
              max={30}
              option={{
                weekly: "₦25,000",
                monthly: "₦30,000",
                quarterly: "₦50,000",
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function PlanCard({
  min,
  max,
  option,
}: {
  min: number;
  max: number;
  option: { weekly: string; monthly: string; quarterly: string };
}) {
  return (
    <article className="h-full rounded-lg border-2 border-primary-500 p-8">
      <p className="mb-8 text-xs">
        For Organization who wants to cater for not so many persons all at once
      </p>

      <h3 className="mb-10 font-semibold text-primary-500">
        {min} - {max} PERSONS
      </h3>

      <form>
        <ul className="mb-10 grid gap-y-3">
          <li className="flex items-center gap-x-1.5">
            <input type="checkbox" />
            <label htmlFor="" className="text-xs">
              WEEKLY - {option.weekly}
            </label>
          </li>
          <li className="flex items-center gap-x-1.5">
            <input type="checkbox" />
            <label htmlFor="" className="text-xs">
              MONTHLY - {option.monthly}
            </label>
          </li>
          <li className="flex items-center gap-x-1.5">
            <input type="checkbox" />
            <label htmlFor="" className="text-xs">
              QUARTERLY - {option.quarterly}
            </label>
          </li>
        </ul>
        <Link
          href="/add-organization-members"
          className="transition-color inline-block w-full rounded-lg border border-primary-500 bg-primary-500 px-4 py-3 text-center text-xs font-bold leading-[18.2px] text-white duration-300 hover:border-primary-500/80 hover:bg-primary-500/80"
        >
          Start Now!
        </Link>
        {/* <Button type="submit" className="py-3 text-xs font-bold">
          Start Now!
        </Button> */}
      </form>
    </article>
  );
}

function PopularPlanCard({
  min,
  max,
  option,
}: {
  min: number;
  max: number;
  option: { weekly: string; monthly: string; quarterly: string };
}) {
  return (
    <article className="rounded-lg bg-primary-50 p-8 pt-14">
      <p className="mb-8 text-xs">
        For Organization who wants to cater for so many persons all at once
      </p>

      <h3 className="mb-8 border-y border-gray-700 py-7 font-semibold text-primary-500">
        {min} - {max} PERSONS
      </h3>

      <form>
        <ul className="mb-24 grid gap-y-3">
          <li className="flex items-center gap-x-1.5">
            <input type="checkbox" />
            <label htmlFor="" className="text-xs">
              WEEKLY - {option.weekly}
            </label>
          </li>
          <li className="flex items-center gap-x-1.5">
            <input type="checkbox" />
            <label htmlFor="" className="text-xs">
              MONTHLY - {option.monthly}
            </label>
          </li>
          <li className="flex items-center gap-x-1.5">
            <input type="checkbox" />
            <label htmlFor="" className="text-xs">
              QUARTERLY - {option.quarterly}
            </label>
          </li>
        </ul>
        <Link
          href="/add-organization-members"
          className="transition-color inline-block w-full rounded-lg border border-primary-500 bg-primary-500 px-4 py-3 text-center text-xs font-bold leading-[18.2px] text-white duration-300 hover:border-primary-500/80 hover:bg-primary-500/80"
        >
          Start Now!
        </Link>
        {/* <Button type="submit" className="py-3 text-xs font-bold">
          Start Now!
        </Button> */}
      </form>
    </article>
  );
}
