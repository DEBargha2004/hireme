import Image from "next/image";
import applogo from "@/../public/app-logo.png";

export default function AppLogo() {
  return (
    <Image
      src={applogo}
      alt="App Logo"
      width={100}
      height={100}
      className="h-full object-cover"
    />
  );
}
