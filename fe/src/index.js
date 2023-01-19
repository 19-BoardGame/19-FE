import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
const { createStore } = require("redux");

const root = ReactDOM.createRoot(document.getElementById("root"));
const initialState = { type: 0 };
const postReducer = (state = initialState, action) => {
  if (action.type === "main") {
    return {
      ...state,
      type: 0,
    };
  } else if (action.type === "post_review") {
    return {
      ...state,
      type: 1,
    };
  } else if (action.type === "post_party") {
    return {
      ...state,
      type: 2,
    };
  } else if (action.type === "post_free") {
    return {
      ...state,
      type: 3,
    };
  } else {
    return state;
  }
};
const store = createStore(postReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
