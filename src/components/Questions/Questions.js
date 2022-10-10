import React, { useState } from 'react';
import Options from '../Options/Options';
import { EyeIcon } from '@heroicons/react/24/solid'

const Questions = ({ questions }) => {
    const { question, options, correctAnswer } = questions;
    const [showAns, setShowAns] = useState([false])
    // console.log(questions)

    const handleAnswer = (opt) => {

        if (correctAnswer === opt) {
            alert('True')
        }
        else {
            alert('False')
        }
    }
    return (
        <div className='border-2 border-sky-500 rounded-3xl p-8 my-3 mx-1/2 mx-12'>
            <h1 className='text-xl font-bold my-4'>{question}</h1>
            {
                options.map((options, idx) => <Options
                    key={idx}
                    options={options}
                    handleAnswer={handleAnswer}
                ></Options>)
            }
            <div onClick={() => setShowAns(!showAns)} className='flex flex-col items-center justify-center mt-2 hover:bg-gray-100 cursor-pointer'>
                {
                    showAns ?
                        <EyeIcon className="h-6 w-6 text-blue-500 my-3" />
                        :
                        <h1 className='font-semibold my-3'>Correct Answer: <span className=' font-serif text-blue-500'>{correctAnswer}</span> </h1>
                }

            </div>
        </div>
    );
};

export default Questions;