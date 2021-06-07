import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import Products from "./components/Products/Products";
import Checkout from "./components/Checkout/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
