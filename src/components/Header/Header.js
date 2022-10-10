import React from 'react';
import logo from './Header.jpg'

const Header = () => {
    return (
        <div className='relative'>
            <img className='w-full bg-transparent opacity-40' src={logo} alt="" />
            <h1 className='font-bold text-indigo-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-2xl lg:text-6xl'>Welcome To Our Academy</h1>
            <p className='font-semibold absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-xs lg:text-base'>This is our largest quiz institution in online platform. Anyone can access our quiz and check his/her ability on this specific topic. You can easily evaluate yourself by click on quiz option. Good Luck !!  </p>
        </div>
    );
};

export default Header;