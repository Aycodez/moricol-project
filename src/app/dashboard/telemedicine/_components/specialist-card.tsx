import { routes } from "@/constants/routes";
import Link from "next/link";
import { ReactNode } from "react";

function SpecialistCard({
  color,
  icon,
  title,
  description,
  id,
}: {
  color: string;
  title: string;
  description: string;
  id?: string;
  icon: ReactNode;
}) {
  return (
    <Link
      href={routes.TELEMEDICINE_DASHBOARD + "/" + id}
      className={`${color} rounded-lg p-4 `}
    >
      <div className="mb-2 text-3xl">{icon}</div>

      <h3 className="md:text-md mb-1 text-sm font-semibold capitalize">{title}</h3>
      <p className="text-sm text-gray-600 ">{description}</p>
    </Link>
  );
}

export default SpecialistCard;
