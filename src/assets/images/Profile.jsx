import React, { useRef, useState, useEffect } from "react";
import "./Profile.css";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.png";
import xlogo from "../../assets/images/x-icon.svg";
import linkedin from "../../assets/images/linkedin.svg";
import Avatar from "../../assets/images/top-plumber.png";
import citythatlogo from "../../assets/images/citythatlogo.png";
import cover from "../../assets/images/coverphoto.jpg";
import ToggleButton from "../../assets/Components/ToggleSwitch/ToggleButton";
import left from "../../assets/images/arrowleft.png";
import right from "../../assets/images/arrowright.png";
import jonash from "../../assets/images/jonash.jpg";
import jbresume from "../../assets/PDF/JB-Resume.pdf";
import jbresume1 from "../../assets/images/Resume-images/JB-Resume_page1.jpg";
import jbresume2 from "../../assets/images/Resume-images/JB-Resume_page2.jpg";
import luisresume1 from "../../assets/images/Resume-images/luis-resume_page1.jpg";
import luisresume2 from "../../assets/images/Resume-images/luis-resume_page2.jpg";
import luis from "../../assets/images/luis.jpg";
import Avatarwoman from "../../assets/images/woman.png";

const Profile = () => {
  const albumRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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
    // Update arrow visibility
    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollWidth > container.clientWidth + container.scrollLeft
    );
  };

  const [showResume, setShowResume] = useState(false);

  const handleResumeClick = () => {
    setShowResume(true); // Set state to show the resume
  };

  const handleContentClick = () => {
    setShowResume(false); // Set state to show default content
  };
  const [selectedResume, setSelectedResume] = useState(1);
  const [animationClass, setAnimationClass] = useState("");
  const [resumeData, setResumeData] = useState({
    1: { img1: jbresume1, img2: jbresume2, name: "Resume 1" },
    2: { img1: luisresume1, img2: luisresume2, name: "Resume 2" },
    3: { img1: jbresume1, img2: jbresume2, name: "Resume 3" },
  });
  const [editMode, setEditMode] = useState(null); // State for which resume is in edit mode
  const [editValue, setEditValue] = useState("");

  const handleNextResume = (resumeNumber) => {
    const newAnimationClass =
      resumeNumber > selectedResume ? "swipe-left-enter" : "swipe-right-enter";

    setAnimationClass(newAnimationClass);
    setSelectedResume(resumeNumber);

    // Reset the animation class after the animation is done
    setTimeout(() => setAnimationClass(""), 500);
  };

  const startEditing = (resumeNumber) => {
    setEditMode(resumeNumber);
    setEditValue(resumeData[resumeNumber].name);
  };

  const handleEditChange = (e) => {
    if (e.key === "Enter") {
      // Save changes on Enter key press
      saveEdit(editMode);
    } else {
      setEditValue(e.target.value);
    }
  };

  const saveEdit = (resumeNumber) => {
    setResumeData({
      ...resumeData,
      [resumeNumber]: { ...resumeData[resumeNumber], name: editValue },
    });
    setEditMode(null);
  };


  const blogPosts = [
    {
      id: 1,
      title: 'Building the Future: How Technology is Changing Construction',
      date: 'September 1, 2024',
      excerpt: 'Explore how modern technology is revolutionizing the construction industry, from smart tools to advanced materials.',
      image: ''
    },
    {
      id: 2,
      title: 'Top Safety Tips for Construction Workers',
      date: 'August 20, 2024',
      excerpt: 'Safety is paramount in construction. Learn the top tips to keep yourself and your team safe on the job site.',
      image: 'path/to/image2.jpg'
    },
    {
      id: 3,
      title: 'Sustainable Building Practices: What You Need to Know',
      date: 'August 15, 2024',
      excerpt: 'Sustainability is becoming a key focus in construction. Discover the best practices for building with the environment in mind.',
      image: 'path/to/image3.jpg'
    }
  ];
  return (
    <div>
      <header className="profile-header">
        <nav className="profile-main-navbar">
          <a href="/">
            <img className="profile-nav-logo-img" src={citythatlogo} alt="" />
          </a>
          <div className="nav-items-right">
            <ul className="nav-ul">
              <a className="citythatbank-icon">CG</a>
              <a className="profile-initial" href="">
                {" "}
                KG
              </a>
            </ul>
          </div>
        </nav>
      </header>

      <div className="user-profile-page">
        <div className="user-profile-container">
          <header className="profile-header">
            <img className="cover-photo" src={cover} alt="" />
            <div className="cover-overlay"></div>
            <div className="profile-container">
              <div className="profile-navbar">
                <div className="left-navbar">
                  <ul className="profile-navbar-list">
                    <a
                      className="profile-navbar-item"
                      onClick={handleContentClick}
                    >
                      News Feed
                    </a>
                    <a
                      className="profile-navbar-item"
                      onClick={handleContentClick}
                    >
                      Dashboard
                    </a>
                  </ul>
                </div>
                <div className="profile-avatar">
                  <img className="profile-avatar-img" src={jonash} alt="" />
                  <div className="profile-title">JONASH BUNDALIAN</div>
                  <div className="social-links">
                    <a
                      href="https://www.facebook.com/profile.php?id=100063639608912&mibextid=LQQJ4d"
                      target="#"
                    >
                      <img className="social-img" src={facebook} alt="" />
                    </a>
                    <a href="https://www.instagram.com/nashkatchum/" target="#">
                      <img className="social-img" src={instagram} alt="" />
                    </a>
                    <a
                      href="https://x.com/naaassshhyyyy?s=21&t=QJiRVZdtDixJw5-uyjborw"
                      target="#"
                    >
                      <img className="social-img" src={xlogo} alt="" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jonash-bundalian"
                      target="#"
                    >
                      <img className="social-img" src={linkedin} alt="" />
                    </a>
                  </div>
                </div>

                <div className="right-navbar">
                  <ul className="profile-navbar-list">
                    <a
                      className="profile-navbar-item"
                      onClick={handleResumeClick}
                    >
                      Resume
                    </a>
                    <a
                      className="profile-navbar-item"
                      onClick={handleContentClick}
                    >
                      BLOG
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </header>

          <div className="body-container">
            <div className="profile-page-container">
              {showResume ? (
                <div
                  className={`resume-container ${showResume ? "show" : "hide"}`}
                >
                  <div className="menu-section">
                    <div className="resume-selection">
                      {Object.keys(resumeData).map((resumeNumber) => (
                        <li key={resumeNumber}>
                          {editMode === parseInt(resumeNumber) ? (
                            <div className="resume-item-edit">
                              <input
                                type="text"
                                value={editValue}
                                onChange={handleEditChange}
                                onKeyDown={handleEditChange}
                              />
                            </div>
                          ) : (
                            <a
                              className={`resume-item ${selectedResume === parseInt(resumeNumber)
                                ? "active"
                                : ""
                                }`}
                              onClick={() =>
                                handleNextResume(parseInt(resumeNumber))
                              }
                              onDoubleClick={() =>
                                startEditing(parseInt(resumeNumber))
                              }
                            >
                              {resumeData[resumeNumber].name}
                            </a>
                          )}
                        </li>
                      ))}
                    </div>

                    <div className="download-btn-container">
                      <a href={jbresume} download className="download-button">
                        Download PDF
                      </a>
                    </div>
                  </div>

                  <div className={`resume-img-container ${animationClass}`}>
                    <img
                      className="resume-img"
                      src={resumeData[selectedResume].img1}
                      alt=""
                    />
                    <img
                      className="resume-img"
                      src={resumeData[selectedResume].img2}
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="profile-description">
                    <p className="description-text">
                      A computer engineer who joined Breen Design Group in 2016.
                      He works with the Electrical department on low-voltage
                      projects and has extensive experience in network
                      consulting and low-voltage design, particularly for
                      high-rise buildings, hospitals, commercial properties,
                      residential developments, and schools. He has been
                      involved in various aerospace projects around southern
                      California and numerous affordable housing projects over
                      nearly a decade. In addition to his role as a Low Voltage
                      Designer, Jonash is also an in-house Solutions Cloud
                      Architect using Amazon Web Services and serves as a
                      technology consultant for Breen Design Group's clients. He
                      has prior training in Cisco Technology and holds a
                      bachelor’s degree in computer engineering.
                    </p>
                  </div>
                  <div className="post-section">
                    <div className="text-banner">
                      <h1 className="text-banner-txt">PORTFOLIO</h1>
                    </div>

                    <section>
                      <div className="g-content g-grid">
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
                    </section>

                    <h1 className="title-text">ALBUM</h1>

                    <section className="album-container">
                      {showLeftArrow && (
                        <button
                          className="arrow left-arrow"
                          onClick={() => handleScroll("left")}
                        >
                          <img
                            className="arrow-img"
                            src={left}
                            alt=""
                            srcset=""
                          />
                        </button>
                      )}
                      <div className="album-section" ref={albumRef}>
                        <div className="album">
                          <img
                            className="album-cover"
                            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop"
                            alt="Album 1 Cover"
                          />
                          <div className="album-details">
                            <h2 className="album-title">Album 1</h2>
                            <p className="album-description">
                              Album 1 Description
                            </p>
                            <p className="album-info">5 Photos</p>
                          </div>
                        </div>

                        <div className="album">
                          <img
                            className="album-cover"
                            src="https://images.unsplash.com/photo-1521324515894-017df5725518?q=80&w=600&auto=format&fit=crop"
                            alt="Album 2 Cover"
                          />
                          <div className="album-details">
                            <h2 className="album-title">Album 2</h2>
                            <p className="album-description">
                              Album 2 Description
                            </p>
                            <p className="album-info">8 Photos</p>
                          </div>
                        </div>

                        <div className="album">
                          <img
                            className="album-cover"
                            src="https://images.unsplash.com/photo-1509453721491-c3af5961df76?q=80&w=600&auto=format&fit=crop"
                            alt="Album 3 Cover"
                          />
                          <div className="album-details">
                            <h2 className="album-title">Album 3</h2>
                            <p className="album-description">
                              Album 3 Description
                            </p>
                            <p className="album-info">12 Photos</p>
                          </div>
                        </div>

                        <div className="album">
                          <img
                            className="album-cover"
                            src="https://images.unsplash.com/photo-1593877499575-9d072e63d502?q=80&w=600&auto=format&fit=crop"
                            alt="Album 4 Cover"
                          />
                          <div className="album-details">
                            <h2 className="album-title">Album 4</h2>
                            <p className="album-description">
                              Album 4 Description
                            </p>
                            <p className="album-info">6 Photos</p>
                          </div>
                        </div>
                        <div className="album">
                          <img
                            className="album-cover"
                            src="https://images.unsplash.com/photo-1593877499575-9d072e63d502?q=80&w=600&auto=format&fit=crop"
                            alt="Album 4 Cover"
                          />
                          <div className="album-details">
                            <h2 className="album-title">Album 5</h2>
                            <p className="album-description">
                              Album 4 Description
                            </p>
                            <p className="album-info">6 Photos</p>
                          </div>
                        </div>
                        <div className="album">
                          <img
                            className="album-cover"
                            src="https://images.unsplash.com/photo-1593877499575-9d072e63d502?q=80&w=600&auto=format&fit=crop"
                            alt="Album 4 Cover"
                          />
                          <div className="album-details">
                            <h2 className="album-title">Album 6</h2>
                            <p className="album-description">
                              Album 4 Description
                            </p>
                            <p className="album-info">6 Photos</p>
                          </div>
                        </div>
                      </div>
                      {showRightArrow && (
                        <button
                          className="arrow right-arrow"
                          onClick={() => handleScroll("right")}
                        >
                          {" "}
                          <img
                            className="arrow-img"
                            src={right}
                            alt=""
                            srcset=""
                          />
                        </button>
                      )}
                    </section>

                    <section className="WM-section">
                      <div className="WM-container">
                        <h1 className="title-text">WORD OF MOUTH</h1>
                        <div className="togglebtn-container">
                          <ToggleButton />
                        </div>
                        <div className="wm-cards-container">
                          <a href="/luis">
                            <div className="wm-card">
                              <div className="wm-card-inner">
                                <div className="wm-card-front card-color-2">
                                  <img
                                    src={luis}
                                    alt="Cover 5"
                                    className="wm-card-cover"
                                  />
                                  <div className="wm-card-content">
                                    <h3 className="wm-card-name">
                                      Luis Jimenez
                                    </h3>
                                    <p className="wm-card-role">(Role Name)</p>
                                    <p className="wm-card-address">
                                      Los Angeles
                                    </p>
                                  </div>
                                </div>

                                <div className="wm-card-back card-color-2">
                                  <p className="wm-card-back-text">
                                    SHORT DESCRIPTION
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>

                          <div className="wm-card">
                            <div className="wm-card-inner">
                              <div className="wm-card-front card-color-1">
                                <img
                                  src={Avatarwoman}
                                  alt="Cover 5"
                                  className="wm-card-cover"
                                />
                                <div className="wm-card-content">
                                  <h3 className="wm-card-name">
                                    Janela Pangan
                                  </h3>
                                  <p className="wm-card-role">Cybersecurity</p>
                                  <p className="wm-card-address">
                                    Toronto, Canada
                                  </p>
                                </div>
                              </div>
                              <div className="wm-card-back card-color-1">
                                <p className="wm-card-back-text">
                                  SHORT DESCRIPTION
                                </p>
                              </div>
                            </div>
                          </div>
                          <a href="/joper">
                            <div className="wm-card">
                              <div className="wm-card-inner">
                                <div className="wm-card-front card-color-3">
                                  <img
                                    src={Avatar}
                                    alt="Cover 5"
                                    className="wm-card-cover"
                                  />
                                  <div className="wm-card-content">
                                    <h3 className="wm-card-name">
                                      Joper O. Tupas
                                    </h3>
                                    <p className="wm-card-role">
                                      Plumbing Engineer
                                    </p>
                                    <p className="wm-card-address">
                                      789 Oak St, City
                                    </p>
                                  </div>
                                </div>
                                <div className="wm-card-back card-color-3">
                                  <p className="wm-card-back-text">
                                    SHORT DESCRIPTION
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                          <div className="wm-card">
                            <div className="wm-card-inner ">
                              <div className="wm-card-front card-color-4">
                                <img
                                  src={Avatar}
                                  alt="Cover 5"
                                  className="wm-card-cover"
                                />
                                <div className="wm-card-content">
                                  <h3 className="wm-card-name">Card 4</h3>
                                  <p className="wm-card-role">Manager</p>
                                  <p className="wm-card-address">
                                    789 Oak St, City
                                  </p>
                                </div>
                              </div>
                              <div className="wm-card-back card-color-4">
                                <p className="wm-card-back-text">
                                  SHORT DESCRIPTION
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="wm-card">
                            <div className="wm-card-inner">
                              <div className="wm-card-front card-color-5">
                                <img
                                  src={Avatar}
                                  alt="Cover 5"
                                  className="wm-card-cover"
                                />
                                <div className="wm-card-content">
                                  <h3 className="wm-card-name">Card 5</h3>
                                  <p className="wm-card-role">Manager</p>
                                  <p className="wm-card-address">
                                    789 Oak St, City
                                  </p>
                                </div>
                              </div>
                              <div className="wm-card-back card-color-5">
                                <p className="wm-card-back-text">
                                  SHORT DESCRIPTION
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="wm-card">
                            <div className="wm-card-inner">
                              <div className="wm-card-front card-color-6">
                                <img
                                  src={Avatar}
                                  alt="Cover 5"
                                  className="wm-card-cover"
                                />
                                <div className="wm-card-content">
                                  <h3 className="wm-card-name">Card 6</h3>
                                  <p className="wm-card-role">Manager</p>
                                  <p className="wm-card-address">
                                    789 Oak St, City
                                  </p>
                                </div>
                              </div>
                              <div className="wm-card-back card-color-6">
                                <p className="wm-card-back-text">
                                  SHORT DESCRIPTION
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="wm-card">
                            <div className="wm-card-inner">
                              <div className="wm-card-front card-color-7">
                                <img
                                  src={Avatar}
                                  alt="Cover 5"
                                  className="wm-card-cover"
                                />
                                <div className="wm-card-content">
                                  <h3 className="wm-card-name">Card 7</h3>
                                  <p className="wm-card-role">Manager</p>
                                  <p className="wm-card-address">
                                    789 Oak St, City
                                  </p>
                                </div>
                              </div>
                              <div className="wm-card-back card-color-7">
                                <p className="wm-card-back-text">
                                  SHORT DESCRIPTION
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>


              
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
