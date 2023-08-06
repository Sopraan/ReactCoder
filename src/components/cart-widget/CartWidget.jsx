import "./CartWidget.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function CartWidget() {
  return <Link to={"./cart"}>🛒 1</Link>;
}

export default CartWidget;
