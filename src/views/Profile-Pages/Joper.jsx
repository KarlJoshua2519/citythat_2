import React, { useState, useEffect } from 'react';
import coverphoto from '../../assets/images/Plumb-Eng.jpg';
import avatar from '../../assets/images/joper.jpg';
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import xlogo from '../../assets/images/x-icon.svg'
import linkedin from '../../assets/images/linkedin.svg'
import '../App.css'
import Album from '../../assets/Album/Album';
import luis from '../../assets/images/luis.jpg'
import janela from '../../assets/images/woman.png'
import jonash from '../../assets/images/jonash.jpg'
import plumberavatar from '../../assets/images/top-plumber.png'
import jbresume from '../../assets/PDF/JB-Resume.pdf'
import resume1 from '../../assets/images/Resume-images/joper_page-1.jpg'
import resume2 from '../../assets/images/Resume-images/joper_page-2.jpg'
import resume3 from '../../assets/images/Resume-images/joper_page-3.jpg'
import resume4 from '../../assets/images/Resume-images/joper_page-4.jpg'
import resume5 from '../../assets/images/Resume-images/joper_page-5.jpg'
import resume6 from '../../assets/images/Resume-images/joper_page-6.jpg'
import resume7 from '../../assets/images/Resume-images/joper_page-7.jpg'
import resume8 from '../../assets/images/Resume-images/joper_page-8.jpg'
import resume9 from '../../assets/images/Resume-images/joper_page-9.jpg'
import resumepdf from '../../assets/PDF/joper-resume.pdf'
import EngineerDashboard from '../../assets/Components/EngineerDashboard';
import ToggleSwitch from '../../assets/Components/ToggleSwitch';



const teamMembers = [
    {
        name: "Luis Jimenez",
        role: "(Role Name)",
        location: "Los Angeles",
        image: luis,
        bgColor: "bg-health",
        link:"/luis"
    },
    {
        name: "Janela Pangan",
        role: "Cybersecurity",
        location: "Toronto, Canada",
        image: janela,
        bgColor: "bg-music",
        link:"/janela"
    },
    {
        name: "Jonash Bundalian",
        role: "(Role Name)",
        location: "Los Angeles",
        image: jonash,
        bgColor: "bg-food",
        link:"/jonash"
    },
    {
        name: "Emily Davis",
        role: "(Role Name)",
        location: "San Francisco",
        image: plumberavatar,
        bgColor: "bg-food"
    },
    {
        name: "Michael Johnson",
        role: "(Role Name)",
        location: "Miami",
        image: plumberavatar,
        bgColor: "bg-justice"
    },
    {
        name: "Jessica Williams",
        role: "(Role Name)",
        location: "Austin",
        image: plumberavatar,
        bgColor: "bg-houseservice"
    },
    {
        name: "David Brown",
        role: "(Role Name)",
        location: "Seattle",
        image: plumberavatar,
        bgColor: "bg-merchant"
    },

];

const Joper = () => {

    const [activeSection, setActiveSection] = useState('newsFeed');
    const [isAnimating, setIsAnimating] = useState(false);
    const [activeResumes, setActiveResumes] = useState([resume1, resume2, resume3, resume4, resume5, resume6, resume7
        , resume8, resume9
    ]);
    const [resumeNames, setResumeNames] = useState({
        resume1: 'Resume 1',

    });


    const handleNavClick = (section) => {
        if (section !== activeSection && !isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setActiveSection(section);
                setIsAnimating(false);
            }, 500);
        }
    };




    const [editingResume, setEditingResume] = useState(null);
    const [newName, setNewName] = useState('');


    const resumes = {
        resume1: {
            files: [resume1, resume2, resume3, resume4, resume5, resume6, resume7
                , resume8, resume9],
        }

    };


    const handleResumeClick = (key) => {
        setActiveResumes(resumes[key].files);
    };


    const handleNameChange = (key) => {
        if (newName.trim()) {
            setResumeNames({
                ...resumeNames,
                [key]: newName,
            });
        }
        setEditingResume(null);
        setNewName('');
    };


    const handleDoubleClick = (key) => {
        setEditingResume(key);
        setNewName(resumeNames[key]);
    };

    const renderBodyContent = () => {

        switch (activeSection) {
            case 'newsFeed':
                return (
                    <div className="body-content">
                        <div className="px-20 my-10">
                            <p className="text-lg text-justify font-medium lato tracking-wide leading-relaxed">
                                Highly skilled and detail-oriented Plumbing Engineer with experience in
                                the design, installation, and maintenance of complex plumbing systems for
                                residential, commercial, and industrial buildings. Expertise in creating
                                detailed technical drawings and specifications using AutoCAD and other
                                industry-standard software. Proven track record in overseeing all phases
                                of plumbing projects, from initial concept through to final implementation,
                                while ensuring compliance with local and national building codes and regulations.
                                Well-versed in water distribution, drainage, and waste management systems,
                                as well as fire protection systems, stormwater management, and sustainable
                                plumbing practices. Adept at conducting site inspections, preparing cost
                                estimates, and performing system performance evaluations to troubleshoot and
                                optimize efficiency.</p>
                        </div>
                        <h1 className="w-full bg-[#666666] text-white text-center text-3xl p-4 font-bold">PORTFOLIO</h1>
                        <div class="grid auto-rows-[70px] mx-5 max-w-full overflow-hidden grid-cols-[repeat(auto-fill,minmax(20%,1fr))] gap-2 my-10">
                            <a class="flex items-end justify-center h-full bg-red cursor-pointer rounded-lg transition-all duration-300 ease-in-out filter hover:brightness-[40%] row-span-2 bg-[url('https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/uploads/qna_career_path/plumbing-engineer-plumbing-engineer.jpg=ws1280x960')] bg-cover bg-center" href="#"></a>
                            <a class="flex items-end justify-center h-full bg-red cursor-pointer rounded-lg transition-all duration-300 ease-in-out filter hover:brightness-[40%] row-span-4 bg-[url('https://images.ctfassets.net/0zf018k7kh66/1ISlq4d7JUN0kBgdeTEHwK/03f5ab459d2d128222d9f3635a36c2c9/Plumbing_Engineer.jpeg?w=1200&h=630&fl=progressive&q=100&fm=jpg')] bg-cover bg-center" href="#"></a>
                            <a class="flex items-end justify-center h-full bg-red cursor-pointer rounded-lg transition-all duration-300 ease-in-out filter hover:brightness-[40%] row-span-2 bg-[url('https://budlong.com/wp-content/uploads/2023/11/plumbing-engineering.jpg')] bg-cover bg-center" href="#"></a>
                            <a class="flex items-end justify-center h-full bg-red cursor-pointer rounded-lg transition-all duration-300 ease-in-out filter hover:brightness-[40%] row-span-3 bg-[url('https://static.wixstatic.com/media/802d41_bdc1e73c270643b3812fd8aec4848bab~mv2.jpg/v1/fill/w_900,h_600,al_c,q_85/802d41_bdc1e73c270643b3812fd8aec4848bab~mv2.jpg')] bg-cover bg-center" href="#"></a>
                            <a class="flex items-end justify-center h-full bg-red cursor-pointer rounded-lg transition-all duration-300 ease-in-out filter hover:brightness-[40%] row-span-4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE67fld3-w5jyoE69zuh41LNB-bbRSR3tK_g&s')] bg-cover bg-center" href="#"></a>
                            <a class="flex items-end justify-center h-full bg-red cursor-pointer rounded-lg transition-all duration-300 ease-in-out filter hover:brightness-[40%] row-span-3 bg-[url('https://nama-group.com/wp-content/uploads/2021/12/plum-1200-1.jpg')] bg-cover bg-center" href="#"></a>
                            <a class="flex items-end justify-center h-full bg-red cursor-pointer rounded-lg transition-all duration-300 ease-in-out filter hover:brightness-[40%] row-span-2 bg-[url('https://vivatraining.co.uk/wp-content/uploads/2020/01/Difference-Between-Plumber-and-Heating-Engineer.jpg')] bg-cover bg-center" href="#"></a>
                            <a class="flex items-end justify-center h-full bg-red cursor-pointer rounded-lg transition-all duration-300 ease-in-out filter hover:brightness-[40%] row-span-3 bg-[url('https://www.phcppros.com/ext/resources/PE/May-2020/pe05_powers.jpg?height=635&t=1588601492&width=1200')] bg-cover bg-center" href="#"></a>
                            <a class="flex items-end justify-center h-full bg-red cursor-pointer rounded-lg transition-all duration-300 ease-in-out filter hover:brightness-[40%] row-span-4 bg-[url('https://i0.wp.com/gdiengdesign.com/wp-content/uploads/2023/03/reading-instruction-1.jpg?fit=1024%2C683&ssl=1')] bg-cover bg-center" href="#"></a>
                            <a class="flex items-end justify-center h-full bg-red cursor-pointer rounded-lg transition-all duration-300 ease-in-out filter hover:brightness-[40%] row-span-2 bg-[url('https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/uploads/qna_career_path/plumbing-engineer-plumbing-engineer.jpg=ws1280x960')] bg-cover bg-center" href="#"></a>
                            <a class="flex items-end justify-center h-full bg-red cursor-pointer rounded-lg transition-all duration-300 ease-in-out filter hover:brightness-[40%] row-span-3 bg-[url('https://www.parker-arntz.com/wp-content/uploads/2019/01/mechanical-engineering-plumbing-hvac-greenville-mi.jpg')] bg-cover bg-center" href="#"></a>
                            <a class="flex items-end justify-center h-full bg-red cursor-pointer rounded-lg transition-all duration-300 ease-in-out filter hover:brightness-[40%] row-span-2 bg-[url('https://nama-group.com/wp-content/uploads/2021/12/plum-1200-1.jpg')] bg-cover bg-center" href="#"></a>
                            <a class="flex items-end justify-center h-full bg-red cursor-pointer rounded-lg transition-all duration-300 ease-in-out filter hover:brightness-[40%] row-span-2 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYTTQzoWSqkMheY3qDMHIgF5IqSNGCHrfZrg&s')] bg-cover bg-center" href="#"></a>
                        </div>


                        <h1 className="text-[#666666] font-bold tracking-wide mt-10 mx-10 text-4xl">Albums</h1>
                        <Album />



                        <section className="w-full flex flex-col p-10">
                            <h1 className="text-3xl font-bold text-[#666666] tracking-wide">Word of Mouth</h1>

                            <div className="w-full grid grid-cols-3 gap-4 mt-10 flex-wrap">
                                {teamMembers.map((member, index) => (
                                    <a href=''
                                        key={index}
                                        className={`${member.bgColor} flex p-10 flex-col items-center justify-center`}
                                    >
                                        <img
                                            className="w-auto h-[10em] border-2 rounded-full border-white"
                                            src={member.image}
                                            alt={member.name}
                                        />
                                        <h1 className="text-xl font-bold lato mt-2 tracking-wide">
                                            {member.name}
                                        </h1>
                                        <h1 className="text-lg font-medium lato mt-2 tracking-wide">
                                            {member.role}
                                        </h1>
                                        <h1 className="text-lg font-medium lato mt-2 tracking-wide">
                                            {member.location}
                                        </h1>
                                    </a>
                                ))}
                            </div>

                        </section>

                    </div>
                );
            case 'dashboard':
                return (
                    <div>
                        <EngineerDashboard />
                    </div>
                );
            case 'resume':
                return (
                    <div className="relative w-full p-10 flex flex-col">
                        <a className="absolute right-10 w-[10em] px-4 py-2 bg-gray-700 text-center text-white" href={resumepdf} download>
                            <button type="button">
                                Download PDF
                            </button>
                        </a>
                        <ul className="w-full flex flex-row gap-6 mb-4">

                            {Object.keys(resumes).map((key) => (
                                <li key={key} className="flex items-center gap-2">
                                    <a className="font-bold cursor-pointer"
                                        onClick={() => handleResumeClick(key)}>
                                        {editingResume === key ? (

                                            <input
                                                type="text"
                                                value={newName}
                                                onChange={(event) => setNewName(event.target.value)}
                                                onBlur={() => handleNameChange(key)}
                                                className="font-bold border border-gray-300 p-1 rounded"
                                                onKeyPress={(event) => {
                                                    if (event.key === 'Enter') {
                                                        handleNameChange(key);
                                                    }
                                                }}
                                            />
                                        ) : (
                                            <span
                                                onDoubleClick={() => handleDoubleClick(key)} // Enable double-click to edit
                                                className="font-bold cursor-pointer"
                                            >
                                                {resumeNames[key]} {/* Display the current resume name */}
                                            </span>
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="w-full flex flex-wrap justify-center mt-6 gap-2">

                            {activeResumes.length > 0 ? (
                                activeResumes.map((resume, index) => (
                                    <img
                                        key={index}
                                        className="shadow-lg w-[45%] object-cover"
                                        src={resume}
                                        alt={`Active Resume ${index + 1}`}
                                    />
                                ))
                            ) : (
                                <p className="text-center">Select a resume to view.</p> // Message when no resumes are active
                            )}
                        </div>
                    </div>
                );
            case 'blog':
                return (
                    <div className="w-full h-screen p-6">
                        <h1 className="text-3xl text-center font-bold">Blog Section</h1>
                        {/* Add blog content here */}
                    </div>
                );
            default:
                return null;
        }
    };



    return (

        <div className="w-full h-auto flex flex-col mt-20">

            <img className="w-full h-[35em] object-cover" src={coverphoto} alt="" />
            <nav className="relative lato w-full bg-white py-4 px-10 border-b border-gray-800 flex flex-row items-center justify-between">
                <ul className="w-full flex flex-row items-center justify-center gap-32 mr-20">
                    <li><a className="cursor-pointer hover:text-white hover:bg-gray-600 p-2 rounded-xl" onClick={() => handleNavClick('newsFeed')}>News Feed</a></li>
                    <li><a className="cursor-pointer hover:text-white hover:bg-gray-600 p-2 rounded-xl" onClick={() => handleNavClick('dashboard')}>Dashboard</a></li>
                </ul>

                {/* Avatar centered in the navbar */}
                <img
                    className="absolute w-[14em] rounded-full border-primary border-4 object-cover h-auto"
                    src={avatar}
                    alt=""
                    style={{
                        left: '50%',
                        transform: 'translateX(-50%)',
                        translateY: '-50%'
                    }}
                />


                <ul className="w-full flex flex-row justify-center gap-32 ml-20">
                    <li><a className="cursor-pointer hover:text-white hover:bg-gray-600 p-2 rounded-xl" onClick={() => handleNavClick('resume')}>Resume</a></li>
                    <li><a className="cursor-pointer hover:text-white hover:bg-gray-600 p-2 rounded-xl" onClick={() => handleNavClick('blog')}>BLOG</a></li>
                </ul>
            </nav>

            <div className="flex flex-col w-full items-center mt-24">
                <h1 className="text-xl font-medium tracking-wide">Joper Tupas</h1>
                <div className="flex flex-row gap-3 mt-2">
                    <a ><img className="w-auto h-[1.6em] filter grayscale transition duration-300 hover:grayscale-0" src={facebook} alt="" /></a>
                    <a ><img className="w-auto h-[1.6em] filter grayscale transition duration-300 hover:grayscale-0" src={instagram} alt="" /></a>
                    <a><img className="w-auto h-[1.6em] filter grayscale transition duration-300 hover:grayscale-0" src={xlogo} alt="" /></a>
                    <a ><img className="w-auto h-[1.6em] filter grayscale transition duration-300 hover:grayscale-0" src={linkedin} alt="" /></a>
                </div>
            </div>



            <div className={`transition-opacity duration-500 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                {renderBodyContent()}
            </div>



        </div>
    );
}

export default Joper;
