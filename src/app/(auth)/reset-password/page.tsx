import Image from "next/image";
import AuthSidebar from "@/components/auth/sidebar";
import ResetPasswordForm from "./reset-password-form";

export default function ResetPassword({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const email = searchParams.email as string | undefined;
  const code = searchParams.code as string | undefined;

  return (
    <main className="flex h-screen min-h-screen overflow-hidden">
      <AuthSidebar imgUrl="/images/auth/doctor-online.png" />

      <section className="grow overflow-y-auto px-14 py-9">
        <div className="relative mx-auto mb-6 h-[80.76px] w-[161px] shrink-0 lg:mb-9 lg:h-[111.36px] lg:w-[222px]">
          <Image
            alt="Moricol logo"
            src="/logo.svg"
            fill
            sizes="100vw"
            priority
          />
        </div>

        <ResetPasswordForm email={email} code={code} />
      </section>
    </main>
  );
}
