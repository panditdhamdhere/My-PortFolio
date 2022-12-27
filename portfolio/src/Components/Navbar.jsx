import React, { useState } from 'react'
import { FaBars, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
const Navbar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'contact'
        },

    ];

    return (
        <div className='flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed'>
            <div>
                <h1 className='text-5xl font-signature ml-1'>Pandit</h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li
                        key={id} className='px-4 cursor-pointer capitalize font-medium text-blue-500 hover:scale-105 duration-200'
                    >
                        {link}
                    </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav) } className='cursor-pointer pr-4 z-10 text-blue-500'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} /> }
            </div>
        </div>
    );
};

export default Navbar
