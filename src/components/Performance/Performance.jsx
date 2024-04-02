import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Performance = () => {
    // Sample data for demonstration purposes
    const data = [
        { date: '2022-01-01', views: 100, likes: 50, engagementRate: 0.5 },
        { date: '2022-01-02', views: 150, likes: 75, engagementRate: 0.6 },
        { date: '2022-01-03', views: 200, likes: 100, engagementRate: 0.7 },
        // Add more data points here
    ];

    return (
        <div style={{padding:'20px'}}>
            <h2 className='mb-5'>Performance Metrics</h2>
            <LineChart width={800} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="views" stroke="#8884d8" />
                <Line type="monotone" dataKey="likes" stroke="#82ca9d" />
                <Line type="monotone" dataKey="engagementRate" stroke="#ffc658" />
            </LineChart>
        </div>
    );
};

export default Performance;