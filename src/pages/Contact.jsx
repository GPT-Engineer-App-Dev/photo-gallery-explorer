import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-3xl mb-4">Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name">Name</label>
          <Input id="name" {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input id="email" {...register("email", { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <Input id="subject" {...register("subject", { required: true })} />
          {errors.subject && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <Textarea id="message" {...register("message", { required: true })} />
          {errors.message && <span>This field is required</span>}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Contact;