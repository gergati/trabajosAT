// src/app/auth/verify-email/ui/VerifyEmail.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const VerifyEmail = () => {
    const searchParams = useSearchParams();
    const message = searchParams.get('message');
    const error = searchParams.get('error');

    return (
        <>
            {
                message === 'email-verified'
                    ? (<div className="">
                        <Card className="p-10">
                            <Image
                                src={'/icon/logo-icon.png'}
                                width={60}
                                height={60}
                                alt="Logo de TrabajosAT"
                                className="w-16 h-16 m-auto"
                            />
                            <div className="flex gap-2">
                                <CardTitle className="text-2xl text-center">Correo Verificado </CardTitle><Check className="size-8 text-green-500" />
                            </div>
                            <div className="text-center mt-5">
                                <Button className=" bg-gradient-to-r from-sky-400 to-blue-500" variant='ghost'>
                                    <Link
                                        aria-current="page"
                                        className="flex uppercase justify-center gap-2 py-2 pr-4 text-sm pl-3 dark:text-white text-black hover:text-gray-800 border-b border-gray-100 md:border-0 "
                                        href='/auth/login'
                                    >
                                        Ingresar
                                    </Link>
                                </Button>
                            </div>
                        </Card>
                    </div>)
                    : (<div className="">
                        <Card className="p-10">
                            <Image
                                src={'/icon/logo-icon.png'}
                                width={60}
                                height={60}
                                alt="Logo de TrabajosAT"
                                className="w-16 h-16 m-auto"
                            />
                            <CardTitle className="text-2xl text-center">Chequea tu correo electronico</CardTitle>
                            <CardDescription>Enviamos un enlace de inicio de sesión a tu correo electronico </CardDescription>
                        </Card>
                    </div>)

            }
        </>
    );
}
