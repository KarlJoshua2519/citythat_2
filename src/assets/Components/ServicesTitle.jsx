import React, { useEffect } from 'react';
import pencil from '../images/pencil.svg'

const ServicesTitle = () => {
    
    useEffect(() => {
        const servicesSection = document.querySelector('.services-section');
        const servicesContainer = document.querySelector('.services-container');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    servicesContainer.classList.add('animate');
                    observer.unobserve(servicesSection);
                }
            });
        }, {
            threshold: 0.1
        });

        observer.observe(servicesSection);


        return () => observer.disconnect();
    }, []);


  return (
    <div className="relative services-container flex flex-col lato items-center">

    <h1 className="font-bold text-sm tracking-wide text-[#666666]">TOP SERVICES IN YOUR LOCATION</h1>
    <h1 className=" text-3xl tracking-wider mt-2 font-bold  text-gray-700">PIPE REPAIR 24/7</h1>
    <div className="line-container mt-2">
        <svg height={10} width={200} className="pencil-line">
            <line x1={0} y1={5} x2={200} y2={5} style={{ stroke: '#b85b00', strokeWidth: 2 }} />
        </svg>
        <img className=" absolute top-[3.3em] left-[2em] pencil" src={pencil} alt="" />
    </div>
</div>
  )
}

export default ServicesTitle
