import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import bee from "../assest/bee.png"
import { Image } from "@chakra-ui/react";
import "./SearchBar.css";
import { HStack } from "@chakra-ui/react";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://64e9400e99cf45b15fe08db2.mockapi.io/education")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      
      <FaSearch id="search-icon" />

      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      
    
    </div>
   
  );
};