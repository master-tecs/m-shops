import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/layout/nav/Nav";
import Footer from "./components/layout/footer/Footer";
import Index from "./pages";
import Home from "./pages/home/Home";
import ItemDetail from "./pages/item-detail/ItemDetail";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";
import Summary from "./pages/summary/Summary";
import Payment from "./pages/payment/Payment";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import Products from "./pages/products/Products";
import MyShop from "./pages/myShop/MyShop";
import PageNavigationListener from "./pages/PageNavigationListener";
import "./App.scss";

function App({ currentItem }) {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      {/* <div className="app"> */}
      <PageNavigationListener />
      <Nav />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
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
        <Route path="/item-detail">
          <ItemDetail />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/offers">
          <Products />
        </Route>
        <Route path="/myShop">
          <MyShop />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
      <Footer />
      {/* </div> */}
    </Router>
  );
}


export default App;
