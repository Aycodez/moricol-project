import React from "react";
import SpecialistCard from "../../_components/specialist-card";
import {
  FaPeopleRobbery,
  FaRoad,
  FaUserDoctor,
  FaUserNurse,
} from "react-icons/fa6";
import { IoNutrition } from "react-icons/io5";
import { TbPhysotherapist } from "react-icons/tb";
import { CgMore } from "react-icons/cg";
import { GiMedicines } from "react-icons/gi";
import TelemedPageWrap from "../../_components/telemed-page-wrap";

function Specialists() {
  return (
    <TelemedPageWrap>
      <div className="grid grid-cols-2 gap-4 py-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <SpecialistCard
          color="bg-purple-100"
          icon={
            <div className="w-fit rounded-full bg-purple-200 p-2">
              <FaUserDoctor className="text-purple-600" />
            </div>
          }
          title="Qualified Doctors"
          description="Gynaecologist, Urologist, Neurologist, etc"
        />
        <SpecialistCard
          color="bg-green-100"
          icon={
            <div className="w-fit rounded-full bg-green-200 p-2">
              <FaUserNurse className="text-green-600" />
            </div>
          }
          title="Registered Nurses"
          description="Children Nurse, General Nurse, Midwife, etc"
        />
        <SpecialistCard
          color="bg-blue-100"
          icon={
            <div className="w-fit rounded-full bg-blue-200 p-2">
              <TbPhysotherapist className="text-blue-600" />
            </div>
          }
          title="Physiotherapist"
          description="Sports Physiotherapy, Geriatric Physiotherapy, etc"
        />
        <SpecialistCard
          color="bg-primary-100"
          icon={
            <div className="bg-primary-200 w-fit rounded-full p-2">
              <FaRoad className="text-primary-600" />
            </div>
          }
          title="Counselling"
          description="Psychotherapist, Careers Counselor, etc"
        />
        <SpecialistCard
          color="bg-pink-100"
          icon={
            <div className="w-fit rounded-full bg-pink-200 p-2">
              <IoNutrition className="text-pink-600" />
            </div>
          }
          title="Nutritionists and Dietician"
          description="Clinical dietitians, Community dietitians, etc"
        />
        <SpecialistCard
          color="bg-red-100"
          icon={
            <div className="w-fit rounded-full bg-red-200 p-2">
              <FaPeopleRobbery className="text-red-600" />
            </div>
          }
          title="Coaching"
          description="Clinical dietitians, Community dietitians, etc"
        />
        <SpecialistCard
          color="bg-red-100"
          icon={
            <div className="w-fit rounded-full bg-red-200 p-2">
              <GiMedicines className="text-red-600" />
            </div>
          }
          title="Alternative Medicine"
          description="Herbalist,  Homeopathy, Naturopathy, etc."
        />
        <SpecialistCard
          color="bg-gray-100"
          icon={
            <div className="w-fit rounded-full bg-gray-200 p-2">
              <CgMore className="text-gray-600" />
            </div>
          }
          title="Others"
          description="Other categories."
        />
      </div>
    </TelemedPageWrap>
  );
}

export default Specialists;
