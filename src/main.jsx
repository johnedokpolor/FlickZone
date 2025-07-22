import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ContextProvider from "./context/context.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </ContextProvider>,
);
