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
                <h2 className="modal-title">Influencer Application Form</h2>
                <form className="application-form">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" placeholder="Your full name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="Your email" required />
                    </div>
                    <div>
                        <label htmlFor="category">Category:</label>
                        <select id="category" required>
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
                        <label htmlFor="followers">Followers:</label>
                        <input type="number" id="followers" placeholder="Number of followers" required />
                    </div>
                    <div>
                        <label htmlFor="bio">About You:</label>
                        <textarea id="bio" placeholder="Tell us about yourself" rows="4" required></textarea>
                    </div>
                    <div>
                        <label htmlFor="instagram">Instagram URL:</label>
                        <input type="url" id="instagram" placeholder="Link to your Instagram profile" />
                    </div>
                    <div>
                        <label htmlFor="youtube">YouTube URL:</label>
                        <input type="url" id="youtube" placeholder="Link to your YouTube channel" />
                    </div>
                    <div>
                        <label htmlFor="profile-picture">Profile Picture:</label>
                        <input type="file" id="profile-picture" accept="image/*" required />
                    </div>
                  
                    <button type="submit">Submit Application</button>
                </form>
            </Modal>

        </div>
    );
};

export default Influencer;
