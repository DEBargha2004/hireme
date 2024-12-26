"use client";

import { cn } from "@/lib/utils";
import { Icon } from "@/types/icon";
import { createContext, useContext } from "react";

type SidebarItemContextProps = { selected: boolean };

const SidebarItemContext = createContext<SidebarItemContextProps | null>(null);

const useSidebarItem = () => {
  const context = useContext(SidebarItemContext);

  if (!context) {
    throw new Error("useSidebarItem must be used within a <SidebarItem />");
  }

  return context;
};

export const SidebarItem: React.FC<
  React.ComponentProps<"div"> & {
    selected?: boolean;
  }
> = ({ className, selected = false, ...props }) => {
  return (
    <SidebarItemContext.Provider value={{ selected }}>
      <div
        className={cn(
          "flex justify-start items-center gap-4 w-full rounded-[2px]",
          "transition-all",
          "data-[selected=true]:text-primary hover:bg-primary/10 data-[selected=true]:bg-primary/20",
          className,
        )}
        {...props}
      />
    </SidebarItemContext.Provider>
  );
};

export const SidebarItemIcon: React.FC<{ Icon: Icon; className?: string }> = ({
  className,
  Icon,
}) => {
  const { selected } = useSidebarItem();
  return (
    <Icon
      className={cn("h-5 w-5 shrink-0", selected && "text-primary", className)}
    />
  );
};

export const SidebarItemLabel: React.FC<React.ComponentProps<"p">> = ({
  className,
  ...props
}) => {
  const { selected } = useSidebarItem();
  return (
    <p
      className={cn("text-sm", selected && "text-primary", className)}
      {...props}
    />
  );
};
