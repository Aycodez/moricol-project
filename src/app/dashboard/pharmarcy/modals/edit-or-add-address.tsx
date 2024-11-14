"use client";

import Button from "@/components/button";
import ModalLayout from "@/components/layouts/modal-layout";
import { CancelSvg } from "@/components/svgs";
import { useState } from "react";

import onlinePharmacyApi, { CreateAddressParams } from "@/api/online-pharmacy";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

export default function EditOrAddAddress({
  title,
  addressid,
}: {
  title: "Edit" | "New" | "Add";
  addressid?: string;
}) {
  const [isAddressModalOpen, setAddressModal] = useState(false);
  const { data: session } = useSession();
  const { enqueueSnackbar } = useSnackbar();
  const [address, setAddress] = useState<CreateAddressParams>({
    address: "",
    firstname: "",
    lastname: "",
    phone: "",
    country: "",
    city: "",
    state: "",
    postalcode: "",
    userid: session?.user.id ?? "",
    email: "",
    latitiude: "6deef",
    longitude: "2344",
    addressid,
  });
  // console.log(addressid);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target as HTMLInputElement;
    setAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    (event.target as HTMLInputElement).focus();
    // if (inputRef.current) {
    //   (inputRef.current as HTMLInputElement).focus();
    // }
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (title == "New") {
      await onlinePharmacyApi
        .createAddress(session!, address)
        .then((res) => {
          if (res.status_code == 200) {
            setAddressModal(false);
            enqueueSnackbar("Created successfully!", { variant: "success" });
            // useRouter().refresh();
          }
        })
        .catch((err) => {
          enqueueSnackbar(err, { variant: "error" });
          console.log(err);
        });
    } else {
      await onlinePharmacyApi
        .updateAddress(session!, address)
        .then((res) => {
          if (res.status_code == 200) {
            setAddressModal(false);
            enqueueSnackbar("Updated successfully!", { variant: "success" });
          }
        })
        .catch((err) => {
          enqueueSnackbar(err, { variant: "error" });
          console.log(err);
        });
    }
  };
  const closeEditModal = () => {
    setAddressModal(false);
  };

  const openEditModal = () => {
    setAddressModal(true);
  };

  return (
    <>
      {title === "Edit" ? (
        <button
          className="rounded border border-[#9F9FA0] px-5 py-2 text-xs font-bold text-[#2C2D33]"
          onClick={openEditModal}
        >
          Edit
        </button>
      ) : (
        <button
          className="rounded bg-primary-500 px-5 py-3 text-xs font-bold text-white"
          onClick={openEditModal}
        >
          Add Address
        </button>
      )}

      {isAddressModalOpen && (
        <ModalLayout>
          <article className="w-[1015px] bg-white px-12 py-5">
            <div className="mb-7 flex items-center justify-between border-b border-b-[#9F9FA0] pb-4">
              <h3 className="text-xl font-bold text-[#636985]">
                {title} Address
              </h3>
              <button
                className="rounded border border-[#CACACA] bg-[#EBEBED] p-0.5"
                onClick={closeEditModal}
              >
                <CancelSvg />
              </button>
            </div>

            <ul className="mb-7 grid gap-y-7">
              <li className="flex justify-between gap-x-6">
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="mb-2 block text-xs text-[#636985]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={address.firstname}
                    onChange={handleChange}
                    className="w-full rounded border border-[#CECECE] bg-[#F0F0F0] px-6 py-3 text-xs text-[#6E7285]"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="mb-2 block text-xs text-[#636985]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={address.lastname}
                    onChange={handleChange}
                    className="w-full rounded border border-[#CECECE] bg-[#F0F0F0] px-6 py-3 text-xs text-[#6E7285]"
                  />
                </div>
              </li>
              <li className="flex justify-between gap-x-6">
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="mb-2 block text-xs text-[#636985]"
                  >
                    Country / Region
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={address.country}
                    onChange={handleChange}
                    className="w-full rounded border border-[#CECECE] bg-[#F0F0F0] px-6 py-3 text-xs text-[#6E7285]"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="mb-2 block text-xs text-[#636985]"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={address.state}
                    onChange={handleChange}
                    className="w-full rounded border border-[#CECECE] bg-[#F0F0F0] px-6 py-3 text-xs text-[#6E7285]"
                  />
                </div>
              </li>
              <li>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="mb-2 block text-xs text-[#636985]"
                  >
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={address.address}
                    onChange={handleChange}
                    className="w-full rounded border border-[#CECECE] bg-[#F0F0F0] px-6 py-3 text-xs text-[#6E7285]"
                  />
                </div>
              </li>
              <li className="flex justify-between gap-x-6">
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="mb-2 block text-xs text-[#636985]"
                  >
                    Town / City
                  </label>
                  <input
                    type="text"
                    // ref={inputRef}
                    value={address.city}
                    name="city"
                    onChange={handleChange}
                    className="w-full rounded border border-[#CECECE] bg-[#F0F0F0] px-6 py-3 text-xs text-[#6E7285]"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="mb-2 block text-xs text-[#636985]"
                  >
                    Zip Code
                  </label>
                  <input
                    type="text"
                    // ref={inputRef}
                    value={address.postalcode}
                    name="postalcode"
                    onChange={handleChange}
                    className="w-full rounded border border-[#CECECE] bg-[#F0F0F0] px-6 py-3 text-xs text-[#6E7285]"
                  />
                </div>
              </li>
              <li className="flex justify-between gap-x-6">
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="mb-2 block text-xs text-[#636985]"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={address.phone}
                    name="phone"
                    onChange={handleChange}
                    className="w-full rounded border border-[#CECECE] bg-[#F0F0F0] px-6 py-3 text-xs text-[#6E7285]"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="mb-2 block text-xs text-[#636985]"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    // ref={inputRef}
                    value={address.email}
                    name="email"
                    onChange={handleChange}
                    className="w-full rounded border border-[#CECECE] bg-[#F0F0F0] px-6 py-3 text-xs text-[#6E7285]"
                  />
                </div>
              </li>
            </ul>
            <div className="flex justify-end gap-x-5">
              <button
                className="w-fit rounded border border-[#9F9FA0] px-16 py-3 text-xs font-bold text-[#636985]"
                onClick={closeEditModal}
              >
                Cancel
              </button>
              <Button
                onClick={handleSubmit}
                className="w-fit rounded px-16 py-3 text-xs font-bold"
              >
                Save
              </Button>
            </div>
          </article>
        </ModalLayout>
      )}
    </>
  );
  // function TextInput({
  //   label,
  //   value,
  //   name,
  // }: {
  //   label: string;
  //   value?: string;
  //   name?: string;
  // }) {
  //   return (
  //     <div className="w-full">
  //       <label htmlFor="" className="mb-2 block text-xs text-[#636985]">
  //         {label}
  //       </label>
  //       <input
  //         type="text"
  //         // ref={inputRef}
  //         value={value}
  //         name={name}
  //         onChange={handleChange}
  //         className="w-full rounded border border-[#CECECE] bg-[#F0F0F0] px-6 py-3 text-xs text-[#6E7285]"
  //       />
  //     </div>
  //   );
  // }
}
