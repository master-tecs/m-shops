import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/layout/nav/Nav";
import Footer from "./components/layout/footer/Footer";
import Index from "./pages";
import Home from "./pages/home/Home";
import ItemDetail from "./pages/item-detail/ItemDetail";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/item-detail">
            <ItemDetail />
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
