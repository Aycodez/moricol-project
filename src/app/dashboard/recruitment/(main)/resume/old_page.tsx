// "use client";

// import React, { useState } from "react";
// import ContentLayout from "../../_components/content-layout";
// import Bio from "../../_components/bio";

// interface FormData {
//   [key: string]: any;
// }

// const Resume: React.FC = () => {
//   const maxPage = 10;
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [formData, setFormData] = useState<FormData>({});

//   const handleNext = () => {
//     console.log("presed");

//     setCurrentPage((prevPage) => Math.min(prevPage + 1, maxPage));
//   };

//   const handleBack = () => {
//     console.log("presed");

//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   const pageTitles: { [key: number]: string } = {
//     1: "Brief Bio",
//     2: "Work Experience (Including Study, atleast 10years)",
//     3: "Your Work Experience",
//     4: "Page 4",
//     5: "Page 5",
//     6: "Page 6",
//     7: "Page 7",
//     8: "Page 8",
//     9: "Page 9",
//     10: "Page 10",
//   };

//   const renderPage = () => {
//     switch (currentPage) {
//       case 1:
//         return <Bio formData={formData} setFormData={setFormData} />;
//       case 2:
//         return <Page2 formData={formData} setFormData={setFormData} />;
//       case 3:
//         return <Page3 formData={formData} setFormData={setFormData} />;
//       case 4:
//         return <Page4 formData={formData} setFormData={setFormData} />;
//       case 5:
//         return <Page5 formData={formData} setFormData={setFormData} />;
//       case 6:
//         return <Page6 formData={formData} setFormData={setFormData} />;
//       case 7:
//         return <Page7 formData={formData} setFormData={setFormData} />;
//       case 8:
//         return <Page8 formData={formData} setFormData={setFormData} />;
//       case 9:
//         return <Page9 formData={formData} setFormData={setFormData} />;
//       case 10:
//         return <Page10 formData={formData} setFormData={setFormData} />;
//       default:
//         return <div>Invalid Page</div>;
//     }
//   };

//   return (
//     <ContentLayout
//       pageTitle={pageTitles[currentPage]}
//       step={currentPage}
//       next={handleNext}
//       back={handleBack}
//       currentPage={currentPage}
//       maxPage={maxPage}
//     >
//       {renderPage()}
//     </ContentLayout>
//   );
// };

// // Dummy components for pages 1-10
// const Page1: React.FC<{
//   formData: FormData;
//   setFormData: React.Dispatch<React.SetStateAction<FormData>>;
// }> = ({ formData, setFormData }) => <div>Page 1</div>;
// const Page2: React.FC<{
//   formData: FormData;
//   setFormData: React.Dispatch<React.SetStateAction<FormData>>;
// }> = ({ formData, setFormData }) => <div>Page 2</div>;
// const Page3: React.FC<{
//   formData: FormData;
//   setFormData: React.Dispatch<React.SetStateAction<FormData>>;
// }> = ({ formData, setFormData }) => <div>Page 3</div>;
// const Page4: React.FC<{
//   formData: FormData;
//   setFormData: React.Dispatch<React.SetStateAction<FormData>>;
// }> = ({ formData, setFormData }) => <div>Page 4</div>;
// const Page5: React.FC<{
//   formData: FormData;
//   setFormData: React.Dispatch<React.SetStateAction<FormData>>;
// }> = ({ formData, setFormData }) => <div>Page 5</div>;
// const Page6: React.FC<{
//   formData: FormData;
//   setFormData: React.Dispatch<React.SetStateAction<FormData>>;
// }> = ({ formData, setFormData }) => <div>Page 6</div>;
// const Page7: React.FC<{
//   formData: FormData;
//   setFormData: React.Dispatch<React.SetStateAction<FormData>>;
// }> = ({ formData, setFormData }) => <div>Page 7</div>;
// const Page8: React.FC<{
//   formData: FormData;
//   setFormData: React.Dispatch<React.SetStateAction<FormData>>;
// }> = ({ formData, setFormData }) => <div>Page 8</div>;
// const Page9: React.FC<{
//   formData: FormData;
//   setFormData: React.Dispatch<React.SetStateAction<FormData>>;
// }> = ({ formData, setFormData }) => <div>Page 9</div>;
// const Page10: React.FC<{
//   formData: FormData;
//   setFormData: React.Dispatch<React.SetStateAction<FormData>>;
// }> = ({ formData, setFormData }) => <div>Page 10</div>;

// export default Resume;
