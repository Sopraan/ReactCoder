import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import catalogo from "../../productos/Products";
import Item from "../../components/itemCard/ItemCard";

function ItemList(props) {
  return (
    <Container>
      <Row>
        {catalogo
          .filter((e) => e.tipo === props.tipo || props.tipo === undefined)
          .map((element) => (
            <Col key={element.id}>
              <Item
                thumnail={element.thumnail}
                name={element.name}
                precio={element.precio}
                descripcion={element.descripcion}
                id={element.id}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default ItemList;
