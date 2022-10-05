import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import ListCompanies from "./components/ListCompanies";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/form" element={<Form />} />
        <Route path="/list-companies" element={<ListCompanies />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
