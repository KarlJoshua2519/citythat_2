import React, { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../../views/App.css';
import left from '../images/arrowleft.png';
import right from '../images/arrowright.png';
import addimg from '../images/add.svg';

const Album = () => {
    const albumRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [newAlbum, setNewAlbum] = useState({ title: '', description: '', cover: '' });

    const albums = [
        {
            id: 1,
            title: "Album 1",
            description: "Album 1 Description",
            photos: 5,
            cover: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Album 2",
            description: "Album 2 Description",
            photos: 8,
            cover: "https://images.unsplash.com/photo-1521324515894-017df5725518?q=80&w=600&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Album 3",
            description: "Album 3 Description",
            photos: 12,
            cover: "https://images.unsplash.com/photo-1509453721491-c3af5961df76?q=80&w=600&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Album 4",
            description: "Album 4 Description",
            photos: 6,
            cover: "https://images.unsplash.com/photo-1593877499575-9d072e63d502?q=80&w=600&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Album 4",
            description: "Album 4 Description",
            photos: 6,
            cover: "https://images.unsplash.com/photo-1593877499575-9d072e63d502?q=80&w=600&auto=format&fit=crop"
        }
    ];

    useEffect(() => {
        const handleScrollUpdate = () => {
            const container = albumRef.current;
            setShowLeftArrow(container.scrollLeft > 0);
            setShowRightArrow(
                container.scrollWidth > container.clientWidth + container.scrollLeft
            );
        };

        handleScrollUpdate();
        albumRef.current.addEventListener("scroll", handleScrollUpdate);
    }, []);

    const handleScroll = (direction) => {
        const container = albumRef.current;
        const scrollAmount = 300;
        if (direction === "left") {
            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else if (direction === "right") {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
        setShowLeftArrow(container.scrollLeft > 0);
        setShowRightArrow(
            container.scrollWidth > container.clientWidth + container.scrollLeft
        );
    };

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setNewAlbum({ title: '', description: '', cover: '' }); // Reset the form
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAlbum((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically save the new album to a database or state
        console.log("New Album:", newAlbum);
        handleCloseModal();
    };

    return (
        <section className="relative flex items-center overflow-hidden mx-5">
            {showLeftArrow && (
                <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white rounded-full p-2 z-10 text-xl"
                    onClick={() => handleScroll("left")}
                >
                    <img
                        className="flex justify-center items-center max-w-[25px]"
                        src={left}
                        alt="Left Arrow"
                    />
                </button>
            )}
            <div
                className="flex overflow-x-scroll scroll-smooth gap-10 py-8 scroll-snap-x-mandatory w-[calc(100%-60px)] hide-scrollbar"
                ref={albumRef}
            >
                {albums.map((album) => (
                    <Link 
                        key={album.id} 
                        to={`/album/${album.id}`} 
                        className="flex flex-col items-center w-72 border border-gray-300 rounded-lg overflow-hidden bg-gray-100 snap-start shrink-0"
                    >
                        <img
                            className="w-full h-36 object-cover"
                            src={album.cover}
                            alt={`${album.title} Cover`}
                        />
                        <div className="flex flex-col items-center p-4">
                            <h2 className="text-xl text-gray-600 m-0">{album.title}</h2>
                            <p className="text-sm text-gray-500 my-2 text-center">{album.description}</p>
                            <p className="text-xs text-gray-400">{album.photos} Photos</p>
                        </div>
                    </Link>
                ))}

                <button onClick={handleOpenModal} className="cursor-pointer flex flex-col items-center w-72 justify-center border border-dashed border-gray-400 rounded-lg overflow-hidden bg-gray-100 snap-start shrink-0">
                    <img className="w-auto h-[3.5em]" src={addimg} alt="" />
                    <h1 className="text-[#666666] font-medium text-lg">Add Album</h1>
                </button>
            </div>
            {showRightArrow && (
                <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white rounded-full p-2 z-10 text-xl"
                    onClick={() => handleScroll("right")}
                >
                    <img
                        className="flex justify-center items-center max-w-[25px]"
                        src={right}
                        alt="Right Arrow"
                    />
                </button>
            )}

            {/* Modal for adding a new album */}
            {modalVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                    <div className="bg-white rounded-lg p-6 w-80">
                        <h2 className="text-lg font-semibold mb-4">Add New Album</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1" htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={newAlbum.title}
                                    onChange={handleInputChange}
                                    required
                                    className="border border-gray-300 rounded-md w-full p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1" htmlFor="description">Description</label>
                                <textarea
                                    name="description"
                                    value={newAlbum.description}
                                    onChange={handleInputChange}
                                    required
                                    className="border border-gray-300 rounded-md w-full p-2"
                                />
                            </div>
                          
                            <div className="flex justify-between">
                                <button type="button" onClick={handleCloseModal} className="bg-gray-300 rounded-md px-4 py-2">Cancel</button>
                                <button type="submit" className="bg-orange-600 text-white rounded-md px-4 py-2">Add Album</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Album;
