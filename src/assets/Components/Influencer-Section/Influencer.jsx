import React, { useRef, useState } from 'react';
import './Influencer.css';
import avatarman from "../../images/top-plumber.png";
import avatarwoman from "../../images/woman.png";
import joper from '../../images/joper.jpg';
import Modal from './Modal';

const Influencer = () => {
    const influencers = [
        { name: "Influencer 1", followers: "1M", category: "Lifestyle", avatar: avatarman },
        { name: "Influencer 2", followers: "850K", category: "Fitness", avatar: avatarwoman },
        { name: "Joper Tupas", followers: "3.5M", category: "Tech", avatar: joper },
        { name: "Influencer 4", followers: "600K", category: "Travel", avatar: avatarwoman },
        { name: "Influencer 5", followers: "900K", category: "Food", avatar: avatarman },
        { name: "Influencer 6", followers: "1M", category: "Tech", avatar: avatarman },
        { name: "Influencer 7", followers: "750K", category: "Beauty", avatar: avatarman },
        { name: "Influencer 8", followers: "1.1M", category: "Gaming", avatar: avatarwoman },
        { name: "Influencer 9", followers: "500K", category: "Music", avatar: avatarwoman },
        { name: "Influencer 10", followers: "1.3M", category: "Lifestyle", avatar: avatarwoman },
        { name: "Influencer 11", followers: "650K", category: "DIY", avatar: avatarman },
        { name: "Influencer 12", followers: "800K", category: "Health", avatar: avatarman },
        { name: "Influencer 13", followers: "900K", category: "Photography", avatar: avatarman },
        { name: "Influencer 14", followers: "700K", category: "Books", avatar: avatarman },
        { name: "Influencer 15", followers: "950K", category: "Education", avatar: avatarman }
    ];


    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseLeaveOrUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1;
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="influencer-container">
            <h2 className="main-title m-title">Leading Voices</h2>
            <p className="main-title m-subtitle">Meet the Influencers Who Matter</p>
            <div className="selector-container">
                <label htmlFor="location">Select Zip Code or City:</label>
                <select id="location" className="location-select">
                    {["New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", "Phoenix, AZ"].map((location, index) => (
                        <option key={index} value={location}>
                            {location}
                        </option>
                    ))}
                </select>
            </div>
            <div className="top-influencers">
                <h2>Top 15 Influencers</h2>
                <div
                    className="influencer-carousel"
                    ref={carouselRef}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseLeaveOrUp}
                    onMouseLeave={handleMouseLeaveOrUp}
                    onMouseMove={handleMouseMove}
                >
                    <div className="influencer-carousel-inner">
                        {influencers.map((influencer, index) => (
                            <div key={index} className="influencer-card">
                                <img src={influencer.avatar} alt={`${influencer.name} Avatar`} className="influencer-avatar" />
                                <h3>{influencer.name}</h3>
                                <p className="followers">{influencer.followers} Followers</p>
                                <p className="category">{influencer.category}</p>
                            </div>
                        ))}

                        {influencers.map((influencer, index) => (
                            <div key={index + 15} className="influencer-card">
                                <img src={influencer.avatar} alt={`${influencer.name} Avatar`} className="influencer-avatar" />
                                <h3>{influencer.name}</h3>
                                <p className="followers">{influencer.followers} Followers</p>
                                <p className="category">{influencer.category}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="apply-container">
                <button className="apply-btn" onClick={() => setIsModalOpen(true)}>
                    Become an Influencer
                </button>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-4xl font-bold mb-8 text-primary text-center">Influencer Application Form</h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-800">Name:</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your full name"
                                required
                                className="mt-1 block w-full border-2 border-go-primary rounded-md shadow-sm focus:ring-2 focus:ring-primary p-3 transition duration-200 ease-in-out hover:border-primary"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">Email:</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your email"
                                required
                                className="mt-1 block w-full border-2 border-primary rounded-md shadow-sm focus:ring-2 focus:ring-primary p-3 transition duration-200 ease-in-out hover:border-primary"
                            />
                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <label htmlFor="category" className="block text-sm font-semibold text-gray-800">Category:</label>
                            <select
                                id="category"
                                required
                                className="mt-1 block w-full border-2 border-primary rounded-md shadow-sm focus:ring-2 focus:ring-primary p-3 transition duration-200 ease-in-out hover:border-primary"
                            >
                                <option value="">Select your category</option>
                                <option value="Lifestyle">Lifestyle</option>
                                <option value="Fitness">Fitness</option>
                                <option value="Tech">Tech</option>
                                <option value="Travel">Travel</option>
                                <option value="Beauty">Beauty</option>
                                <option value="Gaming">Gaming</option>
                                <option value="Music">Music</option>
                                <option value="Food">Food</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="followers" className="block text-sm font-semibold text-gray-800">Followers:</label>
                            <input
                                type="number"
                                id="followers"
                                placeholder="Number of followers"
                                required
                                className="mt-1 block w-full border-2 border-primary rounded-md shadow-sm focus:ring-2 focus:ring-primary p-3 transition duration-200 ease-in-out hover:border-primary"
                            />
                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <label htmlFor="bio" className="block text-sm font-semibold text-gray-800">About You:</label>
                            <textarea
                                id="bio"
                                placeholder="Tell us about yourself"
                                rows="4"
                                required
                                className="mt-1 block w-full border-2 border-primary rounded-md shadow-sm focus:ring-2 focus:ring-primary p-3 transition duration-200 ease-in-out hover:border-primary"
                            ></textarea>
                        </div>

                        <div>
                            <label htmlFor="instagram" className="block text-sm font-semibold text-gray-800">Instagram URL:</label>
                            <input
                                type="url"
                                id="instagram"
                                placeholder="Link to your Instagram profile"
                                className="mt-1 block w-full border-2 border-primary rounded-md shadow-sm focus:ring-2 focus:ring-primary p-3 transition duration-200 ease-in-out hover:border-primary"
                            />
                        </div>

                        <div>
                            <label htmlFor="youtube" className="block text-sm font-semibold text-gray-800">YouTube URL:</label>
                            <input
                                type="url"
                                id="youtube"
                                placeholder="Link to your YouTube channel"
                                className="mt-1 block w-full border-2 border-primary rounded-md shadow-sm focus:ring-2 focus:ring-primary p-3 transition duration-200 ease-in-out hover:border-primary"
                            />
                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <label htmlFor="profile-picture" className="block text-sm font-semibold text-gray-800">Profile Picture:</label>
                            <input
                                type="file"
                                id="profile-picture"
                                accept="image/*"
                                required
                                className="mt-1 block w-full border-2 border-primary rounded-md shadow-sm focus:ring-2 focus:ring-primary p-3 transition duration-200 ease-in-out hover:border-primary"
                            />
                        </div>

                        <button
                            type="submit"
                            className="col-span-1 md:col-span-2 mt-4 w-full bg-primary text-white font-bold py-3 rounded-md shadow-md hover:bg-primary transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            Submit Application
                        </button>
                    </form>
                </div>

            </Modal>

        </div>
    );
};

export default Influencer;
