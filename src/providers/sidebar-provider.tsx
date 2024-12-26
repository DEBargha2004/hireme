"use client";

import { useCookie } from "@/hooks/use-cookie";
import React, {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useState,
} from "react";

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
  defaultValues,
}: {
  children: React.ReactNode;
  defaultValues?: Partial<State>;
}) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(
    defaultValues?.isSidebarExpanded ?? false,
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    defaultValues?.isSidebarOpen ?? false,
  );
  const { setCookie } = useCookie();

  const toggleSidebarExpanded = () => setIsSidebarExpanded(!isSidebarExpanded);
  const toggleSidebarOpen = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    setCookie("isSidebarExpanded", isSidebarExpanded.toString());
  }, [isSidebarExpanded]);

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
