import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DevastatingLandingPage from "./components/DevastatingLandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DevastatingLandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;