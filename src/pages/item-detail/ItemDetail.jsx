import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import NewGoods from "../../components/layout/newGoods/NewGoods";
import Detail from "./components/Detail";
import Offer from "../../components/layout/offer/Offer";
import "./ItemDetail.scss";

function ItemDetail({ products, currentItem }) {
  if (!currentItem) {
    return <Redirect to="/" />;
  }
  return (
    <div className="itemDetail">
      <Detail />
      <NewGoods heading="New shoe" data={products} />
      <Offer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.bestproducts,
    currentItem: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(ItemDetail);
