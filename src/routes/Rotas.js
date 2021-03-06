import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import PageNotFound from "../Pages/pageNotFound";
import Projeto from "../Pages/Projeto";

function Rotas(){
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projetos' element={<Projeto/>}/>
      <Route path='/404' element={<PageNotFound/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}

export default Rotas