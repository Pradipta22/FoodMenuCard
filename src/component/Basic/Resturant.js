import React, { useState } from 'react'
import "./Resturant.css"
import Menu from "./MenuApi"
import MenuCard from "./MenuCard"
import Navbar from "./navbar"


const uniqueList = [...new Set(Menu.map( 
  (curElem) => {return curElem.category;
  })
  ),"ALL",
]
const Resturant = () => {
    const [menuData , setMenuData] = useState(Menu);
    const [menuList , setMenuList]  = useState(uniqueList);
    const filteritem = (category) => {
       if(category === "ALL"){
        setMenuData(Menu);
        return;
       }
      const updatelist = Menu.filter((curElem) =>{
         return curElem.category === category
      })
      setMenuData(updatelist);
    }
  return (
    <> 
    < Navbar filteritem = {filteritem} menuList={menuList} />
    <MenuCard menuData={menuData} />
    </>
  )
}

export default Resturant
