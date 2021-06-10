import React from "react";
import Banner from "../components/layout/banner/Banner";
import NewGoods from "../components/layout/newGoods/NewGoods";
import SpecialGoods from "../components/layout/specialGoods/SpecialGoods";
// import SpecialBranch from "../components/layout/specialBranch/SpecialBranch";
import Quality from "../components/layout/quality/Quality";

import { connect } from "react-redux";

function index({ products, headphone, special }) {
  return (
    <div>
      <Banner data={special[1]} />
      <NewGoods heading="New goods" data={products} />
      <SpecialGoods heading="Special goods" data={special} />
      <Quality background="background" />
      <NewGoods heading="Headphone" data={headphone} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.bestproducts,
    headphone: state.shop.headphone,
    special: state.shop.specialproducts,
  };
};

export default connect(mapStateToProps)(index);
