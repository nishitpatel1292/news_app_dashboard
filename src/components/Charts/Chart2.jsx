import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const Chart2 = () => {
    const data = [
        { name: 'Politics', value: 400 },
        { name: 'Sports', value: 300 },
        { name: 'Technology', value: 200 },
        { name: 'Science', value: 278 },
        { name: 'National', value: 189 },
    ];

    const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#0088FE'];

    return (
        <ResponsiveContainer width='100%' height='100%'>

            <PieChart width='80%' height='90%'>
                <Pie
                    data={data}
                    cx='50%'
                    cy='60%'
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    labelLine={false}
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}

                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            
                <Legend verticalAlign="top" height={26} />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default Chart2;

