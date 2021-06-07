import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import Products from "./components/Products/Products";
import Card from "./components/Card/Card";
import { useContext } from "react";
import { ProductContext } from "./context/cartContext";
import Checkout from "./components/Checkout/Checkout";
import Test from "./components/test/Test";

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
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/pay" component={Test} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
