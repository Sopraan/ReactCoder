import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import catalogo from "../../productos/Products";
import Item from "../../components/itemCard/ItemCard";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

function ItemDetail(props) {
  const { id } = useParams();
  return (
    <Container>
      <Row>
        {catalogo
          .filter((e) => e.id === id || id === undefined)
          .map((element) => (
            <Col key={id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={element.thumnail} />
                <Card.Body>
                  <Card.Title>{element.name}</Card.Title>

                  <Card.Text>{` ${element.descripcion}`}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default ItemDetail;
