import { FormControl, Input } from "@mui/material";
import React, { useState } from "react";
import ReactSlider from "react-slider";

const Bottomselect = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100000000000000);
  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          minWidth: 120,
          border: "1px solid gray",
          borderRadius: "5px",
          width: "15rem",
        }}
        size="small"
      >
        <Input size="md" placeholder="Search" />
      </FormControl>
      <div className=" container">
        <ReactSlider />
      </div>
    </div>
  );
};

export default Bottomselect;
