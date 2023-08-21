import React from "react";
import CardCharacter from "./CardCharacter";
import UseFetchCharacters from "./hooks/useFetchCharacters";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const GridCharacter = ({ category = "" }) => {
  const { data } = UseFetchCharacters(category);

  return (
    <>
      {/* <h3>{category}</h3> */}
      {data.map((data) => (
        <CardCharacter character={data} key={data.id} />
      ))}
      ;
    </>
  );
};

export default GridCharacter;
