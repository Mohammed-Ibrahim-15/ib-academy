import React, { useState } from 'react';
import Options from '../Options/Options';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({ questions }) => {
    const { question, options, correctAnswer } = questions;
    const [showAns, setShowAns] = useState([false])
    // console.log(questions)

    const handleAnswer = (opt) => {

        if (correctAnswer === opt) {
            toast.success('YAY!!  Correct Answer...')
        }
        else {

            toast.error('OPPS!!  Wrong Answer...')

        }
    }
    return (
        <div className='border-2 border-indigo-600 rounded-3xl p-8 my-3 mx-1/2 mx-12'>
            <h1 className='text-xl font-bold my-4'>{question}</h1>
            {
                options.map((options, idx) => <Options
                    key={idx}
                    options={options}
                    handleAnswer={handleAnswer}
                ></Options>)
            }
            <div onClick={() => setShowAns(!showAns)} className='flex flex-col items-center justify-center mt-2 hover:bg-slate-200 cursor-pointer'>
                {
                    showAns ?
                        <EyeIcon className="h-6 w-6 text-indigo-700 my-3" />
                        :
                        <h1 className='font-semibold my-3'>Correct Answer: <span className=' font-serif text-blue-500'>{correctAnswer}</span> </h1>
                }

            </div>
        </div>
    );
};

export default Questions;