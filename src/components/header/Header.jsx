import "./Header.css";

import Box from "@mui/material/Box";
import * as React from "react";

import Topselect from "./Topselect";
import Middleselect from "./Middleselect";
import Bottomselect from "./Bottomselect";
import { useState } from "react";

const Header = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [home, setHome] = useState(false);
  const [residence, setResidence] = useState(false);
  const [land_farm, setLand_farm] = useState(false);
  const [workplace, setWorkplace] = useState(false);
  const [lake, setLake] = useState(false);
  const [historic, setHistoric] = useState(false);
  const [rest_fun, setRest_fun] = useState(false);
  const [rentsale, setRentsale] = useState(false);
  const [country, setCountry] = useState(false);
  const [state, setState] = useState(false);
  const [room, setRoom] = useState(false);
  const [rating, setRating] = useState(false);
  const [control, setControl] = useState(false);
  const [date, setDate] = useState(false);
  const [maxPrice, setMaxPrice] = useState(false);
  const [minPrice, setMinPrice] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <div className="header">
      <Box component="form" onSubmit={handleSubmit}>
        <Topselect
          home={home}
          setHome={setHome}
          residence={residence}
          setResidence={setResidence}
          land_farm={land_farm}
          setLand_farm={setLand_farm}
          workplace={workplace}
          setWorkplace={setWorkplace}
          lake={lake}
          setLake={setLake}
          historic={historic}
          setHistoric={setHistoric}
          rest_fun={rest_fun}
          setRest_fun={setRest_fun}
        />
        <Middleselect
          rentsale={rentsale}
          setRentsale={setRentsale}
          country={country}
          setCountry={setCountry}
          state={state}
          setState={setState}
          room={room}
          setRoom={setRoom}
          rating={rating}
          setRating={setRating}
          control={control}
          setControl={setControl}
        />
        <Bottomselect
          date={date}
          setDate={setDate}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          search={search}
          setSearch={setSearch}
        />
        <Box sx={{ marginTop: "30px" }}>
          <button className="search" type="submit">
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
