import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    return (
        <div className='bg-gray-300 lg:flex justify-between w-full md:static px-10 py-6'>
            <div className='flex sm:items-center justify-center mb-4 lg:my-0 '>
                <div>
                    <BookOpenIcon className="h-8 w-8 text-black" />
                </div>
                <h2 className='text-2xl font-bold'>IB Academy</h2>
            </div>
            <nav>
                <Link className='mr-4 hover:text-orange-600' to='/'>Home</Link>
                <Link className='mr-4 hover:text-orange-600' to='/statistics'>Statistics</Link>
                <Link className='mr-4 hover:text-orange-600' to='/blog'>Blog</Link>
            </nav>

        </div>
    );
};

export default NavBar;