import React from 'react';

const Blog = () => {
    return (
        <section className='bg-gray-100 pb-20'>
            <h1 className='text-3xl font-bold text-indigo-600 py-6'>Blog of Our Academy</h1>
            <div className='  grid p-8 grid-cols-1 gap-6 lg:grid-cols-3'>
                <div className=' bg-slate-200 border-2 rounded-xl border-indigo-600 p-4'>
                    <h1 className='text-2xl font-semibold text-indigo-600 p-3'>
                        What is the purpose of react router?
                    </h1>
                    <h2 className='mt-4 font-semibold'>
                        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    </h2>
                </div>
                <div className='bg-slate-200 border-2 rounded-xl border-indigo-600 p-4'>
                    <h1 className='text-2xl font-semibold text-indigo-600 p-3'>
                        How does react content API works ?
                    </h1>
                    <h2 className='mt-4 font-semibold'>
                        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                    </h2>
                </div>
                <div className='bg-slate-200 border-2 rounded-xl border-indigo-600 p-4'>
                    <h1 className='text-2xl font-semibold text-indigo-600 p-3'>
                        What is useRef hook ?
                    </h1>
                    <h2 className='mt-4 font-semibold'>
                        The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Blog;