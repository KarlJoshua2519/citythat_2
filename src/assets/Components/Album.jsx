import React, { useRef, useState, useEffect } from "react";
import '../../views/App.css'
import left from '../images/arrowleft.png'
import right from '../images/arrowright.png'
const Album = () => {

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
    return (

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
    )
}

export default Album
