import React from "react";
import AppointmentView from "./_components/appointment-view";
import TelemedicineLayoutTemplate from "../../(main)/template";

function Appointments() {
  return (
    <TelemedicineLayoutTemplate>
      <AppointmentView />
    </TelemedicineLayoutTemplate>
  );
}

export default Appointments;
