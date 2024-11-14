import React, { ReactNode } from "react";

interface TelemedicineLayoutTemplateProps {
  children: ReactNode;
}

function TelemedicineLayoutTemplate({
  children,
}: TelemedicineLayoutTemplateProps) {

  return (
    <>
      <div>
        {children}
      </div>
    </>
  );
}

export default TelemedicineLayoutTemplate;
