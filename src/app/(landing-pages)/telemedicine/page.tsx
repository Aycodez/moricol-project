import { CircleFolderSVG } from "@/components/svgs";
import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

export default function Telemedicine() {
  return (
    <main className="pb-20">
      <section className="flex items-center justify-between gap-x-20 px-20 py-12">
        <div className="max-w-[600px]">
          <h1 className="mb-8 text-5.5xl font-bold leading-[3.5rem]">
            Your Virtual Healthcare Hub
          </h1>
          <p>
            Welcome to Moricol Healthcare&apos;s Telemedicine platform - your
            gateway to accessible, convenient, and reliable healthcare from the
            comfort of your home. Our telemedicine service is designed to
            connect you with experienced Specialists, enabling you to receive
            personalized medical consultations and expert advice without leaving
            your doorstep.
          </p>
          <div className="mt-9 flex gap-x-2.5">
            <Link
              href={routes.TELEMEDICINE_DASHBOARD}
              className="w-full rounded-lg bg-primary-500 px-9 py-3 text-center text-primary-50"
            >
              GET STARTED
            </Link>
            <button className="w-full rounded-lg border border-primary-500 px-9 py-3 text-primary-500">
              LOGIN
            </button>
          </div>
        </div>
        <Image
          src="/images/healthcare-hub.png"
          alt=""
          width={600}
          height={600}
        />
      </section>
      <section className="mb-20 flex items-start justify-center gap-x-12 bg-gradient-to-b from-[#F1F5F9] to-[#FFFFFF00] py-6">
        <article className="flex max-w-[394px] flex-col items-center pt-10 text-center">
          <CircleFolderSVG fillColor="#EF4444" />
          <h3 className="mb-3 mt-2 text-lg font-bold">Convenience</h3>
          <p>
            Enjoy the ease of scheduling appointments at your convenience,
            eliminating the need for travel and long waiting times at clinics
          </p>
        </article>
        <article className="flex max-w-[394px] flex-col items-center pt-10 text-center">
          <CircleFolderSVG fillColor="#EAB308" />
          <h3 className="mb-3 mt-2 text-lg font-bold">Time-Saving</h3>
          <p>
            Save time by consulting with Specialists without the hassle of
            commuting to a physical healthcare facility.
          </p>
        </article>
        <article className="flex max-w-[394px] flex-col items-center pt-10 text-center">
          <CircleFolderSVG fillColor="#2563EB" />
          <h3 className="mb-3 mt-2 text-lg font-bold">Access to Specialists</h3>
          <p>
            Gain access to a wide network of specialists, irrespective of your
            location, ensuring you receive specialized care and advice.
          </p>
        </article>
      </section>
    </main>
  );
}
