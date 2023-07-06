import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import countryData from "../../moke.js";

import Rating from "@mui/material/Rating";

import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import "./Select.css";

const Middleselect = ({
  rentsale,
  setRentsale,
  country,
  setCountry,
  state,
  setState,
  room,
  setRoom,
  rating,
  setRating,
  control,
  setControl,
}) => {
  const [value, setValue] = React.useState(2);

  const stated = countryData.find(({ country_name }) => {
    return country_name === country;
  });
  const newCity = stated?.states;
  return (
    <Box
      className="middle"
      sx={{ display: { xs: "inline-grid", md: "block" } }}
    >
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Rent/Sale</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          name="rent_sale"
          value={rentsale}
          label="rent_sale"
          onChange={(e) => {
            setRentsale((rentsale = e.target.value));
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Rent">Rent</MenuItem>
          <MenuItem value="Sale">Sale</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Country</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          name="country"
          value={country}
          label="country"
          onChange={(e) => {
            setCountry((country = e.target.value));
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {countryData?.map((data, index) => {
            return (
              <MenuItem key={index} value={data.country_name}>
                {data.country_name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">State</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          name="state"
          value={state}
          label="State"
          onChange={(e) => {
            setState((state = e.target.value));
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {newCity?.map((city, index) => {
            return (
              <MenuItem key={index} value={city.state_name}>
                {city.state_name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Room</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          name="room"
          value={room}
          label="Room"
          onChange={(e) => {
            setRoom((room = e.target.value));
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="1+1">1+1</MenuItem>
          <MenuItem value="2+1">2+1</MenuItem>
          <MenuItem value="3+1">3+1</MenuItem>
        </Select>
      </FormControl>

      <Rating
        sx={{ paddingY: "17px" }}
        name="rating"
        value={Number(rating)}
        onChange={(e) => {
          setRating((rating = e.target.defaultValue));
        }}
      />
      <FormGroup
        sx={{
          display: "inline",
        }}
      >
        <FormControlLabel
          sx={{ marginBottom: "15px", marginLeft: "5px" }}
          control={<Checkbox />}
          onClick={() => {
            setControl(!control);
          }}
          name="control"
          label="ReSale"
        />
      </FormGroup>
    </Box>
  );
};
export default Middleselect;
