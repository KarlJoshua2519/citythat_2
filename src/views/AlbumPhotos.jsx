import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { X, ImageUp, Trash } from 'lucide-react';


const AlbumPhotos = () => {
    const { id } = useParams();
    const [albumName, setAlbumName] = useState('');
    const [photos, setPhotos] = useState([]);
    const [files, setFiles] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedPhotos, setSelectedPhotos] = useState([]);
    const [showCheckboxes, setShowCheckboxes] = useState(false);
    const authToken = localStorage.getItem('authToken');

    const fetchPhotos = async () => {
        try {
            const response = await fetch('https://api.ctythat.com/api/User/GetAlbum', {
                headers: { Authorization: `Bearer ${authToken}` },
            });

            if (!response.ok) throw new Error(`Failed to fetch photos: ${response.status}`);

            const data = await response.json();

            const album = data.find(album => album.id === id);
            if (album) {
                setAlbumName(album.name);
                setPhotos(album.albumItems);
            } else {
                console.error('Album not found');
                setPhotos([]);
            }
        } catch (error) {
            console.error('Fetch Photos Error:', error);
        }
    };

    useEffect(() => {
        fetchPhotos();
    }, []);

    const handleUpload = async (e) => {
        e.preventDefault();
        if (files.length === 0) return;
    
        try {
            for (const file of files) {
                const formData = new FormData();
                formData.append('AlbumId', String(id));
                formData.append('Image', file);
    
                const response = await fetch('https://api.ctythat.com/api/User/AddAlbumPhoto', {
                    method: 'POST',
                    headers: { Authorization: `Bearer ${authToken}` },
                    body: formData,
                });
    
                if (!response.ok) {
                    throw new Error(`Failed to upload photo: ${file.name}`);
                }
            }
    
            setFiles([]);
            setShowModal(false);
            // Re-fetch album data to update the latest photo
            await fetchPhotos();
        } catch (error) {
            console.error('Upload Error:', error);
        }
    };
    

    const handleDelete = async () => {
        try {
            const response = await fetch('https://api.ctythat.com/api/User/DeleteAlbumPhotos', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ids: selectedPhotos }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to delete selected photos');
            }
    
            fetchPhotos();
            setSelectedPhotos([]);
            setShowCheckboxes(false);
        } catch (error) {
            console.error('Delete Error:', error);
        }
    };
    

    const toggleSelectPhoto = (photoId) => {
        setSelectedPhotos((prevSelected) => 
            prevSelected.includes(photoId)
                ? prevSelected.filter(id => id !== photoId)
                : [...prevSelected, photoId]
        );
    };

    const removeFile = (fileName) => {
        setFiles(files.filter(file => file.name !== fileName));
    };

    return (
        <div className="min-h-screen flex flex-col mt-20 p-10">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-3xl font-bold">{albumName}</h1>
                <div className="flex items-center gap-2">
                    <button onClick={() => setShowModal(true)} className="p-2 border-2 border-primary text-primary rounded-md transition ease-300 hover:bg-primary hover:text-secondary">  <ImageUp size={25} /></button>
                    <button 
                        onClick={() => setShowCheckboxes(!showCheckboxes)} 
                        className="p-2 border-2 border-red-700 text-red-700 rounded-md hover:bg-red-700 hover:text-white transition ease-300"
                    >
                        {showCheckboxes ? 'Cancel' : <Trash size={25}/>}
                    </button>
                    {selectedPhotos.length > 0 && showCheckboxes && (
                <div className="">
                    <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded-md">Confirm Delete</button>
                </div>
            )}
                </div>
            </div>

           

            <div className="mt-6 grid lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-2 gap-4">
                {photos.map((photo) => (
                    <div key={photo.id} className="relative">
                        {showCheckboxes && (
                            <input 
                                type="checkbox"
                                checked={selectedPhotos.includes(photo.id)}
                                onChange={() => toggleSelectPhoto(photo.id)}
                                className="absolute top-2 left-2 z-10 w-5 h-5"
                            />
                        )}
                        <img
                            src={`https://api.ctythat.com/${photo.image}`}
                            alt="Album"
                            className="w-full h-40 object-cover rounded-lg cursor-pointer"
                            onClick={(e) => { 
                                if (!showCheckboxes) {
                                    e.stopPropagation(); 
                                    setSelectedPhoto(photo.image);
                                }
                            }}
                        />
                    </div>
                ))}
            </div>

            {selectedPhoto && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setSelectedPhoto(null)}>
                    <img src={`https://api.ctythat.com/${selectedPhoto}`} alt="Full Image" className="max-h-full max-w-full rounded-lg" />
                    <button onClick={() => setSelectedPhoto(null)} className="absolute top-4 right-4 text-white text-3xl">&times;</button>
                </div>
            )}

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
                        <h2 className="text-2xl font-bold mb-4">Upload Photos</h2>
                        <form onSubmit={handleUpload}>
                            <input type="file" multiple onChange={(e) => setFiles([...e.target.files])} className="mb-4" />
                            <div>
                                <h1 className="text-xl font-semibold mb-4">Selected Images:</h1>
                                {files.map(file => (
                                    <div key={file.name} className="flex items-center justify-between mb-2">
                                        <span>{file.name}</span>
                                        <X onClick={() => removeFile(file.name)} className="cursor-pointer ml-2" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={() => setShowModal(false)} className="mr-2 px-4 py-2 bg-gray-300 text-black rounded-md">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Upload</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AlbumPhotos;
