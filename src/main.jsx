import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrandsProvider } from "./contexts/BrandsContext.jsx";
import { SelectedProvider } from "./contexts/SelectedContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SelectedProvider>
      <BrandsProvider>
        <App />
      </BrandsProvider>
    </SelectedProvider>
  </React.StrictMode>
);
