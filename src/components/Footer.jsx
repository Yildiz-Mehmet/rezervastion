import { Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "80vw",

        position: "absolute",
        left: "10vw",
        top: "45rem",
        backgroundColor: "azure",
        borderRadius: "10px",
        height: "10rem",
        width: "80vw",
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}
    ></Box>
  );
};

export default Footer;
