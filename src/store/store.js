import { createStore } from "react-redux";
import rootReducer from "../../src/userReducer.js";

const store = createStore(rootReducer);

export default store;