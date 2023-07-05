import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Rating from "@mui/material/Rating";

import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import "./Select.css";

const Middleselect = ({ setForm, form }) => {
  const [value, setValue] = React.useState(2);

  return (
    <div className="middle">
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Rent/Sale</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          name="rent_sale"
          value={form.rent_sale}
          label="rent_sale"
          onChange={(e) => {
            form.rent_sale = e.target.value;
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
          value={form.country}
          label="country"
          onChange={(e) => {
            form.country = e.target.value;
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
          value="age"
          label="Age"
          onChange={(e) => {
            form.state = e.target.value;
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
          value="age"
          label="Age"
          onChange={(e) => {
            form.room = e.target.value;
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

      <Rating
        sx={{ paddingY: "17px" }}
        name="rating"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
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
            setForm(!form.control);
          }}
          name="control"
          label="ReSale"
        />
      </FormGroup>
    </div>
  );
};
export default Middleselect;
