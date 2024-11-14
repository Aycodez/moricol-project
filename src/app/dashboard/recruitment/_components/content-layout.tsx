import React from "react";
import NextBackButtons from "./next-back-buttons";
import { ProgressBar } from "./progress-bar";

interface ContentLayoutProps {
  step: number;
  pageTitle: string;
  children: React.ReactNode;
  next_route?: string;
  noButtons?: boolean;
  nextFunction?: () => void;
  backFunction?: () => void;
  isLoading?: boolean;
}

function ContentLayout({
  step,
  pageTitle,
  children,
  noButtons,
  nextFunction,
  backFunction,
  isLoading,
}: ContentLayoutProps) {
  return (
    <div className="mb:px-4 p-0 py-3">
      <ProgressBar progress={step} />
      <div className="max-w-2xl">
        <h2 className="mb-4 text-2xl font-bold">{pageTitle}</h2>
        {children}
        {!noButtons && <NextBackButtons nextFunction={nextFunction} backFunction={backFunction} isLoading={isLoading} />}
      </div>
    </div>
  );
}

export default ContentLayout;
