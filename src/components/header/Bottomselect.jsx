import { FormControl, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "react-slider";
import "./Select.css";

const Bottomselect = ({
  date,
  setDate,
  maxPrice,
  setMaxPrice,
  minPrice,
  setMinPrice,
  search,
  setSearch,
}) => {
  var curr = new Date();
  curr.setDate(curr.getDate() + 3);
  var date = curr.toISOString().substring(0, 10);
  const [values, setValues] = useState([0, 100]);

  const handleChange = (newValues) => setValues(newValues);

  useEffect(() => {
    setMaxPrice((maxPrice = values[1]));
    setMinPrice((minPrice = values[0]));
  }, [values]);

  return (
    <div className="bottomselect">
      <FormControl
        sx={{
          m: 1,
          minWidth: 120,
          border: " 0.3px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "5px",
          width: "15rem",
          marginRight: "20px",
          outline: "none",
        }}
        size="small"
      >
        <Input
          size="md"
          name="search"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch((search = e.target.value));
          }}
        />
      </FormControl>
      <div className=" container">
        <div className="values-wrapper">
          <span>Price :</span>
          <input
            type="number"
            name="minPrice"
            id="minPrice"
            value={values[0]}
          />
          <span>-</span>
          <input
            type="number"
            name="maxPrice"
            id="maxPrice"
            value={values[1]}
          />
        </div>
        <Slider
          className="slider"
          value={values}
          onChange={handleChange}
          step={100}
          min={0}
          max={10000000}
        />
      </div>
      <input
        type="date"
        name="date"
        onChange={(e) => {
          setDate((date = e.target.value));
        }}
        defaultValue={date}
      />
    </div>
  );
};

export default Bottomselect;
