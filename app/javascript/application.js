import "@hotwired/turbo-rails";
import "./controllers";

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes } from 'react-router-dom';

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./redux/store";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
    </Router>
  </Provider>
</React.StrictMode>,
);
