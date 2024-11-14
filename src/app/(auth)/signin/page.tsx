import Image from "next/image";
import LoginForm from "./login-form";
import AuthFooter from "@/components/auth/footer";
import AuthSidebar from "@/components/auth/sidebar";
import Link from "next/link";

export default function Login(
  {
    searchParams
  }: {
    searchParams: { callbackUrl: string }
  }
) {
  return (
    <main className="flex h-screen min-h-screen overflow-hidden">
      <AuthSidebar imgUrl="/images/auth/mental-health.png" />

      <section className="grow overflow-y-auto px-14 py-9">
        <Link href="/" className="relative block mx-auto h-[80.76px] w-[161px] lg:h-[111.36px] lg:w-[222px]">
          <Image
            alt="Moricol logo"
            src="logo.svg"
            fill
            sizes="100vw"
            priority
          />
        </Link>

        <LoginForm callbackUrl={searchParams.callbackUrl} />

        <AuthFooter />
      </section>
    </main>
  );
}
