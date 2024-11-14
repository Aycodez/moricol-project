import Image from "next/image";

export default function NotFound() {
  return (
    <section
      className="flex min-h-screen w-screen flex-col items-center justify-center"
      style={{ background: "radial-gradient(#C5B69A, #C9AA71, #B58A3B)" }}
    >
      <Image src="/images/ghost.png" alt="" width={568} height={456} />
      <p className="mt-9 font-medium text-white">
        Oops! it seems you followed a backlink
      </p>
      <button className="font-montserrat mt-6 w-full max-w-[697px] rounded border border-[#4B0082] bg-white py-3 font-medium">
        GO BACK TO HOME
      </button>
    </section>
  );
}
