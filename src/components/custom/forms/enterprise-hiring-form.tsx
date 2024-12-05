import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { TEnterpriseHiring } from "@/schema/enterprise-hiring";
import { useForm } from "react-hook-form";
import { StyledFormInput, styledInputClass } from "../styled-form-input";
import { InputPhone } from "@/components/ui/input-phone";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  designations,
  numberOfCandidates,
  roles,
} from "@/constants/field-options";

export default function EnterpriseHiringForm({
  form,
  onSubmit,
}: {
  form: ReturnType<typeof useForm<TEnterpriseHiring>>;
  onSubmit: (data: TEnterpriseHiring) => void;
}) {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 text-left [&>div>.error-message]:ml-5 @container"
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
                <InputPhone
                  value={field.value}
                  onChange={field.onChange}
                  ref={field.ref}
                />
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
                <StyledFormInput
                  type="email"
                  placeholder="Company Email"
                  {...field}
                />
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
                  <SelectTrigger ref={field.ref} className={styledInputClass}>
                    <SelectValue placeholder="Designation" {...field} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {designations.map((d) => (
                        <SelectItem key={d.value} value={d.value}>
                          {d.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid @sm:grid-cols-2 gap-6 [&>div>.error-message]:ml-5">
          <FormField
            control={form.control}
            name="numberOfCandidates"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger ref={field.ref} className={styledInputClass}>
                      <SelectValue
                        placeholder="Number of candidates"
                        {...field}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {numberOfCandidates.map((d) => (
                          <SelectItem key={d.value} value={d.value}>
                            {d.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger ref={field.ref} className={styledInputClass}>
                      <SelectValue placeholder="Role" {...field} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {roles.map((d) => (
                          <SelectItem key={d.value} value={d.value}>
                            {d.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className="w-full font-semibold rounded-full text-black"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
