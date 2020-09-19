import React from "react";
import Maincontent from "./Maincontent";
import Sidebar from "./Sidebar";
import "./Content.css";

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Sidebar />
      </div>
    );
  }
}

export default Content;
