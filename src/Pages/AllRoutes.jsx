import React from "react";
import { Routes, Route } from "react-router-dom";
import Wfh from "../Components/Wfh";
import Electronics from "./Electronics";
import Fitness from "./Fitness";
import Furniture from "./Furniture";
import Homepage from "./Homepage";
import Appliances from "./Appliances";


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route  path="/WfhEssentials" element={<Wfh />} />
        <Route path="/Fitness" element={<Fitness/>}/>
        <Route path="/Furniture" element={<Furniture />}/>
        <Route path="/Appliances" element={<Appliances/>}/>
      </Routes>
    </>
  );
};

export default AllRoutes;
