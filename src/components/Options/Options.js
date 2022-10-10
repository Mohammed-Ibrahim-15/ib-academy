import React from 'react';

const Options = ({ options, handleAnswer, showAnswer }) => {
    return (
        <div>
            <li onClick={() => handleAnswer(options)} className='font-semibold text-slate-500 hover:text-yellow-600 cursor-pointer'>{options}</li>

        </div>
    );
};

export default Options;