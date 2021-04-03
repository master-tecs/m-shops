import "./App.scss";
import Nav from "./components/layout/nav/Nav";
import Banner from "./components/layout/banner/Banner";
import NewGoods from "./components/layout/newGoods/NewGoods";
import SpecialGoods from "./components/layout/specialGoods/SpecialGoods";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <NewGoods />
      <SpecialGoods />
    </div>
  );
}

export default App;
