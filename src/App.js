import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import Products from "./components/Products/Products";
import Card from "./components/Card/Card";
import { useContext } from "react";
import { ProductContext } from "./context/cartContext";

function App() {
  const prod = useContext(ProductContext);
  console.log(prod);
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/card" component={Card} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
