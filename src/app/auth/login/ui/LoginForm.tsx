"use client"

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import Link from "next/link"
import { useFormState, useFormStatus } from "react-dom"
import { ArrowRightIcon, LucideInfo } from "lucide-react"
import { useEffect } from "react"
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { authenticate } from "@/actions/auth/login"
import { toast } from "sonner"


const formSchema = z.object({
    password: z.string().min(2).max(50),
    email: z.string().email()
})


export const LoginForm = () => {

    const [state, dispatch] = useFormState(authenticate, undefined);

    useEffect(() => {
        if (state === 'Success') {
            window.location.replace('/')
        }
        if (state === 'Something went wrong.') {
            toast.error('Credenciales Incorrectas')
        }
    }, [state])


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    return (
        <Form {...form}>
            <CardHeader className="flex flex-col items-center">
                    <Image
                        src="/icon/logo-icon.png"
                        alt="Icon logo trabajosAT"
                        width={56}
                        height={56}
                        className="w-12 h-12 transition-transform duration-300 ml-2"
                    />
                <CardTitle className="text-[40px]">
                    <span>Bienvenido de nuevo.</span>
                </CardTitle>
                <FormDescription className="flex gap-2">
                    <span className="text-black">Eres nuevo aquí?</span>
                    <Link href='/auth/new-account' className="text-[#003791] hover:text-[#003760]"> Crear una cuenta.</Link>
                </FormDescription>
            </CardHeader>
            <form action={dispatch} className="space-y-8 p-6 pt-0">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="ejemplo@ejemplo.com" {...field} />
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
                                <Input type="password" placeholder="************" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div
                    className="flex h-8 items-end space-x-1"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {state === 'Something went wrong.' && (
                        <div className="mb-2 gap-2 flex">
                            <LucideInfo className=" h-5 w-5 text-red-500" />
                            <p className="text-sm text-red-500">Credenciales incorrectas</p>
                        </div>
                    )}
                </div>
                <LoginButton />

            </form>
        </Form>
    )


    function LoginButton() {
        const { pending } = useFormStatus();

        return (
            <Button className="mt-4 text-center w-full bg-gradient-to-r from-sky-400 to-blue-500 dark:from-sky-500 dark:to-blue-600 dark:text-white dark:hover:from-sky-600 dark:hover:to-blue-700" aria-disabled={pending}>
                Ingresar <ArrowRightIcon className="ml-2 h-5 w-5 text-gray-50" />
            </Button>
        );
    }
}