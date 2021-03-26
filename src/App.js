import "./App.scss";
import Nav from "./components/layout/nav/Nav";
import img1 from "./assets/img/web.jpg";
import Banner from "./components/layout/banner/Banner";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      {/* <img src={img1} /> */}
    </div>
  );
}

export default App;
