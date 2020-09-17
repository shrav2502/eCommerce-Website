import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar1">
        <div>Logo</div>
        <ul className="options">
          <li>
            <div>
              <a href="#">
                <span>Women</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="#">
                <span>Men</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="#">
                <span>Kids</span>
              </a>
            </div>
          </li>
        </ul>
        <div>
          <input type="text" placeholder="search"></input>
          <a href="#">Cart</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
