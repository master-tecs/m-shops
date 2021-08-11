import WatchIcon from "@material-ui/icons/Watch";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import HeadsetIcon from "@material-ui/icons/Headset";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import WeekendIcon from "@material-ui/icons/Weekend";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import ComputerIcon from "@material-ui/icons/Computer";
import TvIcon from "@material-ui/icons/Tv";
import NewGoods from "../../components/layout/newGoods/NewGoods";
import ProductCard from "../../components/shared/productCard/ProductCard";
import { connect } from "react-redux";
import "./Products.scss";
import Search from "../../components/shared/search/Search";

function Products({ special }) {
  return (
    <>
      <div className="products">
        {/* categories */}
        <div className="products__categories">
          <div className="products__categories--heading">
            <h2>Popular categories</h2>
            <div className="products__categories--search">
              <Search />
            </div>
          </div>
          <div className="products__category__row">
            <div className="products__category">
              <ComputerIcon />
            </div>
            <div className="products__category">
              <TvIcon />
            </div>
            <div className="products__category">
              <PhoneAndroidIcon />
            </div>
            <div className="products__category">
              <WeekendIcon />
            </div>
            <div className="products__category">
              <MotorcycleIcon />
            </div>
            <div className="products__category">
              <HeadsetIcon />
            </div>
            <div className="products__category">
              <SportsEsportsIcon />
            </div>
            <div className="products__category">
              <WatchIcon />
            </div>
            <div className="products__category">
              <ComputerIcon />
            </div>
            <div className="products__category">
              <TvIcon />
            </div>
            <div className="products__category">
              <PhoneAndroidIcon />
            </div>
            <div className="products__category">
              <WeekendIcon />
            </div>
            <div className="products__category">
              <MotorcycleIcon />
            </div>
            <div className="products__category">
              <HeadsetIcon />
            </div>
            <div className="products__category">
              <SportsEsportsIcon />
            </div>
            <div className="products__category">
              <WatchIcon />
            </div>
            <div className="products__category">
              <ComputerIcon />
            </div>
            <div className="products__category">
              <TvIcon />
            </div>
            <div className="products__category">
              <PhoneAndroidIcon />
            </div>
            <div className="products__category">
              <WeekendIcon />
            </div>
            <div className="products__category">
              <MotorcycleIcon />
            </div>
            <div className="products__category">
              <HeadsetIcon />
            </div>
            <div className="products__category">
              <SportsEsportsIcon />
            </div>
            <div className="products__category">
              <WatchIcon />
            </div>
            <div className="products__category">
              <ComputerIcon />
            </div>
          </div>
        </div>

        {/* producuts */}
        <div className="products__all">
          {/* Row By Category */}
          {special.map((product) => (
            <ProductCard
              data={product}
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rate={product.rate}
              likes={product.likes}
            />
          ))}
          {special.map((product) => (
            <ProductCard
              data={product}
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rate={product.rate}
              likes={product.likes}
            />
          ))}
          {special.map((product) => (
            <ProductCard
              data={product}
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rate={product.rate}
              likes={product.likes}
            />
          ))}
          {special.map((product) => (
            <ProductCard
              data={product}
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rate={product.rate}
              likes={product.likes}
            />
          ))}
          {special.map((product) => (
            <ProductCard
              data={product}
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rate={product.rate}
              likes={product.likes}
            />
          ))}
        </div>
      </div>

      <NewGoods heading="Discounted goods" data={special} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    special: state.shop.specialproducts,
  };
};

export default connect(mapStateToProps)(Products);
