import "./home.css";
import * as React from 'react';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function Home() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div className="flex flex-col gap-10 h-screen back-img   ">
      <div className="flex gap-4 text-6xl font-[Barlow] text-gray-700 font-bold justify-center items-center mt-60">
        <h1 className="text-blue-700">1500+</h1> Jobs Posted Last Week
      </div>
      <div className="p-10 bg-[#ffffff4f] mx-60 rounded-xl">
        <div className="flex gap-8 justify-center">
          <input
            type="text"
            id=""
            placeholder="What you are looking for?"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5"
          />
          <FormControl sx={{ m: 0, width: 300, }}>
            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <input
            type="text"
            id="What you are looking for?"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5"
          />
          <a className="flex gap-2 bg-slate-600 pr-10 pl-8 rounded-md text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              id="search"
              width={20}
              color=""
            >
              <path
                fill="#231f20"
                d="M242.36,96.64l-7.41,13a95.68,95.68,0,0,0-130.47,35.93l-13-7.4A110.69,110.69,0,0,1,242.36,96.64Z"
              ></path>
              <path
                fill="#231f20"
                d="M322.36,58.4c-68.1-73-182.91-77-255.92-8.91A181.08,181.08,0,0,0,307.87,319.32q2.84-2.43,5.59-5c1.84-1.71,3.63-3.46,5.38-5.23A181.08,181.08,0,0,0,322.36,58.4Zm14.73,128.7a147.21,147.21,0,0,1-147,142.1q-2.61,0-5.25-.09A146.27,146.27,0,0,1,82.31,282.4C26.94,223,30.19,129.7,89.55,74.33A147.21,147.21,0,0,1,337.09,187.1Z"
              ></path>
              <path
                fill="#fff"
                d="M242.36,96.64l-7.41,13a95.68,95.68,0,0,0-130.47,35.93l-13-7.4A110.69,110.69,0,0,1,242.36,96.64Z"
              ></path>
              <path
                fill="#231f20"
                d="M494.87,455.2,371.74,327.92l-49,45.73L445.89,501a33.3,33.3,0,0,0,23.3,10.58l1.19,0a33.53,33.53,0,0,0,24.49-56.39Z"
              ></path>
              <line
                x1="352.47"
                x2="308.34"
                y1="356.15"
                y2="308.84"
                fill="none"
              ></line>
              <rect
                width="15"
                height="64.69"
                x="322.9"
                y="300.15"
                fill="#231f20"
                transform="rotate(-43.01 330.367 332.477)"
              ></rect>
              <path
                fill="#231f20"
                d="M242.36,96.64l-7.41,13a95.68,95.68,0,0,0-130.47,35.93l-13-7.4A110.69,110.69,0,0,1,242.36,96.64Z"
              ></path>
            </svg>
            <button className="">Search</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
