import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export const ProfileJs = () => {

   
    const [user, setUser] = useState(null);
    const [resumeUrl, setResumeUrl] = useState(null);  // Store the resume URL
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
        console.log(user?.coverPhoto);

        fetchUserData();
    }, []);

    const fetchUserData = () => {
        const token = localStorage.getItem('authToken');
        if (token) {
            axios.get('https://api.ctythat.com/api/Auth', {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then(response => {
                    console.log("User Data:", response.data);
                    console.log("Cover Photo:", user?.coverPhoto);
                    setUser(response.data);
                    setResumeUrl(response.data.resume);  // Store the resume URL
                    setEditedProfile({
                        firstName: response.data.firstName || '',
                        lastName: response.data.lastName || '',
                        description: response.data.description || ''
                    });
                })
                .catch(error => console.error('Error fetching user data:', error));
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
    
    const handleCoverPhotoUpload = async () => {
        if (!selectedFile) {
            console.error("No file selected.");
            return;
        }
    
        const formData = new FormData();
        formData.append("Cover", selectedFile); 
    
        try {
            const token = localStorage.getItem("authToken");
            if (!token) {
                console.error("No auth token found.");
                return;
            }
    
            const response = await axios.put(
                "https://api.ctythat.com/api/User/UpdateUserCover",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log(user?.coverPhoto);

            console.log("Cover photo updated successfully!", response.data);
            
            setIsModalUploadOpen(false);
            setSelectedFile(null);
    
       
            fetchUserData(); 
    
        } catch (error) {
            console.error("Error updating cover photo:", error.response?.data || error.message);
        }
    };
    
    const handleCloseModal = () => {
        setIsModalUploadOpen(false);
       
    };

    const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        if (e.target.name === "profilePicture") {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
                setIsCropModalOpen(true);
            };
            reader.readAsDataURL(file);
        } else if (e.target.name === "resume") {
            setEditedProfile({ ...editedProfile, resume: file });
        } else {
         
            setSelectedFile(file); 
        }
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
                formData.append("Resume", editedProfile.resume); 
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
     
        user,
        isModalOpen,
        resumeUrl,
        isModalUploadOpen,
        selectedFile,
        editedProfile,
        isCropModalOpen,
        setIsCropModalOpen,
        selectedImage,
        cropperRef,
        openModal,
        closeModal,
        handleInputChange,
        handleCoverPhotoUpload,
        handleUploadClick,
        handleCloseModal,
        handleFileChange,
        handleCropSave,
        handleSave
    };
};
