import React from 'react'
import './Dashboard.scss'
import Card from '../widgets/Card'
import Chart1 from '../Charts/Chart1'
import Chart2 from '../Charts/Chart2'



// import Widget from '../widgets/widget'


const Dashboard = () => {

  return (
    <div className='dashboard'>
      <div className="widgets">
        <Card type={'user'} />
        <Card type={'views'} />
        <Card type={'likes'} />
        <Card type={'followers'} />
      </div>

      <div className="dashboard-charts">
        <div className="chart1" style={{ width: '70%', height: '55vh' }}>
          <div className="chart1-title">
            <h2 style={{ padding: '10px 20px' }}>Users
              Growth</h2>

          </div>
          <div style={{ width: '100%', height: '40vh' }}>
            <Chart1 />
          </div>
        </div>
        <div className="chart2" style={{ width: '30%', height: '55vh' }}>
          <div className="chart1-title">
            <h2 style={{ padding: '10px 20px' }}>Category
              </h2>

          </div>
          <div  style={{ width: '100%', height: '40vh' }}>
            <Chart2 />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard