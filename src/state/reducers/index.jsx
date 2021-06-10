import { combineReducers } from "redux";
import shopReducer from "./Shopping/shoppingReducer";

const reducers = combineReducers({
  shop: shopReducer,
});

export default reducers;
