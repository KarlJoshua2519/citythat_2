import React, { useState, useEffect } from 'react';
import resumepdf from '../../assets/PDF/JB-Resume.pdf';
import resume1 from '../../assets/images/Resume-images/JB-Resume_page1.jpg';
import resume2 from '../../assets/images/Resume-images/JB-Resume_page2.jpg';

const ResumeSection = () => {
    const [activeResumes, setActiveResumes] = useState([resume1, resume2]);
    return (
        <div className="w-full p-10 flex flex-col">
            <a className="absolute right-10 w-[10em] px-4 py-2 bg-gray-700 text-center text-white" href={resumepdf} download>
                <button type="button">Download PDF</button>
            </a>
            <div className="w-full flex flex-wrap justify-center mt-6 gap-2">
                {activeResumes.map((resume, index) => (
                    <img
                        key={index}
                        className="shadow-lg w-[45%] object-cover"
                        src={resume}
                        alt={`Active Resume ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default ResumeSection
