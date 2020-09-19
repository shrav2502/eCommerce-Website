import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar1">
        <div>Logo</div>
        <ul className="options">
          <li>
            <div>
              <Link to="/women">
                <span>Women</span>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/men">
                <span>Men</span>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/kids">
                <span>Kids</span>
              </Link>
            </div>
          </li>
        </ul>
        <div>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            className="input"
            size="small"
          />
          <a href="#">Cart</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
