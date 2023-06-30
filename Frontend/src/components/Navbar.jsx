import React from 'react'
import './navbar.css'
import { Context } from "../context/userContext/Context";
import { useContext } from "react";
import Profile from '../pages/Profile';
import { Link } from 'react-router-dom';


function Navbar() {
  const { user } = useContext(Context);

  return (
    <div className='navbar'>
      <div className="icon">
        <img width="48" height="48" src="https://img.icons8.com/fluency/48/ps-controller.png" alt="ps-controller" />
        <p>Remy Games</p>
      </div>
      <div className="message">
        <p>Good day {user?.username || ''}!</p>
      </div>
      <div className="profile">
        <Link to="/Profile">
          <img width="55" height="55" src="https://img.icons8.com/fluency/48/dog-profile.png" alt="dog-profile" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
