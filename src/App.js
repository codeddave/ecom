import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import Products from "./components/Products/Products";
import Card from "./components/Card/Card";
import { useContext } from "react";
import { ProductConsumer } from "./context/cartContext";

function App() {
  console.log(useContext(ProductConsumer));
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
