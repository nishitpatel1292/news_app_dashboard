import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Jan',
        newUsers: 200,
        newPosts: 100,
    },
    {
        name: 'Feb',
        newUsers: 230,
        newPosts: 150,
    },
    {
        name: 'March',
        newUsers: 250,
        newPosts: 170,
    },
    {
        name: 'April',
        newUsers: 300,
        newPosts: 180,
    },
    {
        name: 'May',
        newUsers: 275,
        newPosts: 130,
    },
    {
        name: 'June',
        newUsers: 320,
        newPosts: 150,
    },
];

const Chart1 = () => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 0,
                    bottom: 0,
                    left: 0,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="newUsers" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="newPosts" barSize={20} fill="#413ea0" />
                {/* <Line type="monotone" dataKey="newUsers" stroke="#ff7300" />
                <Scatter dataKey="newUsers" fill="red" /> */}
            </ComposedChart>
        </ResponsiveContainer>
    );

}
export default Chart1;