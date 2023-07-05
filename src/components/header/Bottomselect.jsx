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
        <div className="values-wrapper">
          <span>Price :</span>
          <input type="text" value={min} />
          <span>-</span>
          <input type="text" value={max} />
        </div>
        <ReactSlider
          defaultValue={[min, max]}
          className="slider"
          trackClassName="tracker"
          min={0}
          max={100000000000000}
          minDistance={50}
          step={50}
          withTracks={true}
          pearling={true}
          renderThumb={(props) => {
            return <div {...props} className="thumb"></div>;
          }}
          renderTrack={(props) => {
            return <div {...props} className="track"></div>;
          }}
          onChange={([min, max]) => {
            setMin(min);
            setMax(max);
          }}
        />
      </div>
    </div>
  );
};

export default Bottomselect;
