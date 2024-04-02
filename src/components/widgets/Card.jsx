import React from 'react'
import {  Diversity3Outlined, KeyboardArrowUp, PersonOutlineRounded, ThumbUp, Visibility } from '@mui/icons-material'

import Chart from './Chart'

const Card = ({ type }) => {
    let data;

    switch (type) {
        case "user":
            data = {
                title: 'Users',
                value: 21500,
                link: 'See all users',
                perDiff: 2,
                icon: <PersonOutlineRounded/>,
                chartData: [
                    {
                        uv: 1000
                    },
                    {
                        uv: 8000,
                        
                    },
                    {
                        uv: 25000,
                        
                    },
                    {
                        uv: 19000,
                       
                    },
                    {
                        uv: 21500,
                       
                    },
                ]
            }
            break;
        case "views":
            data = {
                title: 'Views',
                value: 150245,
                link: 'See all views',
                perDiff: -5,
                icon: <Visibility/>,
                chartData: [
                    {
                        uv: 45000,
                        pv: 2400000,
                        amt: 40000,
                    },
                    {
                        uv: 80000,
                        pv: 2300000,
                        amt: 38000,
                    },
                    {
                        uv: 250000,
                        pv: 2500000,
                        amt: 42000,
                    },
                    {
                        uv: 180000,
                        pv: 2500000,
                        amt: 42000,
                    },
                ]
            }
            break;
        case "likes":
            data = {
                title: 'Likes',
                value: 450456,
                link: 'See all likes',
                perDiff: +2,
                icon: <ThumbUp/>,
                chartData: [
                    {
                        uv: 100456,
                        pv: 24000,
                        amt: 40000,
                    },
                    {
                        uv: 300456,
                        pv: 23000,
                        amt: 38000,
                    },
                    {
                        uv: 320456,
                        pv: 25000,
                        amt: 42000,
                    },
                ]
            }
            break;
        case "followers":
            data = {
                title: 'Followers',
                value: 148965,
                link: 'See all followers',
                perDiff: +36,
                icon: <Diversity3Outlined/>,
                chartData: [
                    {
                        uv: 8965,
                        pv: 2400000,
                        amt: 40000,
                    },
                    {
                        uv: 88965,
                        pv: 2300000,
                        amt: 38000,
                    },
                    {
                        uv: 108965,
                        pv: 2500000,
                        amt: 42000,
                    },
                    {
                        uv: 148965,
                        pv: 2500000,
                        amt: 42000,
                    },
                ]
            }
            break;
    }
    
    

    return (
        <div className="widget">
            <Chart data={data.chartData} color={`${data.perDiff > 0 ? '#97dbb9' : '#e5a2b4'}`} />
            <div className="widget-content">
                <div className="left">
                    <span className="title">{data.title}</span>
                    <span className="value">{data.value}</span>
                    <div className="link">{data.link}</div>
                </div>
                <div className="right">
                    <div className={`rate ${data.perDiff > 0 ? 'positive' : 'negative'}`}>

                        <KeyboardArrowUp /> {data.perDiff}<div style={{ fontSize: '14px' }}>%</div>
                    </div>
                    <span className="icon">
                        {data.icon}
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Card