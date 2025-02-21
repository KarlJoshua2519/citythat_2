// import React, { useEffect, useState } from "react";
// import * as pdfjs from "pdfjs-dist/build/pdf";
// import "pdfjs-dist/web/pdf_viewer.css";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const ResumeSection = ({ user }) => {
//     const [imageSrcs, setImageSrcs] = useState([]);
//     const [resumeUrl, setResumeUrl] = useState("");

//     useEffect(() => {
//         if (!user?.resume) {
//             console.error("Resume URL is missing");
//             return;
//         }

//         const pdfUrl = `https://api.ctythat.com/${user.resume}`;
//         setResumeUrl(pdfUrl);

//         const renderPDFToImages = async () => {
//             try {
//                 const loadingTask = pdfjs.getDocument(pdfUrl);
//                 const pdf = await loadingTask.promise;
//                 const pages = [];

//                 for (let i = 1; i <= pdf.numPages; i++) {
//                     const page = await pdf.getPage(i);

//                     const scale = 2; // Adjust resolution
//                     const viewport = page.getViewport({ scale });

//                     const canvas = document.createElement("canvas");
//                     const context = canvas.getContext("2d");
//                     canvas.width = viewport.width;
//                     canvas.height = viewport.height;

//                     await page.render({ canvasContext: context, viewport }).promise;
//                     pages.push(canvas.toDataURL("image/png")); // Convert to PNG
//                 }

//                 setImageSrcs(pages);
//             } catch (error) {
//                 console.error("Error loading PDF:", error);
//             }
//         };

//         renderPDFToImages();
//     }, [user]);

//     return (
//         <div className="flex flex-col items-center mt-10">
//             <div className="w-full flex justify-end px-10 mb-4">
//                 {resumeUrl && (
//                     <a target="_blank"
//                         href={resumeUrl}
//                         download="resume.pdf"
//                         className="bg-primary text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 transition"
//                     >
//                         Download Resume
//                     </a>
//                 )}
//             </div>

//             <div className="bg-white p-4 grid grid-cols-2 gap-3 w-[90%]">
//                 {imageSrcs.length > 0 ? (
//                     imageSrcs.map((src, index) => (
//                         <img key={index} src={src} alt={`Resume Page ${index + 1}`} className="shadow-lg border mb-4" />
//                     ))
//                 ) : (
//                     <p className="text-red-500">No resume available</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ResumeSection;
