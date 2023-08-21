import React, { useState } from "react";

const SearchCharacter = ({ setCharacters }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCharacters((data) => [inputValue]);
    // setCategories((data) => [inputValue, ...data]) //si quisiera que se sumen uno abajo del otro
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">buscar</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </>
  );
};

export default SearchCharacter;
