import React, { useState, useEffect } from 'react';
import coverphoto from '../../assets/images/photo2.jpg';
import avatar from '../../assets/images/jonash.jpg';
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import xlogo from '../../assets/images/x-icon.svg'
import linkedin from '../../assets/images/linkedin.svg'
import '../App.css'
import Album from '../../assets/Album/Album';
import luis from '../../assets/images/luis.jpg'
import janela from '../../assets/images/woman.png'
import joper from '../../assets/images/joper.jpg'
import plumberavatar from '../../assets/images/top-plumber.png'
import resume1 from '../../assets/images/Resume-images/JB-Resume_page1.jpg'
import resume2 from '../../assets/images/Resume-images/JB-Resume_page2.jpg'
import resumepdf from '../../assets/PDF/JB-Resume.pdf'
import EngineerDashboard from '../../assets/Components/EngineerDashboard';
import ToggleSwitch from '../../assets/Components/ToggleSwitch';



const teamMembers = [
    {
        name: "Luis Jimenez",
        role: "(Role Name)",
        location: "Los Angeles",
        image: luis,
        bgColor: "bg-health",
        link: "/luis"
    },
    {
        name: "Janela Pangan",
        role: "Cybersecurity",
        location: "Toronto, Canada",
        image: janela,
        bgColor: "bg-music",
        link: "/luis"
    },
    {
        name: "Joper Tupas",
        role: "Plumbing Engineer",
        location: "789 Oak St. City",
        image: joper,
        bgColor: "bg-engr",
        link: "/joper"
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

const Jonash = () => {

    const [activeSection, setActiveSection] = useState('newsFeed');
    const [isAnimating, setIsAnimating] = useState(false);
    const [activeResumes, setActiveResumes] = useState([resume1, resume2]);
    const [resumeNames, setResumeNames] = useState({
        construction: 'Construction Resume',
        developer: 'Developer Resume',
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
        construction: {
            files: [resume1, resume2],
        },
        developer: {
            files: [resume1],
        },

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
                            <p className="text-lg text-justify font-medium lato tracking-wide leading-relaxed">A computer engineer who joined Breen Design Group in 2016.
                                He works with the Electrical department on low-voltage projects
                                and has extensive experience in network consulting and low-voltage
                                design, particularly for high-rise buildings, hospitals, commercial
                                properties, residential developments, and schools. He has been involved
                                in various aerospace projects around southern California and numerous
                                affordable housing projects over nearly a decade. In addition to his role
                                as a Low Voltage Designer, Jonash is also an in-house Solutions Cloud
                                Architect using Amazon Web Services and serves as a technology consultant
                                for Breen Design Group's clients. He has prior training in Cisco Technology
                                and holds a bachelor’s degree in computer engineering.</p>
                        </div>
                        <h1 className="w-full bg-[#666666] text-white text-center text-3xl p-4 font-bold">PORTFOLIO</h1>
                        <div className="g-content g-grid my-10">
                            <a medium className="g-tile short" href="#"></a>
                            <a className="g-tile tall" href="#"></a>
                            <a className="g-tile short " href="#"></a>
                            <a className="g-tile medium" href="#"></a>
                            <a className="g-tile tall" href="#"></a>
                            <a className="g-tile medium" href="#"></a>
                            <a className="g-tile short" href="#"></a>
                            <a className="g-tile medium" href="#"></a>
                            <a className="g-tile tall" href="#"></a>
                            <a className="g-tile short" href="#"></a>
                            <a className="g-tile medium" href="#"></a>
                            <a className="g-tile short" href="#"></a>
                            <a className="g-tile short" href="#"></a>
                        </div>

                        <h1 className="text-[#666666] font-bold tracking-wide mt-10 mx-10 text-4xl">Albums</h1>
                        <Album />
                        <section className="w-full flex flex-col p-10">
                            <h1 className="text-3xl font-bold text-[#666666] tracking-wide">Word of Mouth</h1>
                            <ToggleSwitch />
                            <div className="w-full grid grid-cols-3 gap-4 mt-10 flex-wrap">
                                {teamMembers.map((member, index) => (
                                    <a href={member.link}
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
                    <div className="w-full p-10 flex flex-col">
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
                                                onDoubleClick={() => handleDoubleClick(key)}
                                                className="font-bold cursor-pointer"
                                            >
                                                {resumeNames[key]}
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
                                <p className="text-center">Select a resume to view.</p>
                            )}
                        </div>
                    </div>
                );
            case 'blog':
                return (
                    <div className="w-full h-screen p-6">
                        <h1 className="text-3xl text-center font-bold">Blog Section</h1>

                    </div>
                );
            default:
                return null;
        }
    };



    return (

        <div className="w-full h-auto flex flex-col mt-20">

            <img className="w-full h-[35em] object-cover object-bottom" src={coverphoto} alt="" />
            <nav className="relative lato w-full bg-white py-4 px-10 border-b border-gray-800 flex flex-row items-center justify-between">
                <ul className="w-full flex flex-row items-center justify-center gap-32 mr-20">
                    <li><a className="cursor-pointer hover:text-white hover:bg-gray-600 p-2 rounded-xl" onClick={() => handleNavClick('newsFeed')}>News Feed</a></li>
                    <li><a className="cursor-pointer hover:text-white hover:bg-gray-600 p-2 rounded-xl" onClick={() => handleNavClick('dashboard')}>Dashboard</a></li>
                </ul>


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
                <h1 className="text-xl font-medium tracking-wide">Jonash Bundalian</h1>
                <div className="flex flex-row gap-3 mt-2">
                    <a href="https://www.facebook.com/profile.php?id=100063639608912&mibextid=LQQJ4d"
                        target="#"><img className="w-auto h-[1.6em] filter grayscale transition duration-300 hover:grayscale-0" src={facebook} alt="" /></a>
                    <a href="https://www.instagram.com/nashkatchum/" target="#"><img className="w-auto h-[1.6em] filter grayscale transition duration-300 hover:grayscale-0" src={instagram} alt="" /></a>
                    <a href="https://x.com/naaassshhyyyy?s=21&t=QJiRVZdtDixJw5-uyjborw"
                        target="#"><img className="w-auto h-[1.6em] filter grayscale transition duration-300 hover:grayscale-0" src={xlogo} alt="" /></a>
                    <a href="https://www.linkedin.com/in/jonash-bundalian"
                        target="#"><img className="w-auto h-[1.6em] filter grayscale transition duration-300 hover:grayscale-0" src={linkedin} alt="" /></a>
                </div>
            </div>



            <div className={`transition-opacity duration-500 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                {renderBodyContent()}
            </div>



        </div>
    );
}

export default Jonash;
