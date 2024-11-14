import React from "react";
import GoBackButton from "./go-back-button";
import Button from "@/components/button";
import { CgSpinner } from "react-icons/cg";

interface NextBackButtonsProps {
  nextFunction?: () => void;
  backFunction?: () => void;
  isLoading?: boolean;
}

function NextBackButtons({  nextFunction, backFunction, isLoading }: NextBackButtonsProps) {  
  return (
    <div className="mt-8 flex max-w-lg justify-between gap-4 md:gap-8">
      {/* <NextButton route={next_route} /> */}
       <Button type="button" variant="primary" className="flex items-center justify-center gap-2 disabled:bg-primary-300 disabled:cursor-not-allowed disabled:text-white" onClick={nextFunction} disabled={isLoading}>
        
        {isLoading && <div className="flex items-center w-full justify-center gap-2"> Loading <CgSpinner className="animate-spin" /></div>}
        {!isLoading && "NEXT"}

      </Button>
      <GoBackButton onClick={backFunction} />
    </div>
  );
}

export default NextBackButtons;
