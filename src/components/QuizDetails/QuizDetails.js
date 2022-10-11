import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizDetails = () => {
    const quiz = useLoaderData().data;
    const questions = useLoaderData().data.questions;
    return (
        <div className='pt-2 bg-gray-100'>
            <h1 className='text-indigo-600 text-3xl font-bold my-6'>Quiz of {quiz.name} </h1>
            {
                questions.map(questions => <Questions
                    key={questions.id}
                    questions={questions}
                ></Questions>)
            }
        </div>
    );
};

export default QuizDetails;