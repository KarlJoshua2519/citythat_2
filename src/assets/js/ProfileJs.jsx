import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export const ProfileJs = () => {
    const [activeSection, setActiveSection] = useState('newsFeed');
    const [isAnimating, setIsAnimating] = useState(false);
    const [user, setUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalUploadOpen, setIsModalUploadOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [editedProfile, setEditedProfile] = useState({
        firstName: '',
        lastName: '',
        description: '',
        profilePicture: null,
        resume: null
    });

    const [isCropModalOpen, setIsCropModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const cropperRef = useRef(null);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = () => {
        const token = localStorage.getItem('authToken');
        if (token) {
            axios.get('https://api.ctythat.com/api/Auth', {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then(response => {
                    setUser(response.data);
                    setEditedProfile({
                        firstName: response.data.firstName || '',
                        lastName: response.data.lastName || '',
                        description: response.data.description || ''
                    });
                })
                .catch(error => console.error('Error fetching user data:', error));
        }
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

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleInputChange = (e) => {
        setEditedProfile({ ...editedProfile, [e.target.name]: e.target.value });
    };

    const handleUploadClick = () => {
        setIsModalUploadOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalUploadOpen(false);
        setSelectedFile(null);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
                setIsCropModalOpen(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCropSave = async () => {
        if (cropperRef.current) {
            cropperRef.current.cropper.getCroppedCanvas().toBlob(async (blob) => {
                if (!blob) {
                    console.error("Cropping failed.");
                    return;
                }

                const croppedFile = new File([blob], "profile.jpg", { type: "image/jpeg" });

                const formData = new FormData();
                formData.append("FirstName", user.firstName || "");
                formData.append("MiddleName", user.middleName || "");
                formData.append("LastName", user.lastName || "");
                formData.append("Email", user.email || "");
                formData.append("Image", croppedFile);
                formData.append("Resume", "");
                formData.append("Description", user.description || "");
                formData.append("Type", user.type || 1);

                try {
                    const token = localStorage.getItem("authToken");
                    if (!token) {
                        console.error("No auth token found");
                        return;
                    }

                    const response = await axios.put("https://api.ctythat.com/api/User", formData, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "multipart/form-data",
                        },
                    });

                    console.log("Profile updated successfully!", response.data);
                    setIsCropModalOpen(false);
                } catch (error) {
                    console.error("Error updating profile picture:", error.response?.data || error.message);
                }
            }, "image/jpeg");
        }
    };

    const handleSave = async () => {
        try {
            const token = localStorage.getItem('authToken');
            if (!token) {
                console.error("No auth token found. Please log in.");
                return;
            }

            const formData = new FormData();
            formData.append("firstName", editedProfile.firstName);
            formData.append("middleName", editedProfile.middleName || "");
            formData.append("lastName", editedProfile.lastName);
            formData.append("description", editedProfile.description);
            formData.append("email", user?.email);
            formData.append("password", user?.password);
            formData.append("type", user?.type || 0);

            if (editedProfile.profilePicture) {
                formData.append("image", editedProfile.profilePicture);
            }

            if (editedProfile.resume) {
                formData.append("resume", editedProfile.resume);
            }

            const response = await axios.put("https://api.ctythat.com/api/User", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("Profile updated successfully!", response.data);
            fetchUserData();
            closeModal();
        } catch (error) {
            console.error("Error updating profile:", error.response?.data || error.message);
        }
    };

    return {
        activeSection,
        user,
        isModalOpen,
        isModalUploadOpen,
        selectedFile,
        editedProfile,
        isCropModalOpen,
        selectedImage,
        cropperRef,
        handleNavClick,
        openModal,
        closeModal,
        handleInputChange,
        handleUploadClick,
        handleCloseModal,
        handleFileChange,
        handleCropSave,
        handleSave
    };
};
