import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.jsx";
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom";
import store from "./store"

ReactDOM.render(
  
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  ,
  document.getElementById('root')
);


