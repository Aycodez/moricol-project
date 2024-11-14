import { Star } from "lucide-react";

export default function Component() {
  return (
    <div className="container mx-auto py-3">
      <h2 className="mb-6 text-lg font-semibold">Dr. Mahmud Nik Hasan</h2>

      <div className="space-y-4">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-12">
              <div className="flex justify-between">
                <div className="col-span-3 flex items-start gap-2">
                  <div className="h-[40px] w-[40px]">
                    <img
                      src="/images/client.jpg"
                      alt="Reviewer"
                      className="block h-full w-full rounded-full object-cover"
                    />{" "}
                  </div>
                  <div className="">
                    <h3 className="text-sm font-medium">Bolaji Samuel</h3>
                    <div className="my-1 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          className="fill-current text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <span className="text-right text-xs md:hidden">2023-05-18</span>
              </div>
              <p className="col-span-9 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Integer vulputate
                blandit arcu amet. Enim vel orci non habitant euismod aliquam
                eget. Gravida laoreet pellentesque arcu velit. Massa quis arcu
                arcu neque pellentesque sit morbi consequat ut. Duis pretium.
              </p>
            </div>

            <span className="hidden text-right text-xs md:block">
              2023-05-18
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
