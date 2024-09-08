import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropDownOpen, setisProfileDropDownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setisProfileDropDownOpen(!isProfileDropDownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              onClick={() => handleMenuClick(0)}
              style={{ textDecoration: "none" }}
              to="/"
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleMenuClick(1)}
              style={{ textDecoration: "none" }}
              to="/orders"
            >
              <p
                className={setSelectedMenu === 1 ? activeMenuClass : menuClass}
              >
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleMenuClick(3)}
              style={{ textDecoration: "none" }}
              to="/holdings"
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleMenuClick(4)}
              style={{ textDecoration: "none" }}
              to="/positions"
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleMenuClick(5)}
              style={{ textDecoration: "none" }}
              to="/funds"
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleMenuClick(6)}
              style={{ textDecoration: "none" }}
              to="/apps"
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div onClick={() => handleProfileClick} className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
