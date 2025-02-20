import React, { useEffect, useState } from 'react';
import coin from '../../assets/images/missionappcoin.png';
import frontdesk from '../../assets/images/frontdesk.jpeg';
import bookkeeping from '../../assets/images/bookkeeping.jpg';
import socialmedhandler from '../../assets/images/socialmed.png';
import virtualassistant from '../../assets/images/virtualassistant.jpg';
import programming from '../../assets/images/programmer.jpg';
import entertainment from '../../assets/images/entertainment.png';
import callcenter from '../../assets/images/callcenter.jpg';
import Influencer from '../../assets/Components/Influencer-Section/Influencer';

const services = [
    { title: 'Front Desk Services', image: frontdesk, bgColor: '#ADD8E6' },
    { title: 'Bookkeeping', image: bookkeeping, bgColor: '#006400' },
    { title: 'Social Media Management', image: socialmedhandler, bgColor: '#800080' },
    { title: 'Virtual Assistance', image: virtualassistant, bgColor: '#008080' },
    { title: 'Programming', image: programming, bgColor: '#000080' },
    { title: 'Entertainment', image: entertainment, bgColor: '#FFA500' },
    { title: 'Call Center Services', image: callcenter, bgColor: '#c5cc00' },
];

const MarketPlacev2 = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [balance, setBalance] = useState('$0');
    const [membership, setMembership] = useState('None');

    useEffect(() => {

        const token = localStorage.getItem('authToken');

        if (token) {
            setIsLoggedIn(true);
            setBalance('$100,000');
            setMembership('Bronze');
        }
    }, []);

    return (
        <div className="min-h-screen mt-20 w-full flex flex-col items-center">

            <div className="w-full flex flex-row justify-between items-center bg-white p-6">


                <div className="flex flex-col items-center">
                    {isLoggedIn && (
                        <a className="bg-primary px-6 py-1 text-white rounded-lg mb-2" href="/wallet">My Wallet</a>
                    )}
                    <h1 className="text-center font-medium">My Balance:</h1>
                    <p className="text-primary font-bold text-center">{balance}</p>
                </div>


                <div className="flex flex-col items-center">
                    <h1 className="text-center font-medium">Membership</h1>
                    {isLoggedIn && <img className="w-[3.5em] mb-1" src={coin} alt="Membership Coin" />}
                    <p className="text-primary font-bold text-sm text-center">{membership}</p>
                </div>


                <div className="flex flex-col items-center">
                    <h1 className="text-center font-medium">Subscription</h1>
                </div>

            </div>


            <div className="lg:w-[70em] py-10 px-5 flex flex-col">
                <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                        <a href="/comingsoonpage" key={index} className="w-full p-4 flex flex-col" style={{ backgroundColor: service.bgColor }}>
                            <img className="h-[12em] object-cover" src={service.image} alt={service.title} />
                            <div className="flex flex-col items-center">
                                <h1 className="mt-4 text-white font-bold">{service.title}</h1>
                            </div>
                        </a>
                    ))}
                </div>
            </div>


            <Influencer />
        </div>
    );
};

export default MarketPlacev2;
