"use client"

import { HeaderNavbarS } from "../app/components/sideNav-sheet"
import { Sidebar } from "./sidebar"


export function HeaderNavbar() {
  return (
    <div className=" flex justify-center items-center p-5 border-b space-x-8">
      
      <HeaderNavbarS/>
      <Sidebar title = "Clothing"/>
      <Sidebar title = "Shoes"/>
      <Sidebar title = "Bags"/>
      <Sidebar title = "Watches"/>
      <Sidebar title = "Belt"/>
      <Sidebar title = "Personal Care"/>
    </div>
  )
}

