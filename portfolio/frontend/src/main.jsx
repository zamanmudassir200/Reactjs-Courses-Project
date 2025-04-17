import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/context.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
        <ToastContainer
          position="top-right"
          style={{ zIndex: 9999, fontSize: "17px" }}
        />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
