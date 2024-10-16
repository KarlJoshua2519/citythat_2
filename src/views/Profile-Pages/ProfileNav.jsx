import React from 'react'
import logo from '../../assets/images/citythatlogo.png'

const ProfileNav = () => {
  return (
   <nav className="w-full fixed top-0 p-4 flex flex-row justify-between items-center bg-white z-50">
    <img className="w-auto h-[3.5em]" src={logo} alt="" />

    <ul className="flex flex-row gap-6 items-center">
    <li><a className="bg-gray-400 p-2 rounded-full text-2xl font-bold text-gray-600" href="">CG</a></li>
    <li><a className="bg-gray-400 p-2 rounded-full text-2xl font-bold text-gray-600" href="">JB</a></li>

    </ul>
   </nav>
  )
}

export default ProfileNav
