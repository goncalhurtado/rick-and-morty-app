import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardCharacter = ({ character }) => {
  const { name, image, gender, species, status, location } = character;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {gender} - {species}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{status}</ListGroup.Item>
        <ListGroup.Item>last known location: {location}</ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default CardCharacter;
