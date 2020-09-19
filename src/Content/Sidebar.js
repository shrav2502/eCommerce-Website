import React, { useState } from "react";
import "./Sidebar.css";
import {
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Button,
} from "@material-ui/core";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <h4>filter by</h4>
        <FormControl className="form" variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">Size</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>XS</MenuItem>
            <MenuItem value={20}>X</MenuItem>
            <MenuItem value={30}>M</MenuItem>
            <MenuItem value={40}>L</MenuItem>
            <MenuItem value={50}>XL</MenuItem>
            <MenuItem value={60}>XXL</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="form" variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">
            Occasion
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Athletic</MenuItem>
            <MenuItem value={20}>Casual</MenuItem>
            <MenuItem value={30}>Festive</MenuItem>
            <MenuItem value={40}>Formal</MenuItem>
            <MenuItem value={50}>Party</MenuItem>
            <MenuItem value={60}>Winter</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="form" variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">Color</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Red</MenuItem>
            <MenuItem value={20}>Blue</MenuItem>
            <MenuItem value={30}>Green</MenuItem>
            <MenuItem value={40}>Yellow</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" className="filter-button">
          Filter
        </Button>
      </div>
    );
  }
}

export default Sidebar;
