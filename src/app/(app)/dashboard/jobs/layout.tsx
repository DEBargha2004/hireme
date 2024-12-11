"use client";

import micromatch from "micromatch";
import { usePathname } from "next/navigation";
import NavLinks from "./_components/nav-links";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <main className="space-y-6">
      <NavLinks />
      {children}
    </main>
  );
}
