import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RouteComponent from "./route";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Forget from "./components/Forget";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RouteComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Forget" element={<Forget  />} />
      </Routes>
    </Router>
  );
}

export default App;
