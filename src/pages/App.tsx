//import React from "react";
//import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Sidebar from "../component/Sidebar"
import Profile from "../component/Profile"
import Map from "../component/Map"
import Project from "../component/Project"

function App() {
  
  return (
    <div className='flex'>
      <div className="flex flex-col border border-l border-[#1E1E1E69]">
        <Profile />
        <Sidebar />
      </div>
      <Map />
    </div>
    
  )
}

export default App
