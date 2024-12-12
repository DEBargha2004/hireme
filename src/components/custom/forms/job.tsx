import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { TJob } from "@/schema/job";
import { useForm } from "react-hook-form";

export default function JobForm({
  form,
  onSubmit,
}: {
  form: ReturnType<typeof useForm<TJob>>;
  onSubmit: (e: TJob) => void;
}) {
  return (
    <Form {...form}>
      <form
        className="space-y-20 [&>section]:space-y-10"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <section>
          <div className="space-y-3">
            <h1 className="font-semibold text-2xl">
              <span className="text-primary">1.&nbsp;</span>
              <span>Basic Job Information</span>
            </h1>
            <p className="text-sm text-muted-foreground">
              After the job is successfully posted, job type, job title, and job
              location cannot be modified
            </p>
          </div>
          <div className="space-y-4 [&>div]:flex [&>div]:gap-4 [&>div>label]:w-[150px] [&>div>label]:shrink-0">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="space-y-0 flex items-center justify-start ">
                  <FormLabel className="font-semibold whitespace-nowrap">
                    Company
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Company" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-0 flex items-center justify-start ">
                  <FormLabel className="font-semibold whitespace-nowrap">
                    Job Type
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Job Type" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="space-y-0 flex items-center justify-start ">
                  <FormLabel className="font-semibold whitespace-nowrap">
                    Job Title
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Job Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="space-y-0 flex items-center justify-start ">
                  <FormLabel className="font-semibold whitespace-nowrap">
                    Job Description
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isRemote"
              render={({ field }) => (
                <FormItem className="space-y-0 flex items-center justify-start pt-10">
                  <FormLabel className="font-semibold whitespace-nowrap">
                    This is a remote job
                  </FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </section>
        <section>
          <div className="space-y-3">
            <h1 className="font-semibold text-2xl">
              <span className="text-primary">2.&nbsp;</span>
              <span>Job Requirements</span>
            </h1>
            <p className="text-sm text-muted-foreground">
              We will pass the following conditions to accurately recommend
              suitable talents for you, please fill in as much detail as
              possible
            </p>
          </div>
          <div className="space-y-4 [&>div]:flex [&>div]:gap-4 [&>div>label]:w-[150px] [&>div>label]:shrink-0">
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem className="space-y-0 flex items-center justify-start ">
                  <FormLabel className="font-semibold whitespace-nowrap">
                    Experience
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Choose Experience" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="education"
              render={({ field }) => (
                <FormItem className="space-y-0 flex items-center justify-start ">
                  <FormLabel className="font-semibold whitespace-nowrap">
                    Education
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Choose Education" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormItem className="space-y-0 items-center">
              <FormLabel className="font-semibold whitespace-nowrap">
                Offered Salary
              </FormLabel>
              <FormField
                control={form.control}
                name="salary.min"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormControl>
                      <Input placeholder="Select minimum Salary" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="salary.min"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormControl>
                      <Input placeholder="Select minimum Salary" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FormItem>
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="space-y-0 flex items-center justify-start ">
                  <FormLabel className="font-semibold whitespace-nowrap">
                    Job Location
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Job Location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </section>
      </form>
    </Form>
  );
}
