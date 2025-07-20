import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ComparisonHome from './Components/CarComparison/ComparisonHome';
import AddNewVehicle from "./Components/CarComparison/AddNewVehicle";
import Vehicles from "./Components/CarComparison/Vehicles"
import UpdateVehicle from "./Components/CarComparison/UpdateVehicle";
import VehicleSearch from "./Components/CarComparison/VehicleSearch";
import VehicleCompareSearch from "./Components/CarComparison/VehicleCompareSearch";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comparisonhome" element={<ComparisonHome />}/>
        <Route path="/addnewvehicle" element={<AddNewVehicle />}  />
        <Route path="/vehicledetails" element={ <Vehicles /> } />
        <Route path="/vehicledetails/:id" element={ <UpdateVehicle /> } />
        <Route path="/vehiclesearch" element={<VehicleSearch />} />
        <Route path="/vehiclecomparesearch" element={<VehicleCompareSearch />} />
      </Routes>
    </BrowserRouter>
  );
}
