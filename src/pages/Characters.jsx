import React, { useState } from "react";
import SearchCharacter from "../components/SearchCharacter";
import GridCharacter from "../components/GridCharacter";

const Characters = () => {
  const [character, setCharacters] = useState([""]);
  return (
    <>
      <SearchCharacter setCharacters={setCharacters} />
      <div>Characters</div>
      {/* <GridCharacter /> */}
      <ol>
        {character.map((category) => {
          return <GridCharacter category={category} key={category} />;
        })}
      </ol>
    </>
  );
};

export default Characters;
