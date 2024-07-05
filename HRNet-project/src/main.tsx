import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeView from "./pages/HomeView.tsx";
import CreateEmployeeView from "./pages/CreateEmployeeView.tsx";
import "./styles/style.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      {/* <Loader /> */}
      <Header />
      <Routes>
        <Route path="/employee-list" element={<HomeView />} />
        <Route path="/create-employee" element={<CreateEmployeeView />} />
        <Route path="*" element={<HomeView />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
