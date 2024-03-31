import React, { useState } from 'react'
import './Navbar.scss'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import { SearchOutlined } from '@mui/icons-material';
const Navbar = () => {

  return (
    <div className='navbar'>
      <div className="wrapper">

        <div className="search">
          <label htmlFor="search">

            <div className="search-icon">
              <SearchOutlined fill='gray' />
            </div>
          </label>

          <input type="search" name="search" className='input-search' id="search"
            placeholder='Search...'
          />
        </div>
        <div className="navbar_right_items">
          <div className="theme item">
            <DarkModeOutlinedIcon className='icon' />

          </div>
          <div className="full-screen item"><FullscreenOutlinedIcon className='icon' /></div>
          <div className="avatar-wrapper item">
            <img src="/Images/logo.webp" alt="profile" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar