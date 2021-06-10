import React from "react";
import NewGoods from "../../components/layout/newGoods/NewGoods";
import SpecialGoods from "../../components/layout/specialGoods/SpecialGoods";
import SpecialBranch from "../../components/layout/specialBranch/SpecialBranch";
import Quality from "../../components/layout/quality/Quality";

import { useSelector } from "react-redux";
import { connect } from "react-redux";

function Home({ products, special }) {
  const state = useSelector((state) => state);

  return (
    <div>
      <SpecialGoods heading="Bestselling" data={products} />
      <NewGoods heading="Discounted goods" data={special} />
      <SpecialBranch />
      <Quality background="background" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.bestproducts,
    special: state.shop.specialproducts,
  };
};

export default connect(mapStateToProps)(Home);
