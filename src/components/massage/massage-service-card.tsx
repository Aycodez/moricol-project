import Link from "next/link";

export default function MassageServiceCard({
  id,
  bg,
  service,
}: {
  id: number;
  bg: string;
  service: string;
}) {
  return (
    <Link href={`services/${id}`}>
      <article
        className="relative h-[172.1px] max-w-[181.78px] rounded bg-cover bg-no-repeat object-top"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 overflow-hidden text-center text-sm font-semibold text-white">
          {service}
        </p>
      </article>
    </Link>
  );
}
