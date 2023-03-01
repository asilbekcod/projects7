import React from "react";
import { Routes, Route} from "react-router-dom";
import About from "../pages/about";
import CONTACT from "../pages/CONTACT/CONTACT";
import EVENTS from "../pages/EVENTS/EVENTS";
import Home from "../pages/home";
import ROOMS from "../pages/ROOMS/ROOMS";


const Router = () => {
  return (
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/contact" element={<CONTACT/>} />
       <Route path="/events" element={<EVENTS/>} />
       <Route path="/rooms" element={<ROOMS/>} />
    </Routes>
  );
};

export default Router;
