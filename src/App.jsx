import { Outlet } from 'react-router-dom'
import '@/styles/App.scss'
import './App.css'

import Sidebar from '@/components/Sidebar/Sidebar'
import Navbar from '@/components/Navbar/Navbar'
// import Home from '@/components/Home'
function App() {

  return (
    <div className='app'>
      <Sidebar />
      <div className='app-container'>
        <Navbar />
        {/* All the pages will be rendered in here: main-content */}
        <div className='main-content'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
