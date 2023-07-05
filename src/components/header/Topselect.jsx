import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Topselect = ({
  home,
  setHome,
  residence,
  setResidence,
  land_farm,
  setLand_farm,
  workplace,
  setWorkplace,
  lake,
  setLake,
  historic,
  setHistoric,
  rest_fun,
  setRest_fun,
}) => {
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };
  const button = {
    border: 0,
    borderRadius: 0,
    fontSize: "12px",
  };
  return (
    <div>
      <ToggleButtonGroup
        sx={{ gap: "40px", marginTop: "20px" }}
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton
          sx={button}
          value="home"
          name="home"
          onClick={() => {
            setHome(!home);
          }}
        >
          HOME
        </ToggleButton>
        <ToggleButton
          sx={button}
          value="residence"
          name="residence"
          onClick={() => {
            setResidence(!residence);
          }}
        >
          RESIDENCE
        </ToggleButton>
        <ToggleButton
          sx={button}
          value="land_farm"
          name="land_farm"
          onClick={() => {
            setLand_farm(!land_farm);
          }}
        >
          LAND/FARM
        </ToggleButton>
        <ToggleButton
          sx={button}
          value="workplace"
          name="workplace"
          onClick={() => {
            setWorkplace(!workplace);
          }}
        >
          WORKPLACE
        </ToggleButton>
        <ToggleButton
          sx={button}
          value="lake"
          name="lake"
          onClick={() => {
            setLake(!lake);
          }}
        >
          LAKE
        </ToggleButton>
        <ToggleButton
          sx={button}
          value="historic"
          name="historic"
          onClick={() => {
            setHistoric(!historic);
          }}
        >
          HISTORIC
        </ToggleButton>
        <ToggleButton
          sx={button}
          value="rest_fun"
          name="rest_fun"
          onClick={() => {
            setRest_fun(!rest_fun);
          }}
        >
          REST/FUN
        </ToggleButton>
      </ToggleButtonGroup>
      <div className="middle_select"></div>
    </div>
  );
};

export default Topselect;
