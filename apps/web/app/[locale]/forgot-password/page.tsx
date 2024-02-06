'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Button,
    Form,
    FormControl, FormField,
    FormItem,
    FormLabel, FormMessage, Input
} from '@shadcn-next-skeleton/shared';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
const formSchema = z.object({
    email: z.string().refine(value => /^\S+@\S+\.\S+$/.test(value), {
        message: 'Please enter a valid email / phone format',
    }),
    password: z.string().min(7, 'Password must be at least 7 characters').max(50),
});

export default function ForgotPassword() {
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

                    <h2 className=' h-1 flex items-center justify-center text-2xl font-serif font-normal text-gray-800'>Reset Password </h2>
                    <h2 className='flex items-center justify-center text-sm  text-gray-500'>We will send you an OTP in your email / phone to create a new password.</h2>

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
                        <Button className='w-96' onClick={form.handleSubmit(onSubmit)}>Send OTP</Button>
                        <Button variant={"link"} className='w-96 flex justify-center font-serif font-normal '>Back to Sign in</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}