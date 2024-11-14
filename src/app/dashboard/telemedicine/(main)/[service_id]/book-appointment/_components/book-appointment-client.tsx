"use client";

import React, { useState } from "react";
import HealthInformationUpload from "./health-information-upload";
import HealthAppointmentConfirmation from "./health-appointment-confirmation";
import PaymentConfirmation from "./payment-confirmation";
import ConfirmBookingModal from "./confirm-modal";
import SetReminderModal from "./set-reminder-modal";
import UserResponsive from "./user-responsive";
import UrgentRoutine from "./urgent-routine";

const BookAppointmentClient: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [complete, setComplete] = useState<boolean>(false);
  const [showReminderModal, setShowReminderModal] = useState<boolean>(false);

  const nextStep = () => {
    if (step === 4) {
      setComplete(true);
      return;
    }
    setStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  const prevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <UserResponsive nextStep={nextStep} />;
      case 1:
        return <UrgentRoutine nextStep={nextStep} />;
      case 2:
        return <HealthInformationUpload nextStep={nextStep} />;
      case 3:
        return (
          <HealthAppointmentConfirmation
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 4:
        return <PaymentConfirmation prevStep={prevStep} nextStep={nextStep} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <ConfirmBookingModal
        show={complete}
        onClose={() => {
          setComplete(false);
        }}
        showSub={() => {
          setComplete(false);
          setShowReminderModal(true);
        }}
      />
      <SetReminderModal
        show={showReminderModal}
        onClose={() => {
          setShowReminderModal(false);
        }}
      />
      <h1 className="w-[90%] text-center md:m-auto md:w-[85%]">
        {step === 2 && "Provide Health Information"}
        {step === 3 &&
          "Confirm a date and time for your appointment with a general practitioner. Include a note as well"}
        {step === 4 &&
          "Make payment to confirm your appointment with your doctor."}
      </h1>
      {step !== 0 && step !== 1 && (
        <div className="mx-auto my-4 mb-4 flex w-[80%] justify-center space-x-2">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s + "dh"}
              className={`flex w-full items-center justify-center rounded-full border-2 ${
                s < step || s === step ? "border-green-500" : "border-gray-300"
              }`}
            ></div>
          ))}
        </div>
      )}
      {renderStep()}
    </div>
  );
};

export default BookAppointmentClient;
