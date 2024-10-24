import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const AlbumPage = () => {
    const { id } = useParams();
    const albumData = getAlbumData(id); 

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handlePhotoUpload = () => {
        if (selectedFile) {
          
            console.log(selectedFile);
          
            setIsModalOpen(false); 
        }
    };

    return (
        <div className="mt-20 h-screen p-10 relative">
            <h1 className="text-3xl font-bold mb-4">{albumData.title}</h1>
            <p className="text-xl mb-2">{albumData.description}</p>

            <button 
                onClick={() => setIsModalOpen(true)} 
                className="absolute top-4 right-4 bg-primary text-secondary px-4 py-2 rounded"
            >
                Upload Photo
            </button>

          
            <div className="grid grid-cols-5 gap-4 mt-4">
                {albumData.photos.map((photo, index) => (
                    <img 
                        key={index}
                        src={photo} 
                        alt={`Photo ${index + 1}`} 
                        className="w-full h-48 object-cover rounded-lg"
                    />
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 w-96">
                        <h2 className="text-xl font-semibold mb-4">Upload Photo</h2>
                        <input 
                            type="file" 
                            accept="image/*" 
                            onChange={(e) => setSelectedFile(e.target.files[0])}
                            className="border border-gray-300 rounded p-2 mb-4 w-full"
                        />
                        <div className="flex justify-end">
                            <button 
                                onClick={() => setIsModalOpen(false)} 
                                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={handlePhotoUpload} 
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const getAlbumData = (id) => {
    const albums = {
        1: {
            title: "Album 1",
            description: "Album 1 Description",
            photos: [
                "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop", // Add more URLs
            ],
        },
        2: {
            title: "Album 2",
            description: "Album 2 Description",
            photos: [
                "https://images.unsplash.com/photo-1521324515894-017df5725518?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1521324515894-017df5725518?q=80&w=600&auto=format&fit=crop", // Add more URLs
            ],
        },
    };

    return albums[id] || { title: "Album not found", description: "", photos: [] };
};

export default AlbumPage;
