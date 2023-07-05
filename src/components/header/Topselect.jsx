import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Topselect = () => {
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
        <ToggleButton sx={button} value="home">
          HOME
        </ToggleButton>
        <ToggleButton sx={button} value="residence">
          RESIDENCE
        </ToggleButton>
        <ToggleButton sx={button} value="land_farm">
          LAND/FARM
        </ToggleButton>
        <ToggleButton sx={button} value="workplace">
          WORKPLACE
        </ToggleButton>
        <ToggleButton sx={button} value="lake">
          LAKE
        </ToggleButton>
        <ToggleButton sx={button} value="historic">
          HISTORIC
        </ToggleButton>
        <ToggleButton sx={button} value="rest_fun">
          REST/FUN
        </ToggleButton>
      </ToggleButtonGroup>
      <div className="middle_select"></div>
    </div>
  );
};

export default Topselect;
