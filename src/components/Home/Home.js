import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizs = useLoaderData().data;
    // console.log(quizs)
    return (
        <div className='  bg-gray-100 pb-20'>
            <Header></Header>
            <div className='mx-4 my-8 grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                {
                    quizs.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>

        </div>
    );
};

export default Home;