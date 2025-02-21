import React, { useState, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';
import addimg from '../../assets/images/add.svg';

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const authToken = localStorage.getItem('authToken');
    const [photos, setPhotos] = useState([]);


    useEffect(() => {
        fetchAlbums();
    }, []);

    const fetchAlbums = async () => {
        try {
            const response = await fetch('https://api.ctythat.com/api/User/GetAlbum', {
                headers: { Authorization: `Bearer ${authToken}` },
            });
    
            if (!response.ok) throw new Error(`Failed to fetch albums: ${response.status}`);
    
            const data = await response.json();
    
            // Set the latest photo by sorting album items by dateCreated
            const updatedAlbums = data.map(album => {
                const sortedItems = album.albumItems.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));
                return {
                    ...album,
                    latestPhoto: sortedItems[0]?.image ? `https://api.ctythat.com/${sortedItems[0].image}` : null
                };
            });
    
            setAlbums(updatedAlbums);
        } catch (error) {
            console.error('Fetch Albums Error:', error);
        }
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        if (!authToken) {
            setError('No authentication token found.');
            setLoading(false);
            return;
        }

        const formData = new FormData();
        formData.append('Name', name);
        formData.append('Description', description);

        try {
            const response = await fetch('https://api.ctythat.com/api/User/AddAlbum', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to create album');
            }

            setSuccess(true);
            setName('');
            setDescription('');
            setIsModalOpen(false);
            fetchAlbums();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center w-full min-h-screen gap-5 p-10">
            <h1 className="text-[#666666] font-bold tracking-wide text-start text-4xl">Albums</h1>

            <div className="flex w-full flex-wrap gap-6">
                {albums.length === 0 ? (
                    <p className="text-gray-500 col-span-2">No albums available.</p>
                ) : (
                    albums.map((album) => (
                        <Link
                        to={`/album/${album.id}`}
                        key={album.id}
                        className="w-72 h-72 border rounded-lg shadow-md p-4 bg-white cursor-pointer overflow-hidden"
                    >
                        {album.latestPhoto ? (
                            <img
                                src={album.latestPhoto}
                                alt={album.name}
                                className="w-full h-40 object-cover rounded-md mb-2"
                            />
                        ) : (
                            <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md mb-2">
                                <span className="text-gray-500">No Image</span>
                            </div>
                        )}
                        <h2 className="text-xl font-bold text-gray-700">{album.name}</h2>
                        <p className="text-gray-500 mt-2">{album.description}</p>
                    </Link>
                    
                    ))
                )}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="cursor-pointer flex flex-col items-center w-72 h-72 justify-center border border-dashed border-gray-400 rounded-lg bg-gray-100"
                >
                    <img className="w-auto h-[3.5em]" src={addimg} alt="Add Album" />
                    <h1 className="text-[#666666] font-medium text-lg">Add Album</h1>
                </button>
            </div>


            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-bold text-gray-700 mb-4">Add New Album</h2>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Album Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="border p-2 rounded-md"
                            />
                            <textarea
                                placeholder="Album Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                className="border p-2 rounded-md"
                            />

                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 bg-gray-300 rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md"
                                    disabled={loading}
                                >
                                    {loading ? 'Adding...' : 'Add'}
                                </button>
                            </div>
                        </form>

                        {error && <p className="text-red-600 mt-2">{error}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Albums;
