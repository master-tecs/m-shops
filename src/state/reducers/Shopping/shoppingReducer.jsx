import * as actionTypes from "./shoppingTypes";
import img101 from "../../../assets/img/shoes/nike/01.png";
import img102 from "../../../assets/img/shoes/nike/02.png";
import img103 from "../../../assets/img/shoes/nike/03.png";
import img104 from "../../../assets/img/shoes/nike/04.png";
import headset101 from "../../../assets/img/headset/4.png";
import headset102 from "../../../assets/img/headset/1.png";
import headset103 from "../../../assets/img/headset/2.png";
import headset104 from "../../../assets/img/headset/7.png";
import headset105 from "../../../assets/img/headset/5.png";
import shoe101 from "../../../assets/img/shoes/16.png";

const INITIAL_STATE = {
  bestproducts: [
    {
      id: 1,
      title: "Air Max 200",
      company: "Nike",
      rate: 4,
      price: 199,
      category: "shoe",
      image: [img104],
      images: [img101, img102, img103, img104],
      offer: true,
      likes: "907",
    },
    {
      id: 2,
      title: "Apple headset",
      price: 343,
      company: "Apple",
      category: "headset",
      images: [headset102],
      image: [headset102],
      offer: true,
      rate: 4,
      likes: "957",
    },
    {
      id: 3,
      title: "Black headset",
      price: 399,
      company: "9hone",
      category: "headset",
      images: [headset103],
      image: [headset103],
      offer: true,
      rate: 4,
      likes: "857",
    },
    {
      id: 4,
      title: "Air pod pro",
      price: 143,
      company: "Apple",
      category: "headset",
      images: [headset104],
      image: [headset104],
      offer: true,
      rate: 4,
      likes: "657",
    },
    {
      id: 5,
      title: "Cool headset",
      price: 243,
      company: "Sonny",
      category: "headset",
      images: [headset101],
      image: [headset101],
      offer: true,
      rate: 4.5,
      likes: "907",
    },
    {
      id: 6,
      title: "Shoe",
      price: 443,
      company: "Sonny",
      category: "headset",
      images: [shoe101],
      image: [shoe101],
      offer: true,
      rate: 4,
      likes: "787",
    },
  ],
  offers: [
    {
      id: 2,
      title: "Apple headset",
      price: 343,
      company: "Apple",
      category: "headset",
      images: [headset102],
      image: [headset102],
      offer: true,
      rate: 4,
      likes: "957",
    },
    {
      id: 3,
      title: "Black headset",
      price: 399,
      company: "9hone",
      category: "headset",
      images: [headset103],
      image: [headset103],
      offer: true,
      rate: 4,
      likes: "857",
    },
    {
      id: 5,
      title: "Cool headset",
      price: 243,
      company: "Sonny",
      category: "headset",
      images: [headset101],
      image: [headset101],
      offer: true,
      rate: 4.5,
      likes: "907",
    },
  ],
  specialproducts: [
    {
      id: 1,
      title: "Air Max 200",
      company: "Nike",
      rate: 4,
      price: 199,
      category: "shoe",
      image: [img103],
      images: [img101, img102, img103, img104],
      offer: true,
      likes: "907",
    },
    {
      id: 5,
      title: "Cool headset",
      price: 243,
      company: "Sonny",
      category: "headset",
      images: [headset101],
      image: [headset101],
      offer: true,
      rate: 4.5,
      likes: "907",
    },
    {
      id: 6,
      title: "Shoe",
      price: 449,
      company: "Sonny",
      category: "headset",
      images: [shoe101],
      image: [shoe101],
      offer: true,
      rate: 4,
      likes: "787",
    },
    {
      id: 4,
      title: "Air pod pro",
      price: 143,
      company: "Apple",
      category: "headset",
      images: [headset104],
      image: [headset104],
      offer: true,
      rate: 4,
      likes: "657",
    },
    {
      id: 2,
      title: "Apple headset",
      price: 349,
      company: "Apple",
      category: "headset",
      images: [headset102],
      image: [headset102],
      offer: true,
      rate: 4,
      likes: "957",
    },
    {
      id: 3,
      title: "Black headset",
      price: 399,
      company: "9hone",
      category: "headset",
      images: [headset103],
      image: [headset103],
      offer: true,
      rate: 4,
      likes: "857",
    },
  ],
  headphone: [
    {
      id: 5,
      title: "Cool headset",
      price: 243,
      company: "9hone",
      category: "headset",
      image: headset105,
      offer: true,
      rate: 4.5,
      likes: "907",
    },
    {
      id: 1,
      title: "Air Max 200",
      company: "Nike",
      rate: 4,
      price: 199,
      category: "shoe",
      image: [img101],
      images: [img101, img102, img103, img104],
      offer: true,
      likes: "907",
    },
    {
      id: 3,
      title: "Black headset",
      price: 399,
      company: "9hone",
      category: "headset",
      images: [headset103],
      image: [headset103],
      offer: true,
      rate: 4,
      likes: "857",
    },
    {
      id: 5,
      title: "Cool headset",
      price: 243,
      company: "Sonny",
      category: "headset",
      images: [headset101],
      image: [headset101],
      offer: true,
      rate: 4.5,
      likes: "907",
    },
    {
      id: 1,
      title: "Air Max 200",
      company: "Nike",
      rate: 4,
      price: 199,
      category: "shoe",
      image: [img101],
      images: [img101, img102, img103, img104],
      offer: true,
      likes: "907",
    },
    {
      id: 3,
      title: "Black headset",
      price: 399,
      company: "9hone",
      category: "headset",
      images: [headset103],
      image: [headset103],
      offer: true,
      rate: 4,
      likes: "857",
    },
  ],
  cart: [], // {id, title, details, price, images, quantity}
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // find and get item  data from the products array
      const item = state.bestproducts.find(
        (product) => product.id === action.payload.id
      );
      // check if item is in cart
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload.qty
          ? action.payload
          : { ...action.payload, qty: 0 },
      };

    default:
      return state;
  }
};

export default shopReducer;
