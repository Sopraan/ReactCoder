import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import Button from "react-bootstrap/Button";
import Landing from "./components/landing/Landing";
import ItemlistContainer from "./components/item-list-container/ItemListContainer";

/*const personas = [
  { nombre: "el zetti", edad: 27, localidad: "zamora" },
  { nombre: "rockefeller", edad: 27, localidad: "wilde" },
  { nombre: "nklz", edad: 36, localidad: "lomas" },
  {},
];

function Nombre(props) {
  return <h1 className={"nombre"}>{props.nombre}</h1>;
}

function Persona(props) {
  return (
    <div>
      <Nombre nombre={props.nombre}></Nombre>
      <h2>{props.edad}</h2>
      <h2>{props.localidad}</h2>
    </div>
  );
}

function App() {
  return (
    <div className={"personas"}>
      {personas.map((elSujeto) => {
        return (
          <Persona
            nombre={elSujeto.nombre}
            edad={elSujeto.edad}
            localidad={elSujeto.localidad}
          ></Persona>
        );
      })}
    </div>
  );
}*/

function App() {
  return (
    <div>
      <NavBar />
      <ItemlistContainer greeting="Toastadora con alas" />
      <Landing />
    </div>
  );
}
export default App;
