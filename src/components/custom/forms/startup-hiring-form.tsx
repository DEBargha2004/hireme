import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { TStartupHiring } from "@/schema/startup-hiring";
import { useForm } from "react-hook-form";
import { StyledFormInput } from "../styled-form-input";
import { InputPhone } from "@/components/ui/input-phone";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { designations } from "@/constants/field-options";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function StartupHiringForm({
  form,
  onSubmit,
}: {
  form: ReturnType<typeof useForm<TStartupHiring>>;
  onSubmit: (data: TStartupHiring) => void;
}) {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 text-left [&>div>.error-message]:ml-3 shadow-xl"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <StyledFormInput placeholder="Name" {...field} />
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
                <InputPhone {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <StyledFormInput placeholder="Office Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <StyledFormInput placeholder="Company Name" {...field} />
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
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger ref={field.ref}>
                    <SelectValue placeholder="Designation" />
                  </SelectTrigger>
                  <SelectContent>
                    {designations.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="receiveUpdatesOnWhatsapp"
          render={({ field }) => (
            <FormItem className="flex items-center justify-start space-y-0 gap-5">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-muted-foreground">
                I would like to receive updates from via whatsapp
              </FormLabel>
            </FormItem>
          )}
        />
        <Button type="submit" className="rounded-full text-black w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
