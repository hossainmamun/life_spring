import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import brand from '../../image/life_spring_logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    let Links = [
        { name: 'PROFESSIONALS', link: '/' },
        { name: 'SERVICE', link: '/' },
        { name: 'COURSE', link: '/' },
        { name: 'BLOGS', link: '/' },
        { name: 'TESTIMONIAL', link: '/' },
        { name: 'LOGIN', link: '/' },
        { name: 'REGISTER', link: '/' }
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className=' w-full fixed top-0 left-0 z-10'>
            <div className='font-bold font-mono lg:flex items-center justify-between bg-white py-2 lg:px-10 px-7'>
                <div>
                    <span>
                        <img src={brand} alt='brand img' className='w-44' />
                    </span>
                </div>

                <div
                    onClick={() => setOpen(!open)}
                    className='text-4xl absolute right-8 top-4 cursor-pointer lg:hidden'>
                    {open ? <CloseIcon /> : <MenuIcon />}
                </div>

                <ul
                    className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
                        open ? 'top-20 ' : 'top-[-490px]'
                    }`}>
                    {Links.map((link) => (
                        <li
                            key={link.name}
                            className='lg:ml-8 text-base lg:my-0 my-7'>
                            <Link
                                to={link.link}
                                className='text-gray-800 hover:text-green-400 duration-200'>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
