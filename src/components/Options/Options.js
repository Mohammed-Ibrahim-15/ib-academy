import React from 'react';
import { ToastContainer } from 'react-toastify';

const Options = ({ options, handleAnswer }) => {
    // console.log(options)
    return (
        <div>
            <li onClick={() => handleAnswer(options)} className='text-xl font-semibold text-slate-600 hover:text-yellow-500 hover:font-extrabold hover:italic cursor-pointer'>{options}</li>
            <ToastContainer position="top-center" autoClose={1000} />
        </div>
    );
};

export default Options;