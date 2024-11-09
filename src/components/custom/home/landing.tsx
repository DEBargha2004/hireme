"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "@/types/icon";
import { Briefcase, MapPin } from "lucide-react";
import { forwardRef, useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import { useForm } from "react-hook-form";
import {
  landingPageSearchSchema,
  TLandingPageSearchSchema,
} from "@/schema/landing-page-search-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

const locations = [
  "San Francisco",
  "New York",
  "San Diego",
  "Los Angeles",
  "San Jose",
  "Ventura",
  "Fresno",
  "Sacramento",
  "Long Beach",
  "Oakland",
];

export default function Landing() {
  const [showLocations, setShowLocations] = useState(false);
  const ref = useClickAway<HTMLDivElement>(() => setShowLocations(false));
  const form = useForm<TLandingPageSearchSchema>({
    resolver: zodResolver(landingPageSearchSchema),
  });

  const recommendedLocatons = locations.filter((l) =>
    l.includes(form.watch("location") ?? ""),
  );

  const handleSubmit = async (data: TLandingPageSearchSchema) => {
    console.log(data);
  };
  return (
    <section className="section space-y-10">
      <h1
        className="md:text-6xl text-5xl font-bold section-container"
        style={{ lineHeight: "1.3" }}
      >
        Direct <span className="text-primary">Hiring</span> App for Founders,
        Team Leaders and Hiring Managers
      </h1>
      <p className="text-lg text-muted-foreground section-container">
        Hirect simplifies the hiring process. Directly chatting with verified
        candidates matched by the AI algorithm ensures a simple, quick and
        effective hiring experience.
      </p>

      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn(
          "flex flex-col items-center justify-start",
          "md:flex-row md:justify-center md:gap-0 md:shadow-spread-xl md:rounded-full",
          "lg:w-4/5 md:w-full w-4/5 mx-auto md:space-y-0 space-y-4",
        )}
      >
        <InputWrapper className="md:shadow-spread-none">
          <IconBox className="md:bg-transparent">
            <Briefcase className="h-5 w-5" />
          </IconBox>
          <InputBox
            type="text"
            placeholder="Software Engineer"
            className="md:border-none"
            {...form.register("occupation")}
          />
        </InputWrapper>

        <InputWrapper tabIndex={1} ref={ref} className="md:shadow-spread-none">
          <IconBox className="md:bg-transparent">
            <MapPin className="h-5 w-5" />
          </IconBox>
          <InputBox
            type="text"
            placeholder={locations[0]}
            onFocus={() => setShowLocations(true)}
            className="md:border-none"
            {...form.register("location")}
          />
          {showLocations && (
            <ul
              className={cn(
                "absolute top-11 md:top-[60px] min-w-[calc(100%-60px)] max-w-fit left-14 h-fit z-10 bg-background shadow-spread p-0.5 rounded",
                "max-h-[300px] overflow-y-scroll scroller",
              )}
            >
              {recommendedLocatons.map((l) => (
                <li
                  key={l}
                  className="p-1.5 px-4 cursor-pointer transition-all rounded hover:bg-primary whitespace-nowrap text-left"
                  onClick={() => {
                    form.setValue("location", l);
                    setShowLocations(false);
                  }}
                >
                  {l}
                </li>
              ))}
              {recommendedLocatons.length === 0 && (
                <li className="p-1.5 transition-all rounded">No results</li>
              )}
            </ul>
          )}
        </InputWrapper>
        <Button className="px-20 md:px-6 py-6 md:py-7 rounded-full md:rounded-l-none text-black text-base font-semibold">
          Start Hiring
        </Button>
      </form>
    </section>
  );
}

const InputWrapper = forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-full md:h-14 h-10 rounded-full shadow-spread flex relative",
      className,
    )}
    {...props}
  />
));

const IconBox = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "grid place-content-center px-4 py-2 bg-accent w-fit rounded-l-full",
        className,
      )}
      {...props}
    />
  ),
);

const InputBox = forwardRef<
  HTMLInputElement,
  React.HTMLProps<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    type="text"
    className={cn(
      "border w-full h-full outline-none px-2 rounded-r-full",
      className,
    )}
    ref={ref}
    {...props}
  />
));

InputWrapper.displayName = "InputWrapper";
IconBox.displayName = "IconBox";
InputBox.displayName = "InputBox";

function InputWithIcon({
  Icon,
  children,
  ...props
}: { Icon: Icon } & React.HTMLProps<HTMLInputElement>) {
  return (
    <div className="w-full rounded-full shadow-spread flex relative">
      <div className="px-4 py-2 bg-accent w-fit rounded-l-full">
        <Icon className="h-5 w-5" />
      </div>
      <div className="w-full rounded-full">
        <input
          type="text"
          className="border w-full h-full outline-none px-2"
          {...props}
        />
      </div>
      {children}
    </div>
  );
}
