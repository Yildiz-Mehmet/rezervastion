import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Topselect = ({ setForm, form }) => {
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
            setForm(!form.home);
          }}
        >
          HOME
        </ToggleButton>
        <ToggleButton
          sx={button}
          value="residence"
          name="residence"
          onClick={() => {
            setForm(!form.residence);
          }}
        >
          RESIDENCE
        </ToggleButton>
        <ToggleButton
          sx={button}
          value="land_farm"
          name="land_farm"
          onClick={() => {
            setForm(!form.land_farm);
          }}
        >
          LAND/FARM
        </ToggleButton>
        <ToggleButton
          sx={button}
          value="workplace"
          name="workplace"
          onClick={() => {
            setForm(!form.workplace);
          }}
        >
          WORKPLACE
        </ToggleButton>
        <ToggleButton
          sx={button}
          value="lake"
          name="lake"
          onClick={() => {
            setForm(!form.lake);
          }}
        >
          LAKE
        </ToggleButton>
        <ToggleButton
          sx={button}
          value="historic"
          name="historic"
          onClick={() => {
            setForm(!form.historic);
          }}
        >
          HISTORIC
        </ToggleButton>
        <ToggleButton
          sx={button}
          value="rest_fun"
          name="rest_fun"
          onClick={() => {
            setForm(!form.rest_fun);
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
