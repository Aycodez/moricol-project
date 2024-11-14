import React from "react";
import LoanOfferClient from "../../_components/loan-offer-client";

function LoanOffer({ params }: { params: { loan_category: string } }) {
  return <LoanOfferClient loan_category={params.loan_category} />;
}

export default LoanOffer;
