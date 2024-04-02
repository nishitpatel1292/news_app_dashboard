import { Link, useLocation } from 'react-router-dom'
import './Sidebar.scss'
import { useState } from 'react'
import { DashboardOutlined, EditOutlined, KeyboardDoubleArrowRight } from '@mui/icons-material';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';


const Sidebar = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [active, setActive] = useState('/')

  return (
    <div className='sidebar'>
      <div className='top' >
        <Link href={'/'}>
          <img src="/Images/large-logo.jpg" alt="News2day" className="logo" />
        </Link>
        <div className="arrow-btn">
          <KeyboardDoubleArrowRight />
        </div>
      </div >

      <div className='middle'>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to={'/'}>
              <DashboardOutlined />
              Dashboard
            </Link>
          </li>
          <li className={location.pathname === '/create-news' ? 'active' : ''}>
            <Link to={'/create-news'}>
              <NoteAltOutlinedIcon />
              Create News
            </Link>
          </li>
          <li className={location.pathname === '/manage-news' ? 'active' : ''}>
            <Link to={'/manage-news'}>

              <TocOutlinedIcon />
              Manage News
            </Link>
          </li>
          <li className={location.pathname === '/performance' ? 'active' : ''}>
            <Link to={'/performance'}>
              <AutoGraphOutlinedIcon />
              Performance
            </Link>
          </li>
        </ul>
      </div>
    </div >
  )
}

export default Sidebar