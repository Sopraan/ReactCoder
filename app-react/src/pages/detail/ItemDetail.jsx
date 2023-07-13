import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import catalogo from "../../productos/Products";
import Item from "../../components/itemCard/ItemCard";

function ItemDetail(props) {
  return (
    <Container>
      <Row>
        {catalogo
          .filter((e) => e.tipo === props.tipo || props.tipo === undefined)
          .map((element) => (
            <Col>
              <Item
                thumnail={element.thumnail}
                name={element.name}
                descripcion={element.descripcion}
                id={element.id}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default ItemDetail;
