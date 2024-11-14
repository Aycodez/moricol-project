import Image from "next/image";

export default function AuthSidebar({ imgUrl }: { imgUrl: string }) {
  return (
    <section className="w-[521px] shrink-0 flex-col items-center justify-between bg-primary-300 py-20 text-center text-gray-800 hidden lg:flex  ">
      <div>
        <h1 className="mb-3 text-2xl font-semibold">
          Let&apos;s Get You Started
        </h1>
        <p className="font-medium">
          Centralized health services and users’ balance to innovation
        </p>
      </div>

      <div className="relative h-[410.78px] w-[410.78px] rounded-full bg-secondary-300">
        <Image
          src={imgUrl}
          alt=""
          width={541}
          height={541}
          priority
          className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </section>
  );
}
