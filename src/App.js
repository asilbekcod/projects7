import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/routes";
import ResponsiveAppBar from "./companents/Navbar";
import Footer from "./companents/Futer";
import "./index.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
