import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const data = useLoaderData().data;
    console.log(data)
    return (
        <div>
            <h2>Statistics</h2>
        </div>
    );
};

export default Statistics;