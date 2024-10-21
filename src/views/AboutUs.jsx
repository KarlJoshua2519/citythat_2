import React from 'react'
import banner from '../assets/images/banner.jpg'
import coingif from '../assets/images/missionappcoin.gif'
import mlogo from '../assets/images/mlogo.png'

const AboutUs = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center my-20">
            <img className=" w-full h-[30em] object-cover" src={banner} alt="" />
            <div className="flex w-full flex-row items-center justify-center p-6 mt-10 gap-10">
                <h1 className="w-full text-center text-2xl">About <br />
                    <strong className='text-primary'>CityThat</strong></h1>
                <div className="w-full">
                    <p className="w-2/3 text-justify text-[#666666] text-sm tracking-wider leading-relaxed">CityThat is a global workforce network mobile application that serves,
                        (as its target members), white-collar and blue-collar small businesses,
                        self-employed individuals, and freelancers. CityThat’s ambition is to
                        become an important daily outlet for all its members; with the goal of
                        having its members remain active and relevant in the workforce and to
                        have a sense that they are a part of a united and diverse workforce community.</p>
                </div>

            </div>


            <div className="flex w-full flex-row items-center justify-center p-10 gap-10">
                <div className="w-full flex flex-col ml-20 ">
                    <div className="flex flex-row items-end">

                        <img className="w-auto h-[2em]" src={mlogo} alt="" />
                        <p className="text-primary font-bold text-xl">ission Application</p></div>

                    <p className="text-[#666666] text-sm tracking-wider leading-relaxed text-justify mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ab necessitatibus earum
                        ipsam, consequuntur itaque dignissimos, temporibus, officia fugit culpa incidunt aut quaerat
                        officiis ut vero dolore eos non eligendi? Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Est provident dolorum cumque praesentium. Amet quasi modi fugiat, illo itaque corporis
                        mollitia? Quam quia expedita quae est sapiente quisquam pariatur voluptate.</p>
                </div>

                <div className="w-full flex items-center justify-center ">
                    <img className="w-auto h-[35em]" src={coingif} alt="" />
                </div>

            </div>

        </div>
    )
}

export default AboutUs
