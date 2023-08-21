import React from "react";
import CardCharacter from "./CardCharacter";
import UseFetchCharacters from "./hooks/useFetchCharacters";

const GridCharacter = ({ category = "" }) => {
  const { data } = UseFetchCharacters(category);

  return (
    <div>
      <div>
        <h3>{category}</h3>
      </div>
      <div>
        {data.map((data) => (
          <CardCharacter character={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default GridCharacter;
