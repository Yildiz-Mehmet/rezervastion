import "./Header.css";

import Box from "@mui/material/Box";
import * as React from "react";

import Topselect from "./Topselect";
import Middleselect from "./Middleselect";
import Bottomselect from "./Bottomselect";
import { useState } from "react";

const Header = () => {
  const [form, setForm] = useState({
    home: false,
    residence: false,
    land_farm: false,
    workplace: false,
    lake: false,
    historic: false,
    rest_fun: false,
    rent_sale: "",
    country: "",
    state: "",
    room: "",
    rating: "",
    control: false,
    date: "",
    maxPrice: "",
    minPrice: "",
    search: "",
  });

  return (
    <div className="header">
      <Box component="form">
        <Topselect setForm={setForm} form={form} />
        <Middleselect setForm={setForm} form={form} />
        <Bottomselect setForm={setForm} form={form} />
        <Box sx={{ marginTop: "30px" }}>
          <button className="search" type="button">
            Search
          </button>
          <button className="clear" type="button">
            Clear
          </button>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
