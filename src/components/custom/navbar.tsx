"use client";

import Link from "next/link";
import AppLogo from "./app-logo";
import { usePathname } from "next/navigation";
import RecruiterLoginButton from "./buttons/recruiter-login-button";
import DownloadAppButton from "./buttons/download-app-button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import { useGlobalAppStore } from "@/store/global-app-store";
import { navLinks } from "@/constants/nav-links";

export default function Navbar() {
  const pathname = usePathname();
  const { isNavbarCompressed, toggleIsNavbarCompressed } = useGlobalAppStore();
  return (
    <>
      <nav className="sticky z-[999] top-0 py-5 px-10 shadow bg-background">
        <div className="w-full h-10 flex items-center justify-between">
          <AppLogo />
          <div className="w-full flex justify-end">
            <div className="w-full lg:flex hidden justify-end items-center">
              {navLinks.slice(0, 3).map((link) => (
                <Link href={link.href} key={link.label}>
                  <p
                    className={cn(
                      "py-7 xl:px-6 px-4 border-b-[3px] border-transparent hover:border-primary text-base",
                      pathname === link.href && "border-primary",
                    )}
                  >
                    {link.label}
                  </p>
                </Link>
              ))}
              <RecruiterLoginButton className="mx-2" />
              <DownloadAppButton className="mx-2" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="mx-2 px-3 hover:bg-transparent"
                    variant={"ghost"}
                  >
                    <AlignJustify className="h-5 w-5 scale-125" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="z-[999]">
                  {navLinks.slice(3).map((link) => (
                    <Link href={link.href} key={link.label}>
                      <DropdownMenuItem className="p-4">
                        {link.label}
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Button
              className="lg:hidden px-3 border-primary"
              variant={"outline"}
              onClick={toggleIsNavbarCompressed}
            >
              <AlignJustify className="scale-125" />
            </Button>
          </div>
        </div>
      </nav>
      <div
        className={cn(
          "fixed left-0 top-20 z-[999] w-full transition-all lg:hidden flex flex-col justify-center items-center gap-3 bg-muted overflow-hidden",
          isNavbarCompressed ? "h-0" : "h-[400px]",
        )}
      >
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href}>
            <p
              className={cn(
                "p-2 px-4 w-full font-medium border-b-[3px] border-transparent hover:border-primary",
                pathname === link.href && "border-primary",
              )}
            >
              {link.label}
            </p>
          </Link>
        ))}
        <RecruiterLoginButton />
        <DownloadAppButton />
      </div>
    </>
  );
}
