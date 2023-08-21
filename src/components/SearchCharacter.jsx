import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const SearchCharacter = ({ setCharacters }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCharacters((data) => [inputValue]);
    // setCategories((data) => [inputValue, ...data]) //si quisiera que se sumen uno abajo del otro
    setInputValue("");
  };

  const cleanSearch = (e) => {
    e.preventDefault();
    setCharacters([""]);
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor=""></label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onClick={cleanSearch} variant="outline-danger">
          Clean
        </Button>
      </form>
    </>
  );
};

export default SearchCharacter;
