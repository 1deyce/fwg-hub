"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function RegisterPage() {
    const router = useRouter();
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setIsLoading(true);
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
    
            console.log(response);
    
            if (!response.ok) {
                const contentType = response.headers.get("Content-Type");
                let errorData;
    
                if (contentType && contentType.includes("application/json")) {
                    errorData = await response.json();
                } else {
                    const text = await response.text();
                    errorData = { message: text || "Unknown error occurred" };
                }
    
                console.error("Registration error details:", errorData);
                throw new Error(errorData.message || "Registration failed");
            }
    
            toast({
                title: "Registration successful!",
                description: "Please log in with your credentials.",
            });
            router.push("/auth/login");
        } catch (error) {
            if (error instanceof TypeError) {
                // Handle network error
                console.error('Network error:', error);
                toast({
                    variant: "destructive",
                    title: "Network Error",
                    description: "Unable to reach the server. Please check your connection.",
                });
            } else {
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: "Something went wrong. Please try again.",
                });
                console.error('Error during registration:', error);
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center px-10">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your details below to create your account
                    </p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
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
                                    <FormControl>
                                        <Input
                                            placeholder="john@example.com"
                                            type="email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="******" type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="w-full" type="submit" disabled={isLoading}>
                            {isLoading ? "Creating account..." : "Create account"}
                        </Button>
                    </form>
                </Form>

                <p className="px-8 text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link
                        href="/auth/login"
                        className="underline underline-offset-4 hover:text-primary"
                    >
                        Login
                    </Link>
                </p>
                <p className="px-8 text-center text-sm text-muted-foreground">
                    <Link
                        href="/"
                        className="underline underline-offset-4 hover:text-primary"
                    >
                        Back to Home
                    </Link>
                </p>
            </div>
        </div>
    );
}
