import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { educationList, experienceList, jobTypes } from "@/constants/field-options";
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
                <FormItem className="space-y-0 flex items-center mt-2 justify-start ">
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
                <FormItem className="space-y-0 flex items-center mt-2 justify-start ">
                  <FormLabel className="font-semibold whitespace-nowrap">
                    Job Type
                  </FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger ref={field.ref}>
                        <SelectValue placeholder="Full Time" />
                      </SelectTrigger>
                      <SelectContent>
                        {
                          jobTypes.map(jt => (
                            <SelectItem key={jt.value} value={jt.value}>{jt.label}</SelectItem>
                          ))
                        }
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="space-y-0 flex items-center mt-2 justify-start ">
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
                <FormItem className="space-y-0 flex items-start mt-2 justify-start ">
                  <FormLabel className="font-semibold whitespace-nowrap inline-block mt-2">
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
                <FormItem className="space-y-0 flex items-center mt-2 justify-start pt-10">
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
                <FormItem className="space-y-0 flex items-center mt-2 justify-start ">
                  <FormLabel className="font-semibold whitespace-nowrap">
                    Experience
                  </FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger ref={field.ref}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {experienceList.map(exp => (
                          <SelectItem key={exp.value} value={exp.value}>{exp.label}</SelectItem>
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
              name="education"
              render={({ field }) => (
                <FormItem className="space-y-0 flex items-center mt-2 justify-start ">
                  <FormLabel className="font-semibold whitespace-nowrap">
                    Education
                  </FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger ref={field.ref}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {educationList.map(edu => (
                          <SelectItem key={edu.value} value={edu.value}>{edu.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormItem className="space-y-0 items-center mt-2">
              <FormLabel className="font-semibold whitespace-nowrap">
                Offered Salary
              </FormLabel>
              <FormField
                control={form.control}
                name="salary.min"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormControl>
                      <Input placeholder="Select minimum Salary" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="salary.max"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormControl>
                      <Input placeholder="Select max Salary" type="number" {...field} />
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
                <FormItem className="space-y-0 flex items-center mt-2 justify-start ">
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
