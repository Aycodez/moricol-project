import Image from "next/image";
import AuthSidebar from "@/components/auth/sidebar";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex h-screen min-h-screen overflow-hidden">
      <AuthSidebar imgUrl="/images/auth/appointment-with-doctor.png" />

      <section className="flex grow flex-col gap-y-10 overflow-y-auto px-14 pt-9">
        <div className="relative mx-auto h-[80.76px] w-[161px] lg:h-[111.36px] lg:w-[222px]">
          <Image
            alt="Moricol logo"
            src="logo.svg"
            fill
            sizes="100vw"
            priority
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-y-6">
          <Image
            src="/icons/checkmark-with-twinkles.png"
            alt=""
            width={334}
            height={222.67}
          />
          <div className="max-w-[754px] text-center text-primary-700">
            <h3 className="mb-3 text-2xl font-bold">
              Password reset successful
            </h3>
            <p>You new password has been successful updated.</p>
            <p> Click Continue to proceed to login</p>
            <Link
              href="/signin"
              className="transition-color mt-9 block w-full rounded-lg border border-primary-500 bg-primary-500 px-4 py-3.5 text-center text-base font-bold leading-[18.2px] text-white duration-300 hover:border-primary-500/80 hover:bg-primary-500/80"
            >
              Login
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
