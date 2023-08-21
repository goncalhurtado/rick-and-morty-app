import React from "react";

const CardCharacter = ({ character }) => {
  const { name, image, gender, status } = character;
  return (
    <div>
      <p>nombre: {name}</p>
      <img src={image} alt="" />
      <p>genero: {gender}</p>
      <p>{status}</p>
    </div>
  );
};

export default CardCharacter;
