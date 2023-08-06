import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Item from "../../components/itemCard/ItemCard";
import { CartContext } from "./../../CartContext";
import Table from "react-bootstrap/Table";

function Cart(props) {
  const { cartItems, addItem, removeItem } = React.useContext(CartContext);

  return (
    <Container>
      {cartItems.length === 0 && <h3>Aun no hay items en el carrito!</h3>}
      {cartItems.length > 0 && (
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Item</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>
                </tr>
              ))}
              <tr>
                <td />
              </tr>
              <tr>
                <td> </td>
                <td>Total</td>
                <td>
                  {cartItems.reduce((prev, curr, i) => {
                    return prev + curr.price * curr.quantity;
                  }, 0)}
                </td>
              </tr>
            </tbody>
          </Table>
          <Button>Comprar</Button>
        </Row>
      )}
    </Container>
  );
}

export default Cart;
