import React from 'react';
import logo from './Header.jpg'

const Header = () => {
    return (
        <div className='relative'>
            <img className='w-full bg-transparent opacity-40' src={logo} alt="" />
            <h1 className='font-bold italic text-indigo-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl lg:text-7xl'>Welcome To Our Academy</h1>
        </div>
    );
};

export default Header;