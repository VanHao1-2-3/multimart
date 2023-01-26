import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/Store";
import { Provider } from "react-redux";
import App from "./App";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          closeOnClick
          pauseOnHover={false}
          theme="dark"
        />
        {/* Same as */}
        <App />
       
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
