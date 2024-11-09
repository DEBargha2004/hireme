import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TStartHiringSchema } from "@/schema/start-hiring";
import { Icon } from "@/types/icon";
import { useClickAway } from "@uidotdev/usehooks";
import { Briefcase, MapPin } from "lucide-react";
import { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";

export default function StartHiringForm({
  form,
  locations,
  className,
  onSubmit,
}: {
  form: ReturnType<typeof useForm<TStartHiringSchema>>;
  onSubmit: (data: TStartHiringSchema) => void;
  className?: string;
  locations: string[];
}) {
  const [showLocations, setShowLocations] = useState(false);
  const ref = useClickAway<HTMLDivElement>(() => setShowLocations(false));
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn(
        "flex flex-col items-center justify-start",
        "md:flex-row md:justify-center md:gap-0 md:shadow-spread-xl md:rounded-full",
        "lg:w-4/5 md:w-full w-4/5 mx-auto md:space-y-0 space-y-4",
        className,
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
            {locations.map((l) => (
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
            {locations.length === 0 && (
              <li className="p-1.5 transition-all rounded">No results</li>
            )}
          </ul>
        )}
      </InputWrapper>
      <Button className="px-20 md:px-6 py-6 md:py-7 rounded-full md:rounded-l-none text-black text-base font-semibold">
        Start Hiring
      </Button>
    </form>
  );
}

export function selectLocations(locations: string[], query: string) {
  return locations.filter((l) => l.includes(query));
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
