import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizs = useLoaderData().data;
    console.log(quizs)
    return (
        <div>
            <Header></Header>
            <h2>Home {quizs.length}</h2>
            <div className='mx-4 grid grid-cols-2 gap-4 h-96'>
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