import React from "react";
import Navbar from "./Navbar/Navbar";
import "./App.css";
import Sidebar from "./Content/Sidebar";
import "./women.css";
import Maincontent from "./Content/Maincontent";
import Content from "./Content/Content";
import Womendata from "./Womendata";

class Women extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.setState({
      data: Womendata,
    });
  }
  render() {
    const womenwear = this.state.data.map((data) => {
      return <Maincontent data={data} key={data.id} />;
    });

    return (
      <div className="women">
        <Navbar />
        <Content />
        <div className="items">{womenwear}</div>
      </div>
    );
  }
}

export default Women;
