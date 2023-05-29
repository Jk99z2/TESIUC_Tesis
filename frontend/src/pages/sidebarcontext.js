import React, { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [active, setActive] = useState(true);
  return (
    <SidebarContext.Provider value={{ active, setActive }}>
      {children}
    </SidebarContext.Provider>
  );
};

