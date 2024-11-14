"use client";
import Button from "@/components/button";
import NavigationBackBtn from "@/components/nav-back-btn";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { useState } from "react";

export default function ReturnPolicy({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [agree, setAgree] = useState(false);


  return (
    <section className="pb-5">
      <div className="border-b border-gray-300 px-4 py-2">
        <NavigationBackBtn />
      </div>
      <div className="px-8">
        <h1 className="py-3 text-center text-xl">Policy Agreement</h1>
        <div className="flex flex-col gap-y-2 text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur. Ornare magnis fusce in
            volutpat mauris. Leo at sit scelerisque turpis id quis. Eu iaculis
            at volutpat amet enim id pulvinar ornare diam. Dui turpis erat in
            est aliquam neque. Mauris quis gravida vitae massa blandit tempor in
            est risus.
          </p>
          <p>
            Bibendum ut at a massa. Cursus arcu amet eget vitae diam ultricies.
            Orci sagittis rhoncus sed faucibus. Sed penatibus amet elit
            pellentesque leo ornare. Egestas tincidunt donec egestas sed egestas
            eu. Urna eget augue nibh varius in fringilla sem aliquet aenean.
            Ultrices dignissim suscipit id fames ultricies scelerisque ultricies
            libero
          </p>
          <p>
            {" "}
            quisque. Risus adipiscing lectus tristique lorem lorem. Ac duis
            vestibulum feugiat enim nisi lorem. Id ullamcorper adipiscing
            faucibus at. Nec eget in rhoncus mi. Gravida a elit nisl maecenas
            nulla. Vel sit est ac urna ac velit in in. Euismod ullamcorper eu
            sed nullam. Interdum sodales proin sagittis ac nulla. Sed id auctor
            integer massa eget condimentum eget. Morbi condimentum cursus eu
            neque dolor vitae nisl metus. Id adipiscing sagittis viverra mi
            sagittis tellus volutpat id. Condimentum mus cum lacinia auctor nisl
            rhoncus nibh. Quis urna faucibus orci purus scelerisque senectus
            ridiculus quam. Phasellus blandit amet adipiscing aliquam vel erat
            venenatis congue. A ultricies
          </p>
          <p>
            ut nisl tortor. Laoreet cursus pharetra mi hendrerit pellentesque
            magna tristique tincidunt semper. Diam vulputate nulla ultricies
            tortor varius molestie nulla
          </p>
        </div>
        <form className="mt-5">
          <div className="flex items-center gap-x-2">
            <input onChange={() => setAgree(!agree)} type="checkbox" id="agree" className="h-5 w-5" />
            <label htmlFor="agree" className="italics text-gray-500">
              {/* By continuing, you have agreed to this loan policy. */}
              You have agreed for us to have access to your guarantors and bank
              managers.
            </label>
          </div>
          {searchParams.cb && agree && (
            <Link href={(routes.LOANDASHBOARDHOME + searchParams.cb) as string}>
              <Button className="mt-10 lg:max-w-[360px] ">Continue</Button>
            </Link>
          )}
        </form>
      </div>
    </section>
  );
}
