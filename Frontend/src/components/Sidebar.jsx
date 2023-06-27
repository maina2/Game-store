import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStore, faList, faUser, faImages, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function SidebarTR() {
  return (
    <div>
      <Sidebar height="100%" width="100%" backgroundColor="inherit">
        <Menu>
          <MenuItem>
            <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} to="/">
              Home
              <FontAwesomeIcon icon={faHome} style={{ marginLeft: 'auto' }} />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} to="/Store">
              Store
              <FontAwesomeIcon icon={faStore} style={{ marginLeft: 'auto' }} />
            </Link>
          </MenuItem>

          <SubMenu backgroundColor="inherit" label="Categories">
            <MenuItem>
              <FontAwesomeIcon icon={faList} />
              Action
            </MenuItem>
            <MenuItem>
              <FontAwesomeIcon icon={faList} />
              Adventure
            </MenuItem>
            <MenuItem>
              <FontAwesomeIcon icon={faList} />
              Sports
            </MenuItem>
            <MenuItem>
              <FontAwesomeIcon icon={faList} />
              Role Playing Games
            </MenuItem>
          </SubMenu>

          <MenuItem>
            <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} to="/Profile">
              Profile
              <FontAwesomeIcon icon={faUser} style={{ marginLeft: 'auto' }} />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} to="/Gallery">
              Gallery
              <FontAwesomeIcon icon={faImages} style={{ marginLeft: 'auto' }} />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} to="/Logout">
              Logout
              <FontAwesomeIcon icon={faSignOutAlt} style={{ marginLeft: 'auto' }} />
            </Link>
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}







// import { Link } from "react-router-dom";
// import './sidebar.css'

// function Sidebar() {
//   return (
//     <div className="sidebar">
//       <Link to="/">Home</Link>
//       <Link to="/Store">Store</Link>
//       <Link to="/Profile">Profile</Link>
//       <Link to="/Gallery">Gallery</Link>
//       <Link to="/Logout">Logout</Link>

//     </div>
//   );
// }

// export default Sidebar;
