import React, { useEffect } from 'react';
import './ContactUs.css';
import plumberman from '../../images/pngegg.png';

const ContactUs = () => {
  useEffect(() => {
    const leftElement = document.querySelector('.left');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          leftElement.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 }); 

    observer.observe(leftElement);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <section className="question-section">
        <div className="question-container">
          <div className="left">
            <img src={plumberman} alt="" />
          </div>
          <div className="right">
            <form className="lato bg-white p-10 flex justify-center items-center flex-col rounded-xl ">
              <h1 className="text-lg font-bold tracking-wider ">Contact Us</h1>
              <h1 className="text-2xl font-bold tracking-wider text-primary ">Have questions?
                Get in touch</h1>
              <div className="flex flex-warp my-6 w-full items-center mt-10">
                <label className="w-1/2 text-sm font-bold " htmlFor="">Name:</label>
                <input className="w-full h-[2em] p-2 border border-gray-400 rounded-lg" type="text" />

              </div>
              <div className="flex flex-warp w-full items-center">
                <label className="w-1/2 text-sm font-bold " htmlFor="">Email:</label>
                <input className="w-full h-[2em] p-2 border border-gray-400  rounded-lg" type="email" />

              </div>
              <div className="flex flex-warp my-6  w-full items-center">
                <label className="w-1/2 text-sm font-bold " htmlFor="">Message:</label>
                <textarea className="w-full h-[5em] p-2 border border-gray-400  rounded-lg" type="text" />
              
              </div>
<div className="bg-primary w-full h-px mt-10"></div>
              <button className="w-1/2 px-4 py-2 bg-primary text-secondary mt-4">Submit</button>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
