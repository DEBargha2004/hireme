import Image from "next/image";
import applogo from "@/../public/app-logo.png";
import appLogoLight from "@/../public/app-logo-light.png";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export default function AppLogo({
  className,
  variant = "dark",
  ...props
}: Omit<Omit<ComponentProps<typeof Image>, "alt">, "src"> & {
  variant?: "light" | "dark";
}) {
  return (
    <Image
      width={100}
      height={100}
      className={cn("h-full object-cover", className)}
      {...props}
      src={variant === "dark" ? applogo : appLogoLight}
      alt="App Logo"
    />
  );
}
