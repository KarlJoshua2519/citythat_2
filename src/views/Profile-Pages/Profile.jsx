import React, { useState, useEffect, useRef } from 'react';
import coverphoto from '../../assets/images/photo2.jpg';
import EngineerDashboard from '../../assets/Components/EngineerDashboard';
import ResumeSection from '../../assets/Components/ResumeSection';
import editbtn from '../../assets/images/editbtn.svg'
import addimg from '../../assets/images/add.svg';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { ProfileJs } from '../../assets/js/ProfileJs';
import uploadphoto from '../../assets/images/uploadphoto.svg'


const Profile = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [activeSection, setActiveSection] = useState('newsFeed');
    const {

        user,
        isModalOpen,
        isModalUploadOpen,
        isCropModalOpen,
        editedProfile,
        cropperRef,
        selectedImage,
        selectedFile,
        handleCoverPhotoUpload,
        handleCloseModal,
       
        handleFileChange,
        handleInputChange,
        handleUploadClick,
        handleCropSave,
        handleSave,
        openModal,
        closeModal
    } = ProfileJs();

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
                            <p className="text-lg text-justify lato tracking-wide leading-relaxed">
                                {!user ? 'Loading description...' : user.description ? user.description : <span className="text-gray-600 opacity-50">No Description</span>}
                            </p>

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
                    <ResumeSection user={user} />

                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full h-auto flex flex-col mt-20">
            <div className="relative w-full flex">

                <img
                    className="w-full h-[80vh] brightness-[80%] object-cover"
                    src={user?.cover ? `https://api.ctythat.com/${user.cover}?t=${new Date().getTime()}` : coverphoto}
                    alt="Cover"
                />



                <div className="absolute z-40 bottom-2 right-2 opacity-80">
                    <button
                        className="bg-primary text-white text-sm w-[4em] h-[4em] opacity-80 hover:opacity-100 rounded-full font-medium uppercase"
                        onClick={handleUploadClick}
                    >
                       <img className=" w-[5em]" src={uploadphoto} alt="Upload Cover Photo" />
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
                                    onClick={handleCoverPhotoUpload}  // <-- Call the function here
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


                {user && (
                    <img
                        className="absolute bg-white w-[14em] rounded-full border-primary border-4 object-cover h-auto"
                        src={`https://api.ctythat.com/${user.image}`}
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

            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-[70em] shadow-lg relative">
                        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-2">First Name:</label>
                                <input type="text" name="firstName" value={editedProfile.firstName} onChange={handleInputChange} className="w-full p-2 border rounded-md" />
                            </div>
                            <div>
                                <label className="block mb-2">Last Name:</label>
                                <input type="text" name="lastName" value={editedProfile.lastName} onChange={handleInputChange} className="w-full p-2 border rounded-md" />
                            </div>
                            <div className="col-span-2">
                                <label className="block mb-2">Description:</label>
                                <textarea name="description" rows="5" value={editedProfile.description} onChange={handleInputChange} className="w-full p-2 border rounded-md" />
                            </div>
                            <div>
                                <label className="block mb-2">Profile Picture:</label>
                                <input type="file" name="profilePicture" accept="image/*" onChange={handleFileChange} className="w-full p-2 border rounded-md" />
                            </div>
                            <div>
                                <label className="block mb-2">Resume:</label>
                                <input type="file" name="resume" accept="application/pdf" onChange={handleFileChange} className="w-full p-2 border rounded-md" />
                            </div>

                        </div>
                        <div className="flex justify-end mt-6 gap-4">
                            <button onClick={closeModal} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
                            <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
                        </div>
                    </div>
                </div>
            )}


            {isCropModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold mb-4">Crop Your Profile Picture</h2>
                        <Cropper
                            ref={cropperRef}
                            src={selectedImage}
                            style={{ height: 400, width: 500 }}
                            aspectRatio={1}
                            viewMode={1}
                            guides={false}
                            minCropBoxWidth={200}
                            minCropBoxHeight={200}
                            background={false}
                            responsive={true}
                            autoCropArea={1}
                            checkOrientation={false}
                        />
                        <div className="flex justify-end gap-2 mt-4">
                            <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setIsCropModalOpen(false)}>
                                Cancel
                            </button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleCropSave}>
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
