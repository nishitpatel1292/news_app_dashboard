import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const Chart = ({data,color}) => {
  return (
    <div className='chart'>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="name" />
      <YAxis /> */}
          {/* <Tooltip /> */}
          <Area type="monotone" dataKey="uv" stroke={color} fill={color} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
