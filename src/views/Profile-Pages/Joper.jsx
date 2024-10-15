import React from 'react';
import coverphoto from '../../assets/images/photo2.jpg';
import avatar from '../../assets/images/jonash.jpg';
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import xlogo from '../../assets/images/x-icon.svg'
import linkedin from '../../assets/images/linkedin.svg'
import '../App.css'
import Album from '../../assets/Components/Album';
import luis from '../../assets/images/luis.jpg'
import janela from '../../assets/images/woman.png'
import joper from '../../assets/images/joper.jpg'
import plumberavatar from '../../assets/images/top-plumber.png'



const teamMembers = [
    {
        name: "Jonash Bundalian",
        role: "(Role Name)",
        location: "Los Angeles",
        image: avatar,
        bgColor: "bg-health"
    },
    {
        name: "Janela Pangan",
        role: "Cybersecurity",
        location: "Toronto, Canada",
        image: janela,
        bgColor: "bg-music"
    },
    {
        name: "Luis Jimenez",
        role: "Plumbing Engineer",
        location: "789 Oak St. City",
        image: luis,
        bgColor: "bg-engr"
    },
    {
        name: "Emily Davis",
        role: "(Role Name)",
        location: "San Francisco",
        image: plumberavatar,
        bgColor: "bg-food"
    },
    {
        name: "Michael Johnson",
        role: "(Role Name)",
        location: "Miami",
        image: plumberavatar,
        bgColor: "bg-justice"
    },
    {
        name: "Jessica Williams",
        role: "(Role Name)",
        location: "Austin",
        image: plumberavatar,
        bgColor: "bg-houseservice"
    },
    {
        name: "David Brown",
        role: "(Role Name)",
        location: "Seattle",
        image: plumberavatar,
        bgColor: "bg-merchant"
    },

];

const Joper = () => {
    return (
        <div className="w-full h-auto flex flex-col mt-20">
            <img className="w-full h-[25em] object-cover" src={coverphoto} alt="" />
            <nav className="relative lato w-full bg-white py-4 px-10 border-b border-gray-800 flex flex-row items-center justify-between">
                <ul className="w-full flex flex-row items-center justify-center gap-32 mr-20">
                    <li><a href="">News Feed</a></li>
                    <li><a href="">Dashboard</a></li>
                </ul>

                {/* Avatar centered in the navbar */}
                <img
                    className="absolute w-[14em] rounded-full border-primary border-4 object-cover h-auto"
                    src={joper}
                    alt=""
                    style={{
                        left: '50%',
                        transform: 'translateX(-50%)',
                        translateY: '-50%'
                    }}
                />

                <ul className="w-full flex flex-row justify-center gap-32 ml-20">
                    <li><a href="">Resume</a></li>
                    <li><a href="">BLOG</a></li>
                </ul>
            </nav>

            <div className="flex flex-col w-full items-center mt-24">
                <h1 className="text-xl font-medium tracking-wide">Joper Tupas</h1>
                <div className="flex flex-row gap-3 mt-2">
                    <img className="w-auto h-[1.6em] filter grayscale transition duration-300 hover:grayscale-0" src={facebook} alt="" />
                    <img className="w-auto h-[1.6em] filter grayscale transition duration-300 hover:grayscale-0" src={instagram} alt="" />
                    <img className="w-auto h-[1.6em] filter grayscale transition duration-300 hover:grayscale-0" src={xlogo} alt="" />
                    <img className="w-auto h-[1.6em] filter grayscale transition duration-300 hover:grayscale-0" src={linkedin} alt="" />
                </div>
            </div>

            <div className="px-20 my-10">
                <p className="text-lg text-justify font-medium lato tracking-wide leading-relaxed">A computer engineer who joined Breen Design Group in 2016.
                    He works with the Electrical department on low-voltage projects
                    and has extensive experience in network consulting and low-voltage
                    design, particularly for high-rise buildings, hospitals, commercial
                    properties, residential developments, and schools. He has been involved
                    in various aerospace projects around southern California and numerous
                    affordable housing projects over nearly a decade. In addition to his role
                    as a Low Voltage Designer, Jonash is also an in-house Solutions Cloud
                    Architect using Amazon Web Services and serves as a technology consultant
                    for Breen Design Group's clients. He has prior training in Cisco Technology
                    and holds a bachelor’s degree in computer engineering.</p>
            </div>



            <h1 className="w-full bg-[#666666] text-white text-center text-3xl p-4 font-bold">PORTFOLIO</h1>
            <div className="g-content g-grid my-10">
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

            <h1 className="text-[#666666] font-bold tracking-wide mt-10 mx-10 text-4xl">Albums</h1>
            <Album />

            <section className="w-full flex flex-col p-10">
                <h1 className="text-3xl font-bold text-[#666666] tracking-wide">Word of Mouth</h1>

                <div className="w-full grid grid-cols-3 gap-4 mt-10 flex-wrap">
                    {teamMembers.map((member, index) => (
                        <a href=''
                            key={index}
                            className={`${member.bgColor} flex p-10 flex-col items-center justify-center`}
                        >
                            <img
                                className="w-auto h-[10em] border-2 rounded-full border-white"
                                src={member.image}
                                alt={member.name}
                            />
                            <h1 className="text-xl font-bold lato mt-2 tracking-wide">
                                {member.name}
                            </h1>
                            <h1 className="text-lg font-medium lato mt-2 tracking-wide">
                                {member.role}
                            </h1>
                            <h1 className="text-lg font-medium lato mt-2 tracking-wide">
                                {member.location}
                            </h1>
                        </a>
                    ))}
                </div>

            </section>

        </div>
    );
}

export default Joper;
