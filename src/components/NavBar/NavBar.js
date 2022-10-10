import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='bg-gray-300 lg:flex justify-between w-full md:static px-10 py-6'>
            <div>
                <h2>Website name</h2>
            </div>
            <nav>
                <Link className='mr-4' to='/'>Home</Link>
                <Link className='mr-4' to='/statistics'>Statistics</Link>
                <Link className='mr-4' to='/blog'>Blog</Link>
            </nav>

        </div>
    );
};

export default NavBar;