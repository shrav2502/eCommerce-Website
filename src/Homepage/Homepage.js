import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../Maincontent/Maincontent";
import "./Homepage.css";

class Homepage extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Sidebar />
        <MainContent />
      </div>
    );
  }
}
export default Homepage;
