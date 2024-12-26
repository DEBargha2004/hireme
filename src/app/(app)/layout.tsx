import Navbar from "@/components/custom/app/navbar";
import Sidebar from "@/components/custom/app/sidebar/sidebar";
import SidebarProvider from "@/providers/sidebar-provider";
import { cookies } from "next/headers";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookie = await cookies();
  const isSidebarExpanded = cookie.get("isSidebarExpanded")?.value === "true";

  return (
    <SidebarProvider defaultValues={{ isSidebarExpanded }}>
      <div className="flex items-start h-fit">
        <Sidebar className="hidden md:flex shrink-0 sticky top-0 h-[100dvh] shadow-lg" />
        <div className="w-full ">
          <Navbar className="sticky top-0 bg-card z-[10]" />
          <div className="md:p-4 p-3 pb-0">{children}</div>
        </div>
      </div>
    </SidebarProvider>
  );
}
