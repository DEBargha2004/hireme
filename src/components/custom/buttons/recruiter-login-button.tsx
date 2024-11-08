import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function RecruiterLoginButton({
  className,
  ...props
}: ButtonProps) {
  return (
    <Link href={"/recruiter"}>
      <Button
        variant={"outline"}
        className={cn(
          "rounded-full text-primary border-primary font-semibold px-7 py-5 hover:text-primary hover:bg-transparent text-base",
          className,
        )}
        {...props}
      >
        Recruiter Login
      </Button>
    </Link>
  );
}
