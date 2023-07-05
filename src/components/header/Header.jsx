import "./Header.css";

import Box from "@mui/material/Box";
import * as React from "react";

import Topselect from "./Topselect";
import Middleselect from "./Middleselect";

const Header = () => {
  return (
    <div className="header">
      <Box component="form">
        <Topselect />
        <Middleselect />
      </Box>
    </div>
  );
};

export default Header;
