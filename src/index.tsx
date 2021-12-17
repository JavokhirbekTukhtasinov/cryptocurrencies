import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./app/store";
ReactDOM.render(
    <Provider  store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById("root")
);
