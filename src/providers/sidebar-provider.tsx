"use client";

import React, { createContext, Dispatch, useContext, useState } from "react";

type State = {
  isSidebarExpanded: boolean;
  isSidebarOpen: boolean;
};

type Actions = {
  setIsSidebarExpanded: Dispatch<React.SetStateAction<boolean>>;
  setIsSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
  toggleSidebarExpanded: () => void;
  toggleSidebarOpen: () => void;
};

const SidebarContext = createContext<(State & Actions) | null>(null);

export default function SidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebarExpanded = () => setIsSidebarExpanded(!isSidebarExpanded);
  const toggleSidebarOpen = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarExpanded,
        isSidebarOpen,
        setIsSidebarExpanded,
        setIsSidebarOpen,
        toggleSidebarExpanded,
        toggleSidebarOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a <SidebarProvider />");
  }

  return context;
};
