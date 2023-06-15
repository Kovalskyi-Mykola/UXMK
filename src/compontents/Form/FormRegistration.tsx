"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// const client = new MessageClient({ username: USERNAME, apiKey: API_KEY });
// const response = await client.sendMessage({
//     to: 'test@example.net',
//     from: 'test@example.com',
//     plain: 'test message',
//     html: '<h1>Test Message</h1>',
//     subject: "hello world"
// });

import { MessageClient } from "cloudmailin"

const formSchema = z.object({
    email: z.string().min(2, { message: "user gmail must be at least 2 charachters" }).max(50),
    username: z.string().min(2, { message: "user name can't be emtpy" }).max(50),
    budget: z.string().min(3, { message: "user budget must be over 949 dolars" }).max(50),
})

export function ProfileForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            budget: "",
            email: ""

        },
    })
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {

        console.log(values)
    }
    return (

        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full md:min-w-max max-w-md  ">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input className="border-black" placeholder="Tell us your name" {...field} />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl >
                                <Input className="border-black " placeholder="Tell us your email" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />   <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Budget</FormLabel>
                            <FormControl>
                                <Input className="border-black" placeholder="Your budget expectations" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )} />
                <Button className="w-full" type="submit">Submit</Button>
                <div>
                    By clicking on sublit button u agee to our <Link prefetch={false} href={"privacy"} className="w-full text-center underline underline-offset-4 decoration-2" >privacy pilicy</Link>
                </div>
            </form>
        </Form>


    )
}