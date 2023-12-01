import React from "react";
import { Home } from "./Home/Home";
import { Catalog } from "../pages/Catalog/Catalog";
import { Favorites } from "./Favorites/Favorites";
import { NavLink, Route, Routes } from "react-router-dom";
// import Layout from "./Layout";
  
export const App = () => {
  return (

    <div>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/catalog" >Catalog</NavLink></li>
          <li> <NavLink to="/favorites">Favorites</NavLink></li>
        </ul>
        
        
       
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </div>
      // <Routes>
      //   <Route path="/" element={<Layout />} >
      //     <Route index element={<Home />} />
      //     <Route path="/favorites" element={<Favorites />} />
      //   <Route path="/catalog" element={<Catalog />} />
      //      </Route>
      // </Routes>
  );
};

