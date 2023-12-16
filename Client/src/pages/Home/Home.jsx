import "./home.css";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

const filter = createFilterOptions();

function Home() {
  const [value, setValue] = React.useState(null);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="flex flex-col gap-10 h-screen back-img   ">
      <div className="flex gap-4 text-6xl font-[Barlow] text-gray-700 font-bold justify-center items-center mt-60">
        <h1 className="text-blue-700">1500+</h1> Jobs Posted Last Week
      </div>
      <div className="p-10 bg-[#ffffff4f] mx-60 rounded-xl">
        <div className="flex gap-8 justify-center">
          <Autocomplete
            className=""
            value={value}
            onChange={(event, newValue) => {
              if (typeof newValue === "string") {
                setValue({
                  title: newValue,
                });
              } else if (newValue && newValue.inputValue) {
                // Create a new value from the user input
                setValue({
                  title: newValue.inputValue,
                });
              } else {
                setValue(newValue);
              }
            }}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);

              const { inputValue } = params;
              // Suggest the creation of a new value
              const isExisting = options.some(
                (option) => inputValue === option.title
              );
              if (inputValue !== "" && !isExisting) {
                filtered.push({
                  inputValue,
                  title: `Add "${inputValue}"`,
                });
              }

              return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={top100Films}
            getOptionLabel={(option) => {
              // Value selected with enter, right from the input
              if (typeof option === "string") {
                return option;
              }
              // Add "xxx" option created dynamically
              if (option.inputValue) {
                return option.inputValue;
              }
              // Regular option
              return option.title;
            }}
            renderOption={(props, option) => <li {...props}>{option.title}</li>}
            sx={{ width: 300, fontSize: "25px", border: "none", }}
            freeSolo
            renderInput={(params) => (
              <TextField {...params} label="Search"   sx={{padding: 0,background: "white", borderRadius:2 }} />
            )}
          />

          <FormControl
            sx={{ m: 0, minWidth: 200 }}
            className="bg-white rounded-md text-black text-2xl font-bold"
          >
            <InputLabel id="demo-simple-select-autowidth-label" className="">
              Area
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              autoWidth
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
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

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];

export default Home;
