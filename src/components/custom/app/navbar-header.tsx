import { usePathname } from "next/navigation";

export default function NavbarHeader() {
  const pathname = usePathname();

  if (pathname === "/dashboard/jobs/new") {
    return <h1 className="w-full font-semibold text-lg">For You</h1>;
  }
  return <h1 className="w-full font-semibold text-lg">For You</h1>;
}
