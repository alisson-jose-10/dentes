import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmotionalLandingPage from "./components/EmotionalLandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmotionalLandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;