import React from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../context/userContext/Context";
import { useContext } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGun,
  faStore,
  faFutbol,
  faTree,
  faJetFighterUp,
  faUser,
  faRightToBracket,
  faSignOutAlt,
  faShoppingCart // Add the cart icon
} from '@fortawesome/free-solid-svg-icons';

export default function SidebarTR() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div>
      <Sidebar height="100%" width="100%" backgroundColor="inherit">
        <Menu>
          <MenuItem>
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
              activeClassName="active"
            >
              Home
              <FontAwesomeIcon icon={faHome} style={{ marginLeft: "auto" }} />
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/Signup"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
              activeClassName="active"
            >
              Sign up
              <FontAwesomeIcon
                icon={faRightToBracket}
                style={{ marginLeft: "auto" }}
              />
            </NavLink>
          </MenuItem>
          {user && (
            <>
              <MenuItem>
                <NavLink
                  to="/Store"
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                  activeClassName="active"
                >
                  Store
                  <FontAwesomeIcon
                    icon={faStore}
                    style={{ marginLeft: "auto" }}
                  />
                </NavLink>
              </MenuItem>

              <SubMenu label="Categories">
                <MenuItem>
                  <NavLink
                    to="/Action"
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                    }}
                    activeClassName="active"
                  >
                    Action
                    <FontAwesomeIcon
                      icon={faJetFighterUp}
                      style={{ marginLeft: "auto" }}
                    />
                  </NavLink>
                </MenuItem>

                <MenuItem>
                  <NavLink
                    to="/Adventure"
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                    }}
                    activeClassName="active"
                  >
                    Adventure
                    <FontAwesomeIcon
                      icon={faTree}
                      style={{ marginLeft: "auto" }}
                    />
                  </NavLink>
                </MenuItem>

                <MenuItem>
                  <NavLink
                    to="/Sports"
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                    }}
                    activeClassName="active"
                  >
                    Sports
                    <FontAwesomeIcon
                      icon={faFutbol}
                      style={{ marginLeft: "auto" }}
                    />
                  </NavLink>
                </MenuItem>

                <MenuItem>
                  <NavLink
                    to="/Role Playing Games"
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                    }}
                    activeClassName="active"
                  >
                    RPG
                    <FontAwesomeIcon
                      icon={faGun}
                      style={{ marginLeft: "auto" }}
                    />
                  </NavLink>
                </MenuItem>
              </SubMenu>

              <MenuItem>
                <NavLink
                  to="/Profile"
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                  activeClassName="active"
                >
                  Profile
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ marginLeft: "auto" }}
                  />
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink
                  to="/Cart" 
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                  activeClassName="active"
                >
                  Cart
                  <FontAwesomeIcon
                    icon={faShoppingCart} 
                    style={{ marginLeft: "auto" }}
                  />
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink
                  onClick={handleLogout}
                  to="/Logout"
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                  activeClassName="active"
                >
                  Logout
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    style={{ marginLeft: "auto" }}
                  />
                </NavLink>
              </MenuItem>
            </>
          )}
        </Menu>
      </Sidebar>
    </div>
  );
}
