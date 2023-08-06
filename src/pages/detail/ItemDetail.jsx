import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import catalogo from "../../productos/Products";
import Item from "../../components/itemCard/ItemCard";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import { CartContext } from "./../../CartContext";

/*function ItemQuantitySelector(props) {
  return <div>
    <Button>-</Button>
    <Button>+</Button>
  </div>
}*/

function ItemDetail(props) {
  const { id } = useParams();
  const [item, setItem] = React.useState(null);

  const { cartItems, addItem, removeItem } = React.useContext(CartContext);

  const quantity = cartItems.find((i) => i.id === id)?.quantity || 0;

  React.useEffect(() => {
    const db = getFirestore();
    const document = doc(db, "Items", id);

    getDoc(document).then((data) => {
      if (data.exists()) {
        setItem({ id: data.id, ...data.data() });
      }
    });
  }, []);

  //console.log(item);
  return (
    <Container>
      <Row>
        {item && (
          <Col key={id}>
            <Card style={{ width: "40rem" }}>
              <Card.Img variant="top" src={item.thumbnail} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>

                <Card.Text>{` ${item.description}`}</Card.Text>

                {quantity === 0 && (
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      addItem(item);
                    }}
                  >
                    Agregar al carrito
                  </Button>
                )}
                {quantity > 0 && (
                  <div style={{ display: "flex" }}>
                    <Button
                      onClick={() => {
                        removeItem(item.id);
                      }}
                    >
                      -
                    </Button>
                    <Card.Text>{quantity}</Card.Text>
                    <Button
                      onClick={() => {
                        addItem(item);
                      }}
                    >
                      +
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default ItemDetail;
