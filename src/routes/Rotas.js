import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import PageNotFound from "../Pages/pageNotFound";

function Rotas(){
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}

export default Rotas