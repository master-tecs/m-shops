import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/layout/nav/Nav";
import Footer from "./components/layout/footer/Footer";
import Index from "./pages";
import Home from "./pages/home/Home";
import ItemDetail from "./pages/item-detail/ItemDetail";
import "./App.scss";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";
import Summary from "./pages/summary/Summary";
import Payment from "./pages/payment/Payment";
import Login from "./pages/auth/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/item-detail">
            <ItemDetail />
          </Route>
          <Route path="/summary">
            <Summary />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/shopping-cart">
            <ShoppingCart />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
