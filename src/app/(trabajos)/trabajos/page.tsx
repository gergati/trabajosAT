import React from "react";
import Link from "next/link";
import { auth } from "../../../../auth.config";
import { getPaginationWorks, worksSavedList } from "@/actions";
import { ButtonStore } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { UserCard } from "@/components/ui/user-hover-card/UserCard";
import { BookOpen, CalendarDays, MapPin, MapPinned, PanelTopOpen, Paperclip, University, User } from "lucide-react";

export default async function TrabajosPage() {

    const session = await auth()
    const data = session?.user
    const userId = session?.user.id
    const worksTemp = await getPaginationWorks()
    const { worksSaved } = await worksSavedList(userId!)

    const isSaved = (userId2: string, workId: string) => {
        if (userId === userId2 && workId === workId) {
            return <>Guardado...</>
        }
    }

    worksSaved?.map((item) => {
        isSaved(item.userId, '')
    })
    worksTemp.map((item) => {
        isSaved('', item.id)
    })

    return (
        <div className="relative z-[30] mt-20 min-h-screen grid grid-cols-1 w-[90%] md:w-[70%] m-auto bg-[#EDF7F5] dark:bg-[#020817] gap-3">

            {worksTemp.length === 0 ? (
                <div className="text-center text-xl font-semibold">
                    No hay trabajos disponibles... Vuelve más tarde.
                </div>
            ) : (
                worksTemp.map((item: any, index: number) => (
                    <React.Fragment key={index}>
                        <div className="absolute z-[29] md:mt-28 mt-36 h-[200px] blur-3xl antialiased bg-gradient-to-br from-sky-600 via-blue-600 to-neutral-500 w-[50%] m-auto rounded-lg"></div>
                        <Card className="md:h-[250px] h-[500px] shadow-lg z-[32]">
                            <CardHeader className="flex h-[90px] mb-12 md:mb-0">
                                <div className="flex md:flex-row flex-col md:justify-between items-start gap-2">
                                    <div className="flex flex-col">
                                        <CardTitle className="text-lg">A.T p/ paciente de {item.age} años</CardTitle>
                                        <UserCard name={item.user.name} email={item.user.email} />
                                        <CardDescription className="text-xs">{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ''}</CardDescription>
                                    </div>
                                    {
                                        data
                                            ? (<ButtonStore email={item.email} phone={item.phone} workId={item.id} />)
                                            : (<Link href='/auth/login'>
                                                <Button variant='success' className="text-black">Loguearse</Button>
                                            </Link>)
                                    }
                                </div>
                            </CardHeader>
                            <Separator className="w-[95%] m-auto mt-20 md:mt-2 " />
                            <CardContent className="flex flex-col mt-4 md:flex-row h-full md:gap-2">
                                <Card className="flex md:h-28 justify-center gap-2 flex-col w-full text-sm">
                                    <div className="p-3">
                                        <CardTitle className="text-lg">Lugar de Trabajo</CardTitle>
                                        <div className="gap-2 items-center flex">
                                            <MapPin size='20px' />
                                            <p>Ciudad: {item.ciudad}</p>
                                        </div>
                                        <div className="gap-2 flex items-center">
                                            <MapPinned size='20px' />
                                            <p>Domicilio: {item.domicilioLaboral}</p>
                                        </div>
                                        <div className="gap-2 flex items-center">
                                            <University size='20px' />
                                            <p>Lugar de trabajo: {item.lugarTrabajo} | {item.turno}</p>
                                        </div>
                                    </div>
                                </Card>
                                <Card className="flex mt-6 md:mt-0 md:h-28 flex-col w-full text-sm">
                                    <div className="p-3 pt-1">
                                        <CardTitle className="text-lg">Datos del paciente</CardTitle>
                                        <div className="gap-2 flex">
                                            <BookOpen size='20px' />
                                            <p>Diagnostico: {item.diagnostico}</p>
                                        </div>
                                        <div className="grid grid-cols-2 md:mt-0">
                                            <div className="w-full">
                                                <div className="gap-2 flex">
                                                    <PanelTopOpen size='20px' />
                                                    <p>Obra social: {item.obraSocial}</p>
                                                </div>
                                                <div className="gap-2 flex">
                                                    <Paperclip size='20px' />
                                                    <p>Amparo?: {item.type}</p>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className="gap-2 flex">
                                                    <User size='20px' />
                                                    <p>Nombre: {item.name2}</p>
                                                </div>
                                                <div className="gap-2 flex">
                                                    <CalendarDays size='20px' />
                                                    <p>Edad: {item.age} años</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                                <Separator orientation="vertical" className="hidden" />
                            </CardContent>
                        </Card>
                        <div className="absolute z-[27] ml-[400px] md:mt-58 mt-[400px] h-[200px] blur-3xl antialiased bg-gradient-to-br from-sky-600 via-blue-600 to-neutral-500 w-[50%] m-auto rounded-lg"></div>
                    </React.Fragment>
                ))
            )}
        </div>
    );
}
