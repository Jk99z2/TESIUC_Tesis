import { useEffect, useState } from "react";
import Image from "next/image";
import React, { useContext } from "react";
import { SidebarContext } from "./sidebarcontext";
import { logoprueba,control,User,Setting,Search,Folder,Chat,Chart_fill,Chart,Calendar } from "@/../public/assets/images/icon";
const Pruebaside = ({children}) => {
  const { active } = useContext(SidebarContext);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setOpen(active);
  }, [active]);
  const Menus = [
    { title: "Dashboard", src: Chart_fill },
    { title: "Inbox", src: Chat },
    { title: "Accounts", src: User, gap: true },
    { title: "Schedule ", src: Calendar },
    { title: "Search", src: Search },
    { title: "Analytics", src: Chart },
    { title: "Files ", src: Folder, gap: true },
    { title: "Setting", src: Setting },
  ];

  return (
    <> 
      <div className={` ${open ? "grid-cols-[0px,1fr] md:grid-cols-[255px,1fr]" : "grid-cols-[0px,1fr] md:grid-cols-[80px,1fr] "} grid`}>
        <div>
        <aside id="sidebar-multi-level-sidebar" className={` ${open ? "w-64" : "w-0 md:w-20 "} fixed  left-0 z-40  h-screen p-1 md:p-5 bg-gray-900  pt-8  duration-300 transition-transform  sm:translate-x-0`} aria-label="Sidebar">
            
            <Image src={control} alt="imagen de control" className={`absolute cursor-pointer -right-4 top-0 w-9 hidden md:flex border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>
            <div className="flex gap-x-4 items-center">
              <Image  src={logoprueba} alt="imagen de logo prueba" className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"}`}/>
              <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
                Designer
              </h1>
            </div>
            <ul className="pt-6">
              {Menus.map((Menu, index) => (
              <li key={index} className={`flex  hover:bg-blue-900  group  hover:shadow-lg m-auto rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${ index === 0 && "bg-light-white"} `}>
                <Image src={Menu.src} alt="imagen de menus" />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </li> ))}
            </ul>                 
          </aside>           
        </div>
        {children}
                         
          
                  
      </div>  
    </>
     
  );
};
export default Pruebaside; 


