'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RegisterUser } from "@/actions";
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { Role } from "@prisma/client";

const formSchema = z.object({
    username: z.string({ message: "Ingrese un nombre con más de dos carácteres" }).min(2).max(20),
    password: z.string().min(6, { message: 'La contraseña debe ser superior a 6 caracteres' }).max(20).regex(/[a-zA-Z]/, "La contraseña debe contener al menos una letra").regex(/[0-9]/, "La contraseña debe contener al menos un número"),
    email: z.string().email({ message: 'Ingrese su email' }),
    role: z.enum(['user', 'admin'], { message: 'Seleccione para saber cual será su rol' }),
});

export const RegisterForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            role: "user", // Asegúrate de tener un valor predeterminado para todos los campos
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setErrorMessage('');
        setSuccessMessage('');
        const { username, email, password, role } = values;
        const userRole = role === 'admin' ? Role.admin : Role.user;
        const resp = await RegisterUser(username, email, password, userRole);

        if (!resp.ok) {
            setErrorMessage(resp.message);
            toast.error('No se pudo crear el usuario');
            return;
        }

        setSuccessMessage('Cuenta creada. Por favor verifica tu correo para activar tu cuenta.');
        toast.success('Cuenta creada. Por favor verifica tu correo para activar tu cuenta.');
        setTimeout(() => {
            window.location.replace('/auth/verify-email');
        }, 3000);
    }

    return (
        <Form {...form}>
            <CardHeader>
                <CardTitle>Crear cuenta</CardTitle>
                <CardDescription>Busque entre cientos de empleos.</CardDescription>
            </CardHeader>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-6">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre completo</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Jhon Doe" {...field} />
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
                <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>Seleccione.</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="admin" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Busco Acompañante Terapeutico
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="user" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Soy Acompañante Terapeutico
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <span className="text-red-500">{errorMessage}</span>
                <span className="text-green-500">{successMessage}</span>
                <Button className="w-full" type="submit">Crear cuenta</Button>
            </form>
        </Form>
    );
}
