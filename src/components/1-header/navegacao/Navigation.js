import React,{useState} from 'react';
import { MenuBurguer } from './menu-burguer/burguer-style';
import Navlinks from './navlinks/Navlinks';


function Navigation(){
  const [open, setOpen] = useState(true)

  return(
    <>
      <MenuBurguer open = {open} onClick={()=>setOpen(!open)}>
        <div/>
        <div/>
        <div/>
      </MenuBurguer>
      <Navlinks open = {open}/>
    </>
  )
}

export default Navigation