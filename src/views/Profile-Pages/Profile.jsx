import React, { useState, useEffect } from 'react';
import coverphoto from '../../assets/images/photo2.jpg';

import axios from 'axios';

import resume1 from '../../assets/images/Resume-images/JB-Resume_page1.jpg';
import resume2 from '../../assets/images/Resume-images/JB-Resume_page2.jpg';
import resumepdf from '../../assets/PDF/JB-Resume.pdf';
import EngineerDashboard from '../../assets/Components/EngineerDashboard';
import ToggleSwitch from '../../assets/Components/ToggleSwitch';
import luis from '../../assets/images/luis.jpg'
import janela from '../../assets/images/woman.png'
import joper from '../../assets/images/joper.jpg'
import plumberavatar from '../../assets/images/top-plumber.png'
import editbtn from '../../assets/images/editbtn.svg'
import addimg from '../../assets/images/add.svg';

const Profile = () => {
    const [activeSection, setActiveSection] = useState('newsFeed');
    const [isAnimating, setIsAnimating] = useState(false);
    const [user, setUser] = useState(null);
    const [activeResumes, setActiveResumes] = useState([resume1, resume2]);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
    const [editedName, setEditedName] = useState(''); // State for edited name
    const [isModalUploadOpen, setIsModalUploadOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleUploadClick = () => {
        setIsModalUploadOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalUploadOpen(false);
        setSelectedFile(null); // Reset selected file on cancel
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file); // Store the selected file
        }
    };

    const handleUploadSave = () => {
        if (selectedFile) {
            console.log("Saving file:", selectedFile);

        } else {
            alert("Please select a file before saving.");
        }
        setIsModalOpen(false);
    };

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            axios
                .get('http://10.113.231.140:5019/api/Auth', {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((response) => {
                    setUser(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSave = () => {


        closeModal();
    };

    const handleNavClick = (section) => {
        if (section !== activeSection && !isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setActiveSection(section);
                setIsAnimating(false);
            }, 500);
        }
    };

    const renderBodyContent = () => {
        switch (activeSection) {
            case 'newsFeed':
                return (
                    <div className="body-content flex flex-col items-center ">
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

                        <div className="flex h-screen flex-col w-full items-center gap-5">
                            <div className="w-[90%]">
                                <h1 className="text-[#666666] font-bold tracking-wide mt-10                                                                                                                                                                                                                             text-4xl">Albums</h1>
                                <button className="mt-6 cursor-pointer flex flex-col items-center w-72 h-72 justify-center border border-dashed border-gray-400 rounded-lg overflow-hidden bg-gray-100 snap-start shrink-0">
                                    <img className="w-auto h-[3.5em]" src={addimg} alt="" />
                                    <h1 className="text-[#666666] font-medium text-lg">Add Album</h1>
                                </button>
                            </div>

                        </div>

                    </div>
                );
            case 'dashboard':
                return <EngineerDashboard />;
            case 'resume':
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
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full h-auto flex flex-col mt-20">
            <div className="relative w-full flex">
                <img
                    className="w-full h-[35em] object-cover object-bottom"
                    src={coverphoto}
                    alt="Cover"
                />
                <div className="absolute z-50 bottom-2 right-0 opacity-80">
                    <button
                        className="rounded-md bg-primary text-white text-sm px-6 py-2 font-medium uppercase"
                        onClick={handleUploadClick}
                    >
                        Upload Cover Photo
                    </button>
                </div>

                {isModalUploadOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-md p-6 w-[90%] max-w-md">
                            <h2 className="text-lg font-semibold mb-4">Upload Cover Photo</h2>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="mb-4"
                            />
                            {selectedFile && (
                                <p className="text-sm text-gray-600 mb-4">
                                    Selected file: {selectedFile.name}
                                </p>
                            )}
                            <div className="flex justify-end gap-4">
                                <button
                                    className="rounded-md bg-red-500 text-white px-4 py-2"
                                    onClick={handleCloseModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="rounded-md bg-green-500 text-white px-4 py-2"
                                    onClick={handleSave}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>


            <nav className="relative lato w-full bg-white py-4 px-10 border-b border-gray-800 flex flex-row items-center justify-between">
                <ul className="w-full flex flex-row items-center justify-center gap-32 mr-20">
                    <li>
                        <a
                            className="cursor-pointer hover:text-white hover:bg-gray-600 p-2 rounded-xl"
                            onClick={() => handleNavClick('newsFeed')}
                        >
                            News Feed
                        </a>
                    </li>
                    <li>
                        <a
                            className="cursor-pointer hover:text-white hover:bg-gray-600 p-2 rounded-xl"
                            onClick={() => handleNavClick('dashboard')}
                        >
                            Dashboard
                        </a>
                    </li>
                </ul>

                {/* Profile Image */}
                {user && (
                    <img
                        className="absolute bg-white w-[14em] rounded-full border-primary border-4 object-cover h-auto"
                        src={`http://10.113.231.140:5019/${user.image}`}
                        alt="Profile"
                        style={{ left: '50%', transform: 'translateX(-50%)' }}
                    />
                )}

                <ul className="w-full flex flex-row justify-center gap-32 ml-20">
                    <li>
                        <a
                            className="cursor-pointer hover:text-white hover:bg-gray-600 p-2 rounded-xl"
                            onClick={() => handleNavClick('resume')}
                        >
                            Resume
                        </a>
                    </li>
                    <li>
                        <a
                            className="cursor-pointer hover:text-white hover:bg-gray-600 p-2 rounded-xl"
                            onClick={() => handleNavClick('blog')}
                        >
                            BLOG
                        </a>
                    </li>
                </ul>
            </nav>


            <div className="flex flex-col w-full items-center mt-24">
                <div className="flex flex-row gap-4 items-center">
                    <h1 className="text-xl font-medium tracking-wide">
                        {user ? `${user.firstName} ${user.lastName}` : 'Loading...'}
                    </h1>
                    <a href="#" onClick={openModal}>
                        <img
                            className="w-[1.6em] filter grayscale transition duration-300 hover:grayscale-0"
                            src={editbtn}
                            alt="Edit"
                        />
                    </a>
                </div>
            </div>




            <div className={`transition-opacity duration-500 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                {renderBodyContent()}
            </div>



            {/* Modal Component */}
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-[70em] shadow-lg relative">
                        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>

                        {/* Input Field */}

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-2 text-gray-700 font-medium">First Name:</label>
                                <input
                                    type="text"
                                    value={editedName}
                                    onChange={(e) => setEditedName(e.target.value)}
                                    className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                />

                            </div>
                            <div>
                                <label className="block mb-2 text-gray-700 font-medium">Last Name:</label>
                                <input
                                    type="text"
                                    value={editedName}
                                    onChange={(e) => setEditedName(e.target.value)}
                                    className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                />

                            </div>


                            <div className="col-span-2">
                                <label className="block mb-2 text-gray-700 font-medium">Description:</label>
                                <textarea

                                    rows="5"
                                    className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
                                    placeholder="Enter your description here..."
                                />



                            </div>



                            <div className="">
                                <label className="block mb-2 text-gray-700 font-medium">Profile Picture:</label>
                                <input

                                    type="file"
                                    accept="image/*"

                                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                                />




                            </div>


                            <div className="">
                                <label className="block mb-2 text-gray-700 font-medium">Resume:</label>
                                <input

                                    type="file"
                                    accept="image/*"

                                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                                />




                            </div>




                        </div>



                        {/* Buttons */}
                        <div className="flex justify-end mt-6 gap-4">
                            <button
                                onClick={closeModal}
                                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>



    );
};

export default Profile;
