import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { logo, name, total, id } = quiz;
    return (
        <div className='flex items-center content-end border-2 border-indigo-500 rounded-xl'>
            <img className='h-40 rounded-xl' src={logo} alt="" />
            <div className='ml-24 mb-4'>
                <div className='mb-20'>
                    <h1 className='text-2xl font-bold'>Quiz Name: {name} </h1>
                    <p className='text-xl font-medium'>Total Quiz: {total}</p>
                </div>
                <Link to={`quiz/${id}`}>
                    <button className='bg-indigo-500 font-medium px-6 py-2 rounded-lg hover:bg-yellow-600'>Click Here</button>
                </Link>
            </div>

        </div >
    );
};

export default Quiz;