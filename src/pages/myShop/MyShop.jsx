import "./MyShop.scss";
import logo from "../../assets/img/logos/logo.jpeg";
import Button from "../../components/shared/buttons/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import StarsIcon from "@material-ui/icons/Stars";
import { connect } from "react-redux";
import NewGoods from "../../components/layout/newGoods/NewGoods";
import SpecialGoods from "../../components/layout/specialGoods/SpecialGoods";
import ProductCard from "../../components/shared/productCard/ProductCard";
import Offer from "../../components/layout/offer/Offer";

function MyShop({ special }) {
  return (
    <div className="myShop">
      <div className="myShop__title">
        <h1>Shoes Collections</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
          pariatur.
        </p>
      </div>
      <div className="myShop__info">
        <div className="myShop__left">
          {/* deliver to any where in nigeria */}
          <div className="info__section">
            <p className="info__section--title">Deliver to</p>
            <h3 className="info__section--decription">
              All states in Nigeria.
            </h3>
          </div>

          {/* contact */}
          <div className="info__section">
            <p className="info__section--title">Contact</p>
            <h3 className="info__section--decription">Mr Shoe Collections</h3>
            <h3 className="info__section--decription">
              shoecollections@ss.com
            </h3>
            <h3 className="info__section--decription">+1223456789</h3>
            <h3 className="info__section--decription">+1223456789</h3>
          </div>

          {/* address */}
          <div className="info__section">
            <p className="info__section--title">Address</p>
            <h3 className="info__section--decription">
              No. 19 orange street lagos, Nigeria.
            </h3>
            <span>View on map</span>
          </div>

          {/* decription */}
          <div className="info__section">
            <p className="info__section--title">About</p>
            <h3 className="info__section--decription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              tempore impedit quod?
            </h3>
          </div>
        </div>
        <div className="myShop__center">
          {/* shop logo */}
          <img
            src={logo}
            alt="shoe collections logo"
            className="myShop__center--logo"
          />
        </div>
        <div className="myShop__right">
          {/* Type */}
          {/* <div className="info__section">
          <p>Manufacture</p>
          <span ></span>
          </div> */}

          <div className="myShop__logo">
            {/* shop logo */}
            <img
              src={logo}
              alt="shoe collections logo"
              className="myShop__logo--small"
            />
          </div>

          {/* verified */}
          <div className="info__section">
            <p className="info__section--title verified">
              Verified
              <span>
                <CheckCircleIcon />
              </span>
            </p>
          </div>

          {/* followers */}
          <div className="info__section">
            <p className="info__section--title">Followers</p>
            <h2>
              100K <span>customers</span>
            </h2>
          </div>

          {/* number of sold items */}
          <div className="info__section">
            <p className="info__section--title">Sold</p>
            <h2>
              12M <span>Products</span>
            </h2>
          </div>

          {/* 2 days or less delivery time to any where in nigeria */}
          <div className="info__section">
            <p className="info__section--title">Delivery Time</p>
            <h2>
              2 <span>days or less</span>
            </h2>
          </div>

          {/* Add new product */}
          <div className="info__section addProduct--btn">
            <Button>Add Product</Button>
          </div>
        </div>
      </div>

      <div className="myShop__info--small">
        <div className="myShop__info--small--top">
          <div className="myShop__info--heading">
            {/* shop logo */}
            <img
              src={logo}
              alt="shoe collections logo"
              className="myShop__info--logo"
            />
            {/* verified */}
            <p className="verified">
              Verified
              <span>
                <CheckCircleIcon />
              </span>
            </p>
          </div>

          {/* Add new product */}
          <div className="addProduct--btn">
            <Button>Add Product</Button>
          </div>
        </div>

        <div className="myShop__info--small--center">
          {/* followers */}
          <div className="info__section">
            <p className="info__section--title">Followers</p>
            <h4>
              100K <span>customers</span>
            </h4>
          </div>

          {/* number of sold items */}
          <div className="info__section">
            <p className="info__section--title">Sold</p>
            <h4>
              12M <span>Products</span>
            </h4>
          </div>

          {/* 2 days or less delivery time to any where in nigeria */}
          <div className="info__section">
            <p className="info__section--title">Delivery </p>
            <h4>
              2 <span>days or less</span>
            </h4>
          </div>
        </div>
        <hr />
        <div className="myShop__info--small--bottom">
          <div className="info__section">
            <p className="info__section--title">Deliver to</p>
            <h3 className="info__section--decription">
              All states in Nigeria.
            </h3>
          </div>

          {/* contact */}
          <div className="info__section">
            <p className="info__section--title">Contact</p>
            <h3 className="info__section--decription">Mr Shoe Collections</h3>
            <h3 className="info__section--decription">
              shoecollections@ss.com
            </h3>
            <h3 className="info__section--decription">
              +1223456789 +1223456789
            </h3>
          </div>

          {/* address */}
          <div className="info__section">
            <p className="info__section--title">Address</p>
            <h3 className="info__section--decription">
              No. 19 orange street lagos, Nigeria.
            </h3>
            <span>View on map</span>
          </div>
        </div>
      </div>
      <h2>Shop's Products</h2>
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
        {/* {special.map((product) => (
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
        ))} */}
      </div>

      <Offer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    special: state.shop.specialproducts,
  };
};

export default connect(mapStateToProps)(MyShop);
