import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { logo, name, total, id } = quiz;
    return (
        <div className='flex items-center justify-between border-2 border-indigo-600 rounded-xl bg-slate-200'>
            <img className='h-40 rounded-xl' src={logo} alt="" />
            <div className='flex flex-col w-full justify-between items-stretch'>
                <div className='mb-4'>
                    <h1 className='font-bold lg:text-2xl'>Quiz Name: {name} </h1>
                    <p className=' font-medium lg:text-xl'>Total Questions: {total}</p>
                </div>
                <Link to={`quiz/${id}`}>
                    <button className='bg-indigo-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-yellow-400 hover:italic hover:font-bold hover:text-black'>Click Here</button>
                </Link>
            </div>

        </div >
    );
};

export default Quiz;