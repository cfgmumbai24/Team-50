// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Fellow from "./components/Fellow";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/fellow" element={<Fellow/>}></Route>
          {/* Other routes */}
        </Route>
      </Routes>
    </Router>
  );
}
export default App;