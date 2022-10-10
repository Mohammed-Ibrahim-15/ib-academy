import React, { useState } from 'react';
import Options from '../Options/Options';
import { EyeIcon } from '@heroicons/react/24/solid'

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
            <div className='flex flex-col items-center justify-center mt-2'>
                <EyeIcon onClick={showAnswer} className="h-6 w-6 text-blue-500 my-3" />
                <h1 className='hidden'>Correct Answer: <span className=' font-serif text-orange-600'>{correctAnswer}</span> </h1>
            </div>

        </div>
    );
};

export default Questions;