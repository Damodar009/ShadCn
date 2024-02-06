'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Form,
  FormControl, FormField,
  FormItem,
  FormLabel, FormMessage, Input, PasswordInput
} from '@shadcn-next-skeleton/shared';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
const formSchema = z.object({
  email: z.string().refine(value => /^\S+@\S+\.\S+$/.test(value), {
    message: 'Please enter a valid email / phone format',
  }),
  password: z.string().min(7, 'Password must be at least 7 characters').max(50),
});

export default function Login() {
  const {
    formState: { errors },
  } = useForm();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="bg-background">
      <div className='h-screen flex items-center justify-center '>
        <div className='w-96 space-y-8'>
          <h2 className=' h-12 flex items-center justify-center text-2xl font-serif font-normal text-gray-800'>Sign in </h2>
          <Form {...form}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="grid w-full max-w-sm items-center gap-1">
                    <FormLabel className='' >Email / Phone</FormLabel>
                    <FormControl >
                      <Input placeholder="jhone.doe@gmail.com"{...field} />
                    </FormControl>
                    <FormMessage></FormMessage>
                  </div>
                </FormItem>
              )}
            />
            <div>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem >
                    <div className="grid w-full max-w-sm items-center gap-1">
                      <FormLabel className="">Password</FormLabel>
                      <FormControl>
                        <PasswordInput placeholder="Enter password" type="password" className=''{...field} />
                      </FormControl>
                      <FormMessage></FormMessage>
                    </div>
                  </FormItem>
                )}
              />
              <Button variant={"link"} className='w-96 flex justify-end '>Forgot Password</Button>
            </div>
            <Button className='w-96' onClick={form.handleSubmit(onSubmit)}>Log In</Button>

          </Form>
          <div className='h-1.5'></div>
          <div className="w-100 border-t border-gray-400"></div>
          <h1 className=' h-2 flex items-center justify-center text-1xl  text-gray-800'>Dont have an account ?</h1>
          <Button variant={"outline"} className='w-96 border border-gray-400'>Create an Account</Button>
        </div>
      </div>
    </div>
  );
}