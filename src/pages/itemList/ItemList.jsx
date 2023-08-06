import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import catalogo from "../../productos/Products";
import Item from "../../components/itemCard/ItemCard";
import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore";

function ItemList(props) {
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    const db = getFirestore();
    const items = collection(db, "Items");

    getDocs(items).then((data) => {
      if (data.size === 0) {
        console.log("no data");
      }
      setItems(data.docs.map((item) => ({ id: item.id, ...item.data() })));
    });
  }, []);

  console.log(items);

  return (
    <Container>
      <Row>
        {items
          .filter((e) => e.type === props.type || props.type === undefined)
          .map((element) => (
            <Col key={element.id}>
              <Item
                id={element.id}
                thumbnail={element.thumbnail}
                name={element.name}
                price={element.price}
                description={element.description}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default ItemList;
