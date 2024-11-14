import Image from "next/image";
import Link from "next/link";

export default function AuthFooter({ signin = true }: { signin?: boolean }) {
  return (
    <footer className="mt-12 text-center">
      {!signin && <p className="mb-6 font-medium">
        Already have an account?{" "}
        <Link href="/signin" className="font-semibold text-primary-500">
          Login here
        </Link>
      </p>}
      {signin && <p className="mb-6 font-medium">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-semibold text-primary-500">
          Sign up here
        </Link>
      </p>}

      <div className="flex items-center justify-center gap-x-2.5">
        <Image
          src="/buttons/google-play.png"
          alt="Google play logo"
          width={101.3}
          height={30.01}
        />
        <Image
          src="/buttons/ap-store.png"
          alt="Apple store logo"
          width={101.3}
          height={30.01}
        />
      </div>
    </footer>
  );
}
