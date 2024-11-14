import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { LocationSVG } from "./svgs";

export default function Footer() {
  return (
    <footer>
      <section className="bg-primary-700 text-primary-50">
        {/* NavLinks */}
        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-x-16 border-b-2 border-b-[#CCEBF9] pb-10 pt-8 px-4">
          {footerLinks.map(({ name, href }) => (
            <li key={href}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between p-4 md:p-10 gap-8">
          {/* Left side */}
          <div className="w-full lg:w-[679px] flex flex-col items-center lg:items-start">
            <Image
              src="/logo-transparent.png"
              alt="Moricon logo"
              width={206}
              height={94}
              className="mb-6"
            />
            <p className="mb-7 text-base md:text-lg text-center lg:text-left">
              Our goal is to provide quality care and give you the best service
              in the process
            </p>

            <address className="item-center mb-5 flex gap-x-3 not-italic text-sm md:text-base text-center lg:text-left">
              <LocationSVG />
              House 2, Road 4 Abraham Adesanya Estate, Ajah Lekki, Lagos State
            </address>
            <address className="item-center mb-5 flex gap-x-3 not-italic text-sm md:text-base text-center lg:text-left">
              <LocationSVG />
              27 Rueben Agho Avenue off 2nd Ugbor Road, GRA, Benin City
            </address>
            <p className="flex md:flex-row items-center justify-center lg:justify-start gap-y-2 gap-x-3 text-sm md:text-base text-center lg:text-left">
              <SupportSVG />
              <span>support@moricolhealth.com {" "}infomoricolhealthcare@gmail.com</span>
            </p>
          </div>
          {/* Right side */}
          <article className="w-full lg:max-w-[498px] flex flex-col items-center lg:items-start">
            <h3 className="mb-2 text-xl md:text-2xl font-medium text-center lg:text-left">
              Stay connected (Subscribe)
            </h3>
            <p className="mb-5 text-base md:text-lg text-center lg:text-left">
              The latest Moricol news, articles, and resources, sent straight to
              your inbox every month.
            </p>

            <form className="w-full">
              <div className="mb-6">
                <label htmlFor="email" className="mb-1 block text-center lg:text-left">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full rounded-lg py-3 px-4"
                />
              </div>
              <button className="font-seimi w-full rounded-lg bg-primary-500 py-3">
                SUBSCRIBE
              </button>
            </form>

            <div className="mt-4 flex justify-center gap-x-9">
              <Image
                src="/icons/facebook.png"
                width={20}
                height={20}
                alt="facebook logo"
              />
              <Image
                src="/icons/instagram.png"
                width={20}
                height={20}
                alt="instagram logo"
              />
              <Image
                src="/icons/twitter.png"
                width={20}
                height={20}
                alt="twitter logo"
              />
              <Image
                src="/icons/whatsapp-white.png"
                width={20}
                height={20}
                alt="whatsapp logo"
              />
            </div>
          </article>
        </div>
      </section>

      {/* Copyright */}
      <section className="flex flex-col md:flex-row items-center justify-center md:justify-between bg-primary-50 px-4 md:px-12 py-4 gap-y-2 text-sm md:text-base">
        <p className="text-center md:text-left">© 2023 Moricol Limited</p>
        <p className="text-center md:text-left">Terms & Condition</p>
        <p className="text-center md:text-left">Privacy Policy</p>
      </section>
    </footer>
  );
}

function SupportSVG() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.364 5.636L14.828 9.172M18.364 5.636C16.6762 3.94817 14.3869 3 12 3C9.61305 3 7.32383 3.94817 5.636 5.636M18.364 5.636C20.0518 7.32383 21 9.61305 21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5283 18.364 18.364M14.828 9.172C14.0779 8.42185 13.0609 8 12 8C10.9391 8 9.92215 8.42185 9.172 9.172M14.828 9.172C15.5781 9.92215 16 10.9391 16 12C16 13.0609 15.5781 14.0779 14.828 14.828M14.828 14.828L18.364 18.364M14.828 14.828C14.0779 15.5781 13.0609 16 12 16C10.9391 16 9.92215 15.5781 9.172 14.828M18.364 18.364C17.5283 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47173 19.1997 5.636 18.364M9.172 9.172L5.636 5.636M9.172 9.172C8.42185 9.92215 8 10.9391 8 12C8 13.0609 8.42185 14.0779 9.172 14.828M5.636 5.636C3.94817 7.32383 3 9.61305 3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80027 17.5283 5.636 18.364M9.172 14.828L5.636 18.364"
        stroke="#FDF5E8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
