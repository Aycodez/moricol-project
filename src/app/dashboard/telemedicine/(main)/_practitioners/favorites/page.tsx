import { Card } from "@/components/card";

import Link from "next/link";
import { routes } from "@/constants/routes";

export default function Favorites() {
  return (
    <div className="mx-auto xl:container">
      <h1 className="mb-6 text-2xl font-bold">Favorite Doctors</h1>

      <div className="grid grid-cols-1 gap-x-8 divide-y bg-white md:grid-cols-2 xl:grid-cols-3">
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <Link
              key={index + "ji"}
              href={routes.TELEMEDICINE_PRACTITIONERS_REVIEWS}
            >
              <Card className="flex items-center space-x-4 rounded-none border-0 px-4 shadow-none">
                <img
                  src="/images/client.jpg"
                  alt="Dr. Mahmud Nik Hasan"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div className="flex min-h-20 flex-grow flex-col justify-between py-4">
                  <h2 className="font-semibold">Dr. Mahmud Nik Hasan</h2>
                  <div className="flex items-center space-x-1 text-sm">
                    <span className="text-yellow-500">★</span>
                    <span className="font-medium">4.5</span>
                  </div>
                  <div className="mt-auto flex justify-between text-xs">
                    <p className="text-gray-600">Cardiologist</p>
                    <p className="text-primary-500">(41 Reviews)</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
}
