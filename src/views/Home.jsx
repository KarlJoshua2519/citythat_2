import React, { useEffect } from 'react';
import logogif from '../assets/images/CityThatLogoAnimation.gif'
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import './App.css'



const words = ["Plumber", "Landscaper", "Handyman"];
let wordIndex = 0;
let letterIndex = 0;
const Home = () => {
    useEffect(() => {
        const typingElement = document.getElementById('typing-text');
    
        const type = () => {
          if (letterIndex < words[wordIndex].length) {
            typingElement.textContent += words[wordIndex][letterIndex];
            letterIndex++;
            setTimeout(type, 200); 
          } else {
            setTimeout(() => {
              erase();
            }, 2000); 
          }
        };
    
        const erase = () => {
          if (letterIndex > 0) {
            typingElement.textContent = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(erase, 100); 
          } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 200); 
          }
        };
    
        type();
    
      }, []);
    
    return (
        <div className=" w-full bg-white flex flex-col justify-center h-screen">
            <section className="w-full flex flex-col items-center justify-center p-10">
                <img className="w-1/3 h-auto" src={logogif} alt="" />
                <p className="text-start max-w-3xl w-full text-sm font-medium">Try searching for a <span className="typing-text" id="typing-text" />.</p>
                <div className="flex items-center justify-center bg-white w-full max-w-3xl border border-gray-300 rounded-md p-2">
                   
                    <div className="flex items-center w-full">
                        <FaSearch className="text-gray-400 ml-2" />
                        <input
                            className="w-full h-[3em] pl-4 border-none outline-none placeholder-gray-400"
                            type="text"
                            placeholder="Search..."
                        />
                    </div>

                 
                    <span className="h-6 border-l border-gray-300 mx-4"></span>

              
                    <div className="flex items-center w-1/3">
                        <FaMapMarkerAlt className="text-gray-400 ml-2" />
                        <input
                            className="w-full h-[3em] pl-4 border-none outline-none placeholder-gray-400"
                            type="text"
                            placeholder="Zip Code"
                        />
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Home
