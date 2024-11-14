import { loans } from "@/constants";
import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

export default function Loan() {
  return (
    <>
      <header className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-x-10 bg-[#346887] px-4 md:px-8 lg:px-10 pt-8 lg:pt-12 text-white">
        <div className="max-w-4xl self-center  lg:pb-10">
          <h1 className="mb-4 lg:mb-8 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight lg:leading-[3.5rem]">
            Find Help in your Health Journey
          </h1>
          <p className="text-sm md:text-base">
            We understand that your health is a priority, and we&apos;re
            committed to ensuring you have access to the best care possible.
            Medical expenses can often come unannounced, causing stress and
            financial strain. Our Medical Loan service is designed to ease this
            burden and empower you to prioritize your well-being without
            compromising on quality healthcare. experience.
          </p>
          <div className="mt-6 lg:mt-9 flex flex-col mx-auto items-center  sm:flex-row gap-4 sm:gap-x-2.5">
            <Link
              href={routes.LOANDASHBOARDHOME}
              className="block w-full md:max-w-45 rounded-lg bg-primary-500 px-6  py-3 text-center text-primary-50"
            >
              GET STARTED
            </Link>
            <Link
              href={routes.LOGIN}
              className="block w-full md:max-w-45 rounded-lg border border-primary-500 bg-white px-6  py-3 text-center text-primary-500"
            >
              LOGIN
            </Link>
          </div>
        </div>
        <Image
          src="/images/loan.png"
          alt=""
          width={600}
          height={600}
          className="self-center lg:self-end w-full max-w-[420px] lg:max-w-[550px] h-auto"
        />
      </header>
      <main>
        <section className="p-4 md:p-8 lg:p-20">
          <h2 className="mb-6 text-center text-2xl md:text-3xl lg:text-4xl font-medium">
            How it works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-10">
            {loans.map(({ SvgComponent, details }, i) => (
              <article
                className="rounded-lg border-4 border-[#9CA3AF] p-4 md:p-6 lg:p-8 shadow-lg"
                key={i}
              >
                <div className="mb-4 flex justify-center">
                  {" "}
                  <SvgComponent />
                </div>
                <p className="text-center text-sm md:text-base">{details}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
