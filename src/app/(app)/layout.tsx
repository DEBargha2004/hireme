import Navbar from "@/components/custom/app/navbar";
import Sidebar from "@/components/custom/app/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-fit">
      <Sidebar className="hidden md:block w-[250px] shrink-0 sticky top-0 h-[100dvh]" />
      <div className="w-full">
        <Navbar className="sticky top-0 bg-card z-[9999]" />
        <div className="p-6 pb-0">{children}</div>
      </div>
    </div>
  );
}
