import React from 'react';
import { ToastContainer } from 'react-toastify';

const Options = ({ options, handleAnswer }) => {
    return (
        <div>
            <li onClick={() => handleAnswer(options)} className='font-semibold text-slate-500 hover:text-yellow-500 cursor-pointer'>{options}</li>
            <ToastContainer position="top-center" autoClose={1000} />
        </div>
    );
};

export default Options;