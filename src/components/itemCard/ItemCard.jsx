import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Item = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.thumbnail} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>

        <Card.Text>{`$ ${props.price}`}</Card.Text>

        <Button variant="primary">
          <Link style={{ color: "white" }} to={`/producto/${props.id}`}>
            Detalles
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
