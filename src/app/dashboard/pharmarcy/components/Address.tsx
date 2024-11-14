import { LocationSVG, PhoneSVG, SingleUserSvg } from "@/components/svgs";
import EditOrAddAddress from "@/app/dashboard/pharmarcy/modals/edit-or-add-address";
import { AddressParams } from "../account/addresses/page";

export default function Address(user: AddressParams) {
  return (
    <article>
      <h3 className="mb-5 border-b border-b-[#9F9FA0] pb-3.5 text-xs font-bold text-primary-500">
        {user.defaultaddress ? "Default Address" : `Address ${user.index + 1}`}
      </h3>
      <div className="flex items-center justify-between">
        <div className="grid gap-y-1.5 text-xs text-[#636985]">
          <p className="flex items-center gap-x-1 font-bold capitalize">
            <span className="flex h-3.5 w-3.5 items-center justify-center">
              <SingleUserSvg />
            </span>
            {`${user.firstname} ${user.lastname}`}
          </p>
          <p className="flex items-center gap-x-1 capitalize">
            <span className="flex h-3.5 w-3.5 items-center justify-center">
              <LocationSVG fill="#E29A13" className="h-4 w-4" />
            </span>
            {`${user.address} | ${user.city} - ${user.state},${user.country} | ${user.postalcode}`}
          </p>
          <p className="flex items-center gap-x-1">
            <span className="flex h-3.5 w-3.5 items-center justify-center">
              <PhoneSVG />
            </span>
            +234 {user.phone}
          </p>
        </div>
        <EditOrAddAddress addressid={user._id} title="Edit" />
      </div>
    </article>
  );
}
