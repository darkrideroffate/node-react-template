import React from "react";
import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n, t } = useTranslation();
  return (
    <div dir={i18n.dir()}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
