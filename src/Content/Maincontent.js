import React from "react";
import "./Maincontent.css";
import Womendata from "../Womendata";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class Maincontent extends React.Component {
  handleClick = () => {
    // console.log(this.props.data.title);
    const val = {
      title: this.props.data.title,
      description: this.props.data.description,
      price: this.props.data.price,
    };

    this.props.handleInfo(val);
  };

  render() {
    const styletitle = {
      fontSize: "18px",
      textTransform: "capitalize",
      fontFamily: "SourceSansPro",
      color: "#b19975",
    };

    return (
      <div className="main">
        <Link to="/description">
          <a href="#" className="view" onClick={this.handleClick}>
            <img
              src={this.props.data.img}
              alt="image"
              style={{ position: "relative" }}
            />
            <div className="viewDiv">Quick View</div>
          </a>
        </Link>
        <div style={styletitle}>{this.props.data.title}</div>
        <div>{this.props.data.description}</div>
        <div style={{ fontWeight: "bold" }}>Rs. {this.props.data.price}</div>

        <Button color="warning">Add to Cart</Button>
      </div>
    );
  }
}
export default Maincontent;
