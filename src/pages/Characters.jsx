import React, { useState } from "react";
import SearchCharacter from "../components/SearchCharacter";
import GridCharacter from "../components/GridCharacter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

const Characters = () => {
  const [character, setCharacters] = useState([""]);
  return (
    <>
      <div className="container text-center my-4">
        <SearchCharacter setCharacters={setCharacters} />
      </div>

      <div className="container justify-content-center">
        <div className="row justify-content-center row-cols-sm-2 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4 gap-4">
          {character.map((category) => {
            return <GridCharacter category={category} key={category} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Characters;
