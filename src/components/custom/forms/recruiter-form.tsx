import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputPhone } from "@/components/ui/input-phone";
import { cn } from "@/lib/utils";
import { TRecruiterSchema } from "@/schema/recruiter";
import { useForm } from "react-hook-form";

const StyledInput: React.FC<React.ComponentProps<"input">> = ({
  className,
  ...props
}) => {
  return (
    <Input
      className={cn(
        "h-10 rounded-full px-4",
        "focus-visible:bg-blue-50 focus-visible:ring-0",
        className,
      )}
      {...props}
    />
  );
};

export default function RecruiterForm({
  form,
  onSubmit,
}: {
  form: ReturnType<typeof useForm<TRecruiterSchema>>;
  onSubmit: (data: TRecruiterSchema) => void;
}) {
  return (
    <Form {...form}>
      <form
        className="md:space-y-4 space-y-6 select-none text-left [&>div>p]:ml-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <StyledInput placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputPhone value={field.value} onChange={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <StyledInput placeholder="Email" {...field} type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <StyledInput placeholder="Company Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="designation"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <StyledInput placeholder="Designation" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="receiveUpdates"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex justify-start items-center gap-3 cursor-pointer">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="h-5 w-5"
                  />
                  <p
                    className="text-muted-foreground"
                    onClick={() => field.onChange(!field.value)}
                  >
                    I would love to receive updates via Whatsapp
                  </p>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full rounded-full text-black text-base font-semibold">
          Submit
        </Button>
      </form>
    </Form>
  );
}
