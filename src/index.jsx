import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import App from "./App";
import Reducer from "./Redux/Reducer";

const rootReducer = combineReducers({
  menu: Reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
