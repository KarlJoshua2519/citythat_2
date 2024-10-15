import React, { useEffect } from 'react';
import logogif from '../assets/images/CityThatLogoAnimation.gif'
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import './App.css'
import banner from '../assets/images/banner.jpg'
import aws from '../assets/images/aws-partner-network.png'
import aws2 from '../assets/images/powered-by-aws.png'
import ServicesTitle from '../assets/Components/ServicesTitle';
import maintenance from '../assets/images/maintenance.svg';
import emergency from '../assets/images/emergency.svg';
import tools from '../assets/images/tools.svg';
import plumbingbanner from '../assets/images/plumbing-banner.jpg'
import plumber1 from '../assets/images/plumbing.jpg'
import plumber2 from '../assets/images/plumbing2.jpg'
import plumber3 from '../assets/images/plumbing3.jpeg'
import plumber4 from '../assets/images/plumbing4.jpg'
import Featured from '../assets/Components/Featured/Featured';




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
        <div className=" w-full  flex flex-col justify-center ">
            <section className="w-full flex flex-col bg-white h-screen items-center justify-center p-10">
                <img className="w-auto h-auto" src={logogif} alt="" />
                <p className="text-start max-w-3xl w-1/2 text-sm font-medium">Try searching for a <span className="typing-text" id="typing-text" />.</p>
                <div className="flex items-center justify-center bg-white w-1/2 max-w-3xl border border-gray-300 rounded-md p-2">

                    <div className="flex items-center w-full">
                        <FaSearch className="text-gray-400 ml-2" />
                        <input
                            className="w-full h-[2em] pl-4 border-none outline-none placeholder-gray-400"
                            type="text"
                            placeholder="Search..."
                        />
                    </div>


                    <span className="h-6 border-l border-gray-300 mx-4"></span>


                    <div className="flex items-center w-1/3">
                        <FaMapMarkerAlt className="text-gray-400 ml-2" />
                        <input
                            className="w-full h-[2em] pl-4 border-none outline-none placeholder-gray-400"
                            type="text"
                            placeholder="Zip Code"
                        />
                    </div>
                </div>
            </section>

            <img className="w-full" src={banner} alt="" />
            <div className="w-full h-auto flex flex-row items-center justify-center my-10 gap-32">
                <img className="w-auto h-[8em] mx-10" src={aws} alt="" />
                <img className="w-auto h-[8em] mx-10" src={aws2} alt="" />

            </div>



            <section className="services-section w-full flex my-10 flex-col items-center p-10">
                <ServicesTitle />
                <div className="w-full lato flex gap-14 items-center mt-20 justify-center">
                    <div className="flex w-[20em] flex-col items-center">
                        <img className="w-[3.8em]" src={maintenance} alt="" />
                        <h1 className="text-primary font-bold text-lg mt-4">General Plumbing Maintenance</h1>
                        <p className="text-md font-medium text-center text-[#666666]">Leaky faucet? Clogged toilet? We got you covered with our wide range of plumbing maintenance services.</p>
                    </div>
                    <div className="flex w-[20em] flex-col items-center">
                        <img className="w-[3.8em]" src={emergency} alt="" />
                        <h1 className="text-primary  font-bold text-lg mt-4">General Plumbing Maintenance</h1>
                        <p className="text-md font-medium text-center text-[#666666]">Leaky faucet? Clogged toilet? We got you covered with our wide range of plumbing maintenance services.</p>
                    </div>
                    <div className="flex w-[20em] flex-col items-center">
                        <img className="w-[3.8em]" src={tools} alt="" />
                        <h1 className="text-primary  font-bold text-lg mt-4">General Plumbing Maintenance</h1>
                        <p className="text-md text-center font-medium text-[#666666]">Leaky faucet? Clogged toilet? We got you covered with our wide range of plumbing maintenance services.</p>
                    </div>
                </div>

            </section>

            <section
                className="relative w-full py-10 px-20 flex my-10 flex-col items-center justify-center"
                style={{
                    backgroundImage: `url(${plumbingbanner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                }}>

                <div
                    className="absolute inset-0 bg-black opacity-30"
                    style={{
                        backdropFilter: 'blur(20px) brightness(0.5)',
                    }}
                ></div>

                <div className=" flex flex-row z-20 w-[70em]  backdrop-blur-md" style={{ backgroundColor: `rgba(255, 255, 255, 0.7)`, backdropFilter: 'blur(10px)' }}>
                    <div className="w-full grid grid-cols-2">
                        <img className="w-full h-[13em] object-cover" src={plumber1} alt="" />
                        <img className="w-full h-[13em] object-cover" src={plumber2} alt="" />
                        <img className="w-full h-[13em] object-cover" src={plumber3} alt="" />
                        <img className="w-full h-[13em] object-cover" src={plumber4} alt="" />
                    </div>

                    <div className=" w-full flex flex-col justify-center p-6 lato">
                        <h1 className="font-bold text-sm tracking-wide ">ABOUT US</h1>
                        <h1 className="font-bold text-2xl text-primary tracking-wider">PLUMBING IS WHAT WE DO</h1>
                        <p className="text-gray-800 tracking-wider text-sm font-medium text-justify leading-relaxed mt-4">CityThat is a global workforce network mobile application that serves, (as its target members), white-collar and
                            blue-collar small businesses, self-employed individuals, and freelancers. CityThat’s ambition is to become an
                            important daily outlet for all its members; with the goal of having its members remain active and relevant in the
                            workforce and to have a sense that they are a part of a united and diverse workforce community.</p>

                    </div>
                </div>

            </section>

            <section className="w-full flex my-10 flex-col items-center">
                <Featured/>
            </section>

        </div>
    )
}

export default Home
