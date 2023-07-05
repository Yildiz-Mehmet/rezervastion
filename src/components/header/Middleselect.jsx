import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Rating from "@mui/material/Rating";

import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
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

  return (
    <div className="middle">
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
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
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
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
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
    </div>
  );
};
export default Middleselect;
