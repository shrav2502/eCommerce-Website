import React from "react";
import "./Maincontent.css";
import Womendata from "../Womendata";
import { Button } from "reactstrap";

class Maincontent extends React.Component {
  render() {
    // console.log(this.props.data);
    return (
      <div className="main">
        <div>{this.props.data.title}</div>
        <img src={this.props.data.img} alt="image" />
        <div className="description">
          <div>{this.props.data.description}</div>
          <div>Rs. {this.props.data.price}</div>
        </div>

        <Button color="warning">Add to Cart</Button>
      </div>
    );
  }
}
export default Maincontent;
