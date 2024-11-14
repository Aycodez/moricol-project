// import React from "react";
// import NextBackButtons from "./next-back-buttons";
// import { ProgressBar } from "./progress-bar";

// interface ContentLayoutProps {
//   step: number;
//   pageTitle: string;
//   children: React.ReactNode;
//   noButtons?: boolean;
//   next: () => void;
//   back: () => void;
//   currentPage: number;
//   maxPage: number;
// }

// function ContentLayout({
//   step,
//   pageTitle,
//   children,
//   noButtons,
//   next,
//   back,
//   currentPage,
//   maxPage,
// }: ContentLayoutProps) {
//   return (
//     <div className="p-0 py-5 md:px-4">
//       <ProgressBar progress={step} />
//       <div className="max-w-2xl">
//         <h2 className="mb-4 text-2xl font-bold">{pageTitle}</h2>
//         {children}
//         {!noButtons && (
//           <NextBackButtons
//             currentPage={currentPage}
//             maxPage={maxPage}
//             back={back}
//             next={next}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default ContentLayout;
