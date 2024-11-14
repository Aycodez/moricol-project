"use client";
import { useState, useEffect } from "react";
// import { LocationSVG, PhoneSVG, SingleUserSvg } from "@/components/svgs";
import EditOrAddAddress from "../../modals/edit-or-add-address";
import onlinePharmacyApi from "@/api/online-pharmacy";
import { useSession } from "next-auth/react";
import Address from "../../components/Address";

export interface AddressParams {
  address: string;
  firstname: string;
  lastname: string;
  phone: string;
  defaultaddress: boolean;
  country: string;
  city: string;
  state: string;
  postalcode: string;
  index: number;
  email?: string;
  _id?: string;
}
export default function Addresses() {
  const { data: session } = useSession();
  const [address, setAddress] = useState<AddressParams[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await onlinePharmacyApi
        .getallAddress(
          session!,
          // @ts-expect-error: 'id' is not a property of 'session'
          session?.user.id,
        )
        .then((s) => {
          setAddress(s.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [session]);
  // console.log(address);

  return (
    <section className="rounded border border-gray-300">
      <div className="border-b border-gray-300 pt-5">
        <h2 className="inline-block border-b-2 border-b-primary-500 px-6 pb-5 font-semibold text-primary-500">
          Addresses
        </h2>
      </div>

      <ul className="grid gap-y-10 px-8 py-10">
        {address?.map((a, i) => (
          <li key={i}>
            <Address
              index={i}
              firstname={a.firstname}
              lastname={a.lastname}
              defaultaddress={a.defaultaddress}
              address={a.address}
              phone={a.phone}
              postalcode={a.postalcode}
              state={a.state}
              city={a.city}
              country={a.country}
              _id={a._id}
            />
          </li>
        ))}

        <li className="border-t border-t-[#9F9FA0] pt-8">
          <EditOrAddAddress title="New" />
        </li>
      </ul>
    </section>
  );
}
