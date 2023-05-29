import { useEffect, useState } from "react";
import Image from "next/image";
import React, { useContext } from "react";
import { SidebarContext } from "./sidebarcontext";
import { logoprueba,control,User,Setting,Search,Folder,Chat,Chart_fill,Chart,Calendar } from "@/../public/assets/images/icon";
import Link from "next/link";
import { ApplicationLogo3 } from "@/components/ApplicationLogo";
const Pruebaside = ({children}) => {
  const { active } = useContext(SidebarContext);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setOpen(active);
  }, [active]);
  const Menus = [
    { title: "Inicio", src: Chart_fill, link:"/dashboard"},
    { title: "Temas", src: Chat, link:"/temas" },
    { title: "Tesis", src: User, gap: false, link:"/tesis" },
    { title: "Presentaciones ", src: Calendar, link:"/presentacion" },
    { title: "Actividades", src: Search, link:"/actividades" },
    { title: "Anuncios", src: Chart, link:"/anuncios" },
    { title: "Documento de tesis ", src: Folder, gap: false, link:"/documentos" },
    { title: "Material de estudio", src: Setting, link:"/materiales" },
  ];

  return (
    <> 
      <div className={` ${open ? "grid-cols-[0px,1fr] md:grid-cols-[255px,1fr]" : "grid-cols-[0px,1fr] md:grid-cols-[80px,1fr] "} grid`}>
      <div>
          <aside id="sidebar-multi-level-sidebar" className={` ${open ? "w-64" : "hidden md:flex "} fixed  left-0 z-40  h-screen p-1 md:p-5 bg-gray-900  pt-2  duration-300 transition-transform  sm:translate-x-0`} aria-label="Sidebar">
              <div className="ml-6 md:hidden ">              
                <ApplicationLogo3 className="w-48 mb-2"/>               
              </div> 
              <Image src={control} alt="imagen de control" className={`absolute cursor-pointer -right-4 top-0 w-9 hidden md:flex border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>
              
              <ul className="">
                {Menus.map((Menu, index) => (
                <li key={index} className={`flex  hover:bg-blue-900  group  hover:shadow-lg m-auto rounded-md p-2  cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 
                  ${Menu.gap ? "mt-9" : "mt-2"} ${ index === 0 && "bg-light-white"} `}>
                  <a href={`${Menu.link}`} onClick={()=>setOpen(!open)} className='hover:text-gray-400 duration-500 flex gap-2 w-full'>
                    <Image src={Menu.src} className="w-8" alt="imagen de menus" />
                  <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                  </span></a>
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


