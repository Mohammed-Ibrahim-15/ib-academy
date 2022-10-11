import React from 'react';
import { LineChart, Line } from 'recharts';

const Graph = ({ data }) => {
    const { total, name } = data
    return (
        <div>
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey={total} stroke="#8884d8" />
            </LineChart>

        </div>
    );
};

export default Graph;