import React from 'react';
import Options from '../Options/Options';

const Questions = ({ questions }) => {
    const { question, options, correctAnswer } = questions;
    console.log(questions)
    console.log(options)

    return (
        <div>
            <h1>{question}</h1>
            {
                options.map(options => <Options
                    options={options}
                ></Options>)
            }
        </div>
    );
};

export default Questions;