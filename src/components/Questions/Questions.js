import React, { useState } from 'react';
import Options from '../Options/Options';

const Questions = ({ questions }) => {
    const { question, options, correctAnswer } = questions;
    // const [ans, setAns] = useState([])
    console.log(questions)

    const handleAnswer = (opt) => {

        if (correctAnswer === opt) {
            alert('True')
        }
        else {
            alert('False')
        }
    }

    const showAnswer = () => {
        console.log('Show Answer')
    }

    return (
        <div className='border-2 border-sky-500 rounded-3xl p-8 my-3 mx-60'>
            <h1 className='text-xl font-bold my-4'>{question}</h1>
            {
                options.map((options, idx) => <Options
                    key={idx}
                    options={options}
                    handleAnswer={handleAnswer}
                    showAnswer={showAnswer}
                ></Options>)
            }
        </div>
    );
};

export default Questions;