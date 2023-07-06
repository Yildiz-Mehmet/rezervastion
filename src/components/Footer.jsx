import { Box, Typography, Container, Button } from "@mui/material";
import React from "react";
import handle from "../assets/el.png";
import handle2 from "../assets/el1.png";
import box from "../assets/box2.jpg";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        marginBottom: { sm: "30px" },
        width: "80vw",
        position: "absolute",
        top: { sm: "70rem", xs: "85rem", md: "40rem" },
        left: "10vw",
        backgroundColor: "azure",
        borderRadius: "10px",
        minHeight: "10rem",
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
      <Box
        sx={{
          display: { xs: "grid", md: "flex" },
          justifyContent: "space-evenly",
          gap: { xs: "20px", md: "2px" },
        }}
      >
        <Box
          component="button"
          onClick={() => {
            navigate("/buy");
          }}
          sx={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            borderRadius: "10px",
            minWidth: "25vw",
            height: "5rem",
            display: "flex",
            alignItems: "center",
            gap: "30px",
            paddingLeft: "20px",
            cursor: "pointer",
          }}
        >
          <img src={handle} width={60} alt="" />
          <Typography sx={{ display: "inline-block" }}>
            Buy Advertisement
          </Typography>
        </Box>
        <Box
          component="button"
          onClick={() => {
            navigate("/agents");
          }}
          sx={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            borderRadius: "10px",
            minWidth: "25vw",
            height: "5rem",
            display: "flex",
            alignItems: "center",
            gap: "30px",
            paddingLeft: "20px",
            cursor: "pointer",
          }}
        >
          <img src={handle2} width={60} alt="" />
          <Typography
            sx={{
              display: "inline-block",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Be Agent
          </Typography>
        </Box>
        <Box
          component="button"
          onClick={() => {
            navigate("/contactUs");
          }}
          sx={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            borderRadius: "10px",
            minWidth: "25vw",
            height: "5rem",
            display: "flex",
            alignItems: "center",
            gap: "30px",
            paddingLeft: "20px",
            cursor: "pointer",
          }}
        >
          <img src={box} width={60} alt="" />
          <Typography sx={{ display: "inline-block" }}>
            Agent Profile
          </Typography>
          <Button sx={{ padding: "0px" }} variant="contained" color="success">
            NEW
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
