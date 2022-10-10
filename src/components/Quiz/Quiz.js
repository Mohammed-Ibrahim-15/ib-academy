import React from 'react';

const Quiz = ({ quiz }) => {
    return (
        <div className='border border-indigo-300 rounded-xl'>
            <h1>Quiz Name: {quiz.name} </h1>
        </div>
    );
};

export default Quiz;