import { CircleFolderSVG } from "@/components/svgs";
import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

export default function Massage() {
  return (
    <main className="pb-20">
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-x-20 px-4 lg:px-8 xl:px-20 py-8 xl:py-12">
        <div className="w-full lg:w-auto text-center lg:text-left">
          <Image
            src="/images/virtual-massage.png"
            alt=""
            width={600}
            height={600}
            className="w-full max-w-[600px] mx-auto"
          />
        </div>
        <div className="w-full max-w-[600px] text-center lg:text-left">
          <h1 className="mb-6 lg:mb-8 text-3xl lg:text-4xl xl:text-5.5xl font-bold leading-tight xl:leading-[3.5rem]">
            Your Massage Therapy
          </h1>
          <p className="text-sm lg:text-base">
            At Moricol, we take pride in our team of seasoned massage
            therapists, each a master in the art of healing touch. Our
            therapists are not merely practitioners; they are artisans who blend
            expertise with empathy, tailoring each session to your unique needs.
            From tension-relieving Swedish massages to the profound benefits of
            deep tissue treatments, our diverse range of therapies is designed
            to cater to every aspect of your well-being.
          </p>
          <div className="mt-6 lg:mt-9 flex flex-col sm:flex-row gap-4 sm:gap-x-2.5 justify-center lg:justify-start">
            <Link
              href="/dashboard/massage"
              className="inline-block w-full rounded-lg border border-primary-500 bg-primary-500 px-6 xl:px-9 py-3 text-center text-primary-50 transition duration-300 hover:border-primary-500/70 hover:bg-primary-500/70"
            >
              GET STARTED
            </Link>
            <Link
              href={`/signin?callbackUrl=${routes.MASSAGEDASHBOARDHOME}`}
              className="w-full rounded-lg border border-primary-500 px-6 xl:px-9 py-3 text-primary-500 transition duration-300 hover:border-primary-500/70 hover:text-primary-500/70"
            >
              LOGIN
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-x-12 bg-gradient-to-b from-[#F1F5F9] to-[#FFFFFF00] px-4 lg:px-8 py-6">
        <article className="flex max-w-[394px] flex-col items-center pt-6 lg:pt-10 text-center">
          <CircleFolderSVG fillColor="#EF4444" />
          <h3 className="mb-2 lg:mb-3 mt-2 text-base lg:text-lg font-bold">Harmony Haven</h3>
          <p className="text-sm lg:text-base">
            Our expert therapists combine ancient massage techniques with modern
            healthcare principles to bring you a holistic experience. that
            rejuvenates and restores balance.
          </p>
        </article>
        <article className="flex max-w-[394px] flex-col items-center pt-6 lg:pt-10 text-center">
          <CircleFolderSVG fillColor="#EAB308" />
          <h3 className="mb-2 lg:mb-3 mt-2 text-base lg:text-lg font-bold">Revive Rhythms</h3>
          <p className="text-sm lg:text-base">
            Our skilled practitioners use a blend of therapeutic massage and
            healthcare expertise to awaken your senses and promote overall
            well-being.
          </p>
        </article>
        <article className="flex max-w-[394px] flex-col items-center pt-6 lg:pt-10 text-center">
          <CircleFolderSVG fillColor="#2563EB" />
          <h3 className="mb-2 lg:mb-3 mt-2 text-base lg:text-lg font-bold">Vitality Vortex</h3>
          <p className="text-sm lg:text-base">
            Our skilled therapists create a vortex of vitality around you, using
            specialized techniques that not only address physical tension but
            also promote mental clarity.
          </p>
        </article>
      </section>
    </main>
  );
}
