import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie } from 'recharts';

const Statistics = () => {
    const data = useLoaderData().data;
    console.log(data)
    return (
        <div className='bg-gray-100 pb-4'>
            <h2 className='text-3xl font-bold py-6 mb-6 text-indigo-600'>Our Quiz Statistics</h2>
            <div className='flex justify-center items-center flex-col pr-12'>
                <div>
                    <ResponsiveContainer width={400} height={400}>
                        <LineChart width={400} height={400} data={data}>
                            <Line type="monotone" dataKey={"total"} stroke="#8884d8" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    </ResponsiveContainer>
                    <h1 className='text-lg font-semibold'>Figure: Line Graph</h1>
                </div>
                <div>
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="total"
                            isAnimationActive={false}
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        />
                        <Pie dataKey="total" data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                        <Tooltip />
                    </PieChart>
                    <h1 className='text-lg font-semibold'>Figure: Pie Chart</h1>
                </div>
            </div>
        </div>
    );
};

export default Statistics;