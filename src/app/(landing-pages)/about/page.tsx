import { about } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./_components/contact-forn";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="bg-gray-50">
      <header className="mb-8 md:mb-12 p-6 md:p-20 text-center">
        <h1 className="mb-4 md:mb-8 text-3xl md:text-5xl font-extrabold">About us</h1>
        <p className="text-base md:text-lg">
          At MORICOL HEALTHCARE SERVICE we specialize in connecting exceptional
          healthcare talent with rewarding opportunities across Nigeria&apos;s
          vibrant healthcare sector. With our deep understanding of the
          healthcare industry and a vast network of professionals, we are
          committed to bridging the gap between skilled Specialists and
          healthcare institutions in need of their expertise.
        </p>
      </header>
      <main className="px-4 md:px-20">
        <section className="mb-8 md:mb-12">
          <h2 className="mb-4 md:mb-5 text-center text-xl md:text-2xl font-medium">
            Why work with us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-12 mx-auto w-full">
            {about.map(({ title, desc }, i) => (
              <AboutCard key={i} data={{ title, desc }} />
            ))}
          </div>
        </section>

        <section className="mb-16 md:mb-28">
          <h2 className="mb-6 md:mb-9 text-center text-3xl md:text-5xl font-bold">Our Team</h2>

          <div
            className="overflow-x-auto [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary-500/40 [&::-webkit-scrollbar-thumb]:rounded-full"
          >
            <div className="flex gap-4 md:gap-5 pb-4 min-w-max mx-auto">
              {Array(4)
                .fill("")
                .map((_, i) => (
                  <TeamCard key={i} />
                ))}
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
            <article className="z-20 w-full lg:w-1/2 rounded-t-3xl bg-white px-4 md:px-9 pb-12 md:pb-20 pt-6 md:pt-8 shadow-lg">
              <div className="mb-5 md:mb-7 flex items-center gap-x-4 md:gap-x-6">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 13.0156C13.6569 13.0156 15 11.6725 15 10.0156C15 8.35877 13.6569 7.01562 12 7.01562C10.3431 7.01562 9 8.35877 9 10.0156C9 11.6725 10.3431 13.0156 12 13.0156Z"
                    stroke="#E8AE42"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.5 10.0156C19.5 16.7656 12 22.0156 12 22.0156C12 22.0156 4.5 16.7656 4.5 10.0156C4.5 8.0265 5.29018 6.11885 6.6967 4.71232C8.10322 3.3058 10.0109 2.51563 12 2.51562C13.9891 2.51563 15.8968 3.3058 17.3033 4.71232C18.7098 6.11885 19.5 8.0265 19.5 10.0156V10.0156Z"
                    stroke="#E8AE42"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="grow">
                  <h3 className="mb-2 text-2xl md:text-3xl font-bold">Get In Touch</h3>
                  <ThreeYellowLines
                    lineOneMarginLeft="0px"
                    lineThreeMarginLeft="0px"
                  />
                </div>
              </div>
              <p className="mb-3 text-base md:text-lg">
                Lorem ipsum dolor sit amet consectetur. Turpis amet et elementum
                in vestibulum leo. Tortor quisque malesuada sed nunc platea eget
                habitasse.
              </p>

              <div className="mb-6 md:mb-9 flex items-center gap-x-4 md:gap-x-6">
                <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-primary-400"></div>
                <p className="text-base md:text-lg w-[82%]">
                  Plot 3703 - 3704 Babangida Boulevard, Maitama Abuja, Nigeria
                </p>
              </div>
              <div className="mb-6 md:mb-9 flex items-center gap-x-4 md:gap-x-6">
                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary-400"></div>
                <p className="text-base md:text-lg">+234 818 153 5915</p>
              </div>
              <div className="flex items-center gap-x-4 md:gap-x-6">
                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary-400"></div>
                <p className="text-base md:text-lg">info@moricolhealth.com</p>
              </div>
            </article>
            <div className="relative z-20 w-full lg:w-1/2 min-h-[300px] lg:min-h-0 bg-[url('/images/map.png')] bg-cover bg-center">
              <Image
                src="/images/map-attach.png"
                alt=""
                width={180}
                height={154}
                className="absolute -right-[40px] top-[162px] hidden lg:block"
              />
              <p className="absolute -right-6 top-[198px] text-2xl md:text-3xl font-bold text-white hidden lg:block">
                Go to Map
              </p>
            </div>
          </div>

          <div className="relative z-10 flex items-end justify-center -mx-4 md:-mx-20 -mt-16 md:-mt-32 h-[357px] rounded-t-[50px] md:rounded-t-[100px] bg-gray-800">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 max-w-3xl w-full pb-10">
              <Link
                href="#"
                className="flex items-center justify-center gap-2 bg-[#1E2732] p-4 text-white transition-opacity hover:opacity-90"
              >
                <Facebook className="h-6 w-6" />
                <span className="text-lg">Facebook</span>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center gap-2 bg-[#2C3440] p-4 text-white transition-opacity hover:opacity-90"
              >
                <Instagram className="h-6 w-6" />
                <span className="text-lg">Instagram</span>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center gap-2 bg-[#404B5A] p-4 text-white transition-opacity hover:opacity-90"
              >
                <Twitter className="h-6 w-6" />
                <span className="text-lg">Twitter</span>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center gap-2 bg-[#4F5B6B] p-4 text-white transition-opacity hover:opacity-90"
              >
                <Linkedin className="h-6 w-6" />
                <span className="text-lg">Linkedin</span>
              </Link>
            </div>
          </div>
        </section>
        <ContactForm />
      </main>
    </div>
  );
}

function AboutCard({ data }: { data: { title: string; desc: string } }) {
  return (
    <article className="max-w-[511px] mx-auto rounded-lg bg-white px-4 md:px-6 py-4 shadow-lg">
      <h3 className="mb-3 md:mb-4 text-lg md:text-xl font-medium text-black">{data.title}</h3>
      <p className="text-sm md:text-base">{data.desc}</p>
    </article>
  );
}

function TeamCard() {
  return (
    <article className="max-w-[314px] mx-auto overflow-hidden rounded-lg">
      <Image src="/images/partner.png" alt="" width={314} height={322} className="w-full" />
      <div className="rounded-b-lg border border-t-0 border-gray-700 p-4 text-center">
        <h3 className="mb-2 text-lg md:text-xl font-semibold">Partner/CEO</h3>
        <p className="mb-4 text-xl md:text-2xl text-gray-400">Adnan Adeosun</p>
        <ThreeYellowLines
          lineOneMarginLeft="100px"
          lineThreeMarginLeft="73px"
        />
      </div>
    </article>
  );
}

function ThreeYellowLines({
  lineOneMarginLeft,
  lineThreeMarginLeft,
}: {
  lineOneMarginLeft: string;
  lineThreeMarginLeft: string;
}) {
  return (
    <div className="flex max-w-[275px] flex-col gap-y-1.5">
      <div
        className="h-[3px] max-w-[146px] bg-primary-400"
        style={{ marginLeft: lineOneMarginLeft }}
      />
      <div className="h-[3px] bg-primary-400" />
      <div
        className="h-[3px] max-w-[95px] bg-primary-400"
        style={{ marginLeft: lineThreeMarginLeft }}
      />
    </div>
  );
}
