import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import Products from "./components/Products/Products";
import Card from "./components/Card/Card";
import { useContext } from "react";
import { ProductContext } from "./context/cartContext";
import Checkout from "./components/Checkout/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        </Switch>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
