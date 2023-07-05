import { Box, Typography, Container } from "@mui/material";
import React from "react";
import handle from "../assets/el.ico";
import handle2 from "../assets/el2.jpeg";
import box from "../assets/box2.jpg";

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
    >
      <Typography
        color="#rgb(239, 137, 47)"
        textAlign="left"
        sx={{
          padding: "20px",
          paddingLeft: "30px",
          fontSize: "1.2rem",
          fontWeight: "550",
        }}
      >
        Touch you life goals easy...
      </Typography>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Box
          sx={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            borderRadius: "10px",
            width: "25vw",
            height: "5rem",
          }}
        >
          <img src={handle} width={70} alt="" />
        </Box>
        <Box
          sx={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            borderRadius: "10px",
            width: "25vw",
            height: "5rem",
          }}
        >
          <img src={handle2} width={70} alt="" />
        </Box>
        <Box
          sx={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            borderRadius: "10px",
            width: "25vw",
            height: "5rem",
          }}
        >
          <img src={box} width={70} alt="" />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
