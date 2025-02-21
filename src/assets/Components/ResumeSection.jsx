import React, { useState, useEffect } from 'react';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import 'pdfjs-dist/build/pdf.worker.entry';
import { ChevronLeft, ChevronRight, Download, Trash2 } from 'lucide-react';

const ResumeSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [resumes, setResumes] = useState([]);
    const [resumeImages, setResumeImages] = useState({});
    const [currentResumeIndex, setCurrentResumeIndex] = useState(0);

    useEffect(() => {
        fetchResumes();
    }, []);

    useEffect(() => {
        if (resumes.length > 0) {
            const pdfUrl = `https://api.ctythat.com/${resumes[currentResumeIndex].file}`;
            renderPDF(pdfUrl, resumes[currentResumeIndex].id);
        }
    }, [resumes, currentResumeIndex]);

    const fetchResumes = async () => {
        try {
            const response = await fetch('https://api.ctythat.com/api/User/GetResumes', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            if (!response.ok) throw new Error('Failed to fetch resumes');
            const data = await response.json();
            setResumes(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleFileChange = (event) => {
        setSelectedFiles([...event.target.files]);
    };

    const handleUpload = async () => {
        if (selectedFiles.length === 0) return;

        const formData = new FormData();
        selectedFiles.forEach(file => formData.append("File", file));

        try {
            const response = await fetch('https://api.ctythat.com/api/User/AddResume', {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            if (!response.ok) throw new Error('Upload failed');
            setIsModalOpen(false);
            setSelectedFiles([]);
            fetchResumes();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (resumeId) => {
        try {
            const response = await fetch('https://api.ctythat.com/api/User/DeleteResumes', {
                method: 'POST', // API expects POST, not DELETE
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ids: [resumeId] }) // Send ID as an array
            });

            if (!response.ok) throw new Error('Failed to delete resume');

            // Remove the deleted resume from state
            setResumes(resumes.filter(resume => resume.id !== resumeId));
            setCurrentResumeIndex(0);
        } catch (error) {
            console.error("Error deleting resume:", error);
        }
    };


    const renderPDF = async (pdfUrl, resumeId) => {
        try {
            const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
            const images = [];

            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const scale = 2.5;
                const viewport = page.getViewport({ scale });
                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");
                canvas.width = viewport.width;
                canvas.height = viewport.height;

                await page.render({ canvasContext: context, viewport }).promise;
                images.push(canvas.toDataURL("image/png"));
            }

            setResumeImages(prev => ({ ...prev, [resumeId]: images }));
        } catch (error) {
            console.error("Error rendering PDF:", error);
        }
    };

    const handlePrevResume = () => {
        setCurrentResumeIndex(prevIndex => (prevIndex === 0 ? resumes.length - 1 : prevIndex - 1));
    };

    const handleNextResume = () => {
        setCurrentResumeIndex(prevIndex => (prevIndex === resumes.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full min-h-screen px-10 flex flex-col items-center justify-center">
            <button className="mt-6 border-2 bg-primary text-white font-medium px-4 py-1" onClick={() => setIsModalOpen(true)}>
                Add Resume
            </button>
            <h1 className="text-gray-700 mt-10 font-bold text-lg opacity-50">
                {resumes.length > 0 ? '' : 'No Resume Uploaded'}
            </h1>

            {resumes.length > 0 && (
                <div className="relative w-full flex items-center justify-center">


                    <div className="bg-white border-2 border-primary rounded-lg shadow-lg p-4 flex flex-col w-[70%] items-center mb-10">
                        <div className="flex flex-row justify-between w-full my-4 gap-4">
                            <button className=" text-3xl p-2 bg-primary text-white opacity-70 hover:opacity-100 rounded-full" onClick={handlePrevResume}>
                                <ChevronLeft size={32} />
                            </button>
                            <div className="flex flex-row gap-4">
                                <a target="_blank" href={`https://api.ctythat.com/${resumes[currentResumeIndex].file}`} download className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2">
                                    <Download size={20} /> Download
                                </a>
                                <button onClick={() => handleDelete(resumes[currentResumeIndex].id)} className="bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2">
                                    <Trash2 size={20} /> Delete
                                </button>
                            </div>

                            <button className="text-3xl p-2 bg-primary text-white opacity-70 hover:opacity-100 rounded-full" onClick={handleNextResume}>
                                <ChevronRight size={32} />
                            </button>
                        </div>
                        {resumeImages[resumes[currentResumeIndex].id] ? (
                            resumeImages[resumes[currentResumeIndex].id].map((imgSrc, index) => (
                                <img key={index} src={imgSrc} alt={`Page ${index + 1}`} className="w-full h-auto" />
                            ))
                        ) : (
                            <p className="text-gray-500">Loading preview...</p>
                        )}

                    </div>


                </div>
            )}



{isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg font-bold mb-4">Upload Resume</h2>
                        <input
                            type="file"
                            accept=".pdf"
                            multiple
                            onChange={handleFileChange}
                            className="mb-4"
                        />
                        <div className="flex justify-end space-x-2">
                            <button className="bg-gray-300 px-4 py-2 rounded-md" onClick={() => setIsModalOpen(false)}>Cancel</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleUpload} disabled={selectedFiles.length === 0}>Upload</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResumeSection;