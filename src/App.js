import "./App.scss";
import Nav from "./components/layout/nav/Nav";
import Banner from "./components/layout/banner/Banner";
import NewGoods from "./components/layout/newGoods/NewGoods";
import SpecialGoods from "./components/layout/specialGoods/SpecialGoods";
import Footer from "./components/layout/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
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
