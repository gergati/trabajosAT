import React from "react";
import Link from "next/link";
import { auth } from "../../../../auth.config";
import { getPaginationWorks, worksSavedList } from "@/actions";
import { ButtonStore } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { UserCard } from "@/components/ui/user-hover-card/UserCard";
import { BookOpen, CalendarDays, Check, MapPin, MapPinned, PanelTopOpen, Paperclip, University, User } from "lucide-react";
import { Building, HouseNew, UserTwo } from "@/lib";

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
        <div className="relative z-[30] mt-20 min-h-screen grid grid-cols-1 w-[90%] md:w-[70%] m-auto bg-[#EDF7F5] gap-3">

            {worksTemp.length === 0 ? (
                <div className="text-center text-xl font-semibold">
                    No hay trabajos disponibles... Vuelve más tarde.
                </div>
            ) : (
                worksTemp.map((item: any, index: number) => (
                    <React.Fragment key={index}>
                        <div className="absolute z-[29] md:mt-28 mt-36 h-[200px] blur-3xl antialiased bg-gradient-to-br from-sky-600 via-blue-600 to-neutral-500 w-[50%] m-auto rounded-lg"></div>
                        <Card className="md:h-[250px] md:mb-0 mb-20 h-[500px] shadow-lg z-[32] hover:scale-105 transform transition duration-300">
                            <CardHeader className="flex h-[90px] mb-8 md:mb-0">
                                <div className="flex md:flex-row flex-col md:justify-between items-start gap-2">
                                    <div className="flex flex-col">
                                        <CardTitle className="text-lg">A.T p/ persona con {item.diagnostico}</CardTitle>
                                        <UserCard name={item.user.name} email={item.user.email} />
                                        <CardDescription className="text-xs">{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ''} </CardDescription>
                                    </div>
                                    {
                                        data
                                            ? (<ButtonStore email={item.email} phone={item.phone} workId={item.id} />)
                                            : (<Link href='/auth/login'>
                                                <Button className="text-gray-100 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-blue-500 via-blue-600 to-blue-700 h-10 hover:scale-105 transform transition duration-300">Iniciar sesión</Button>
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
                                            <HouseNew />
                                            <div className="flex gap-2 items-center">
                                                <p className="font-bold text-xs md:text-sm">Ciudad:</p>
                                                <span className="text-gray-600 font-semibold text-xs md:text-sm"> {item.ciudad}</span>
                                            </div>
                                        </div>
                                        <div className="gap-2 flex items-center">
                                            <MapPinned size='20px' />
                                            <div className="flex gap-2 items-center">
                                                <p className="font-bold ml-1 text-xs md:text-sm">Domicilio: </p>
                                                <span className="text-gray-600 font-semibold text-xs md:text-sm"> {item.domicilioLaboral}</span>
                                            </div>
                                        </div>
                                        <div className="gap-2 flex items-center">
                                            <Building />
                                            <div className="flex md:gap-2 gap-0 items-center">
                                                <p className="font-bold text-xs md:text-sm">Lugar de trabajo: </p>
                                                <span className="text-gray-600 font-semibold text-xs md:text-sm md:ml-0 ml-1"> {item.lugarTrabajo} | {item.turno}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                                <Card className="flex mt-6 md:mt-0 md:h-28 flex-col w-full text-sm">
                                    <div className="p-2">
                                        <CardTitle className="text-lg">Datos de la persona</CardTitle>


                                        <div className="grid md:grid-cols-2 grid-cols-1 md:mt-0 gap-1">
                                            <div className="w-full">
                                                <div className="gap-2 flex">
                                                    <User size='20px' />
                                                    <div className="flex gap-2 items-center">
                                                        <p className="font-bold text-xs md:text-sm">Nombre: </p>
                                                        <span className="text-gray-600 font-semibold text-xs md:text-sm">{item.name2}</span>
                                                    </div>
                                                </div>
                                                <div className="gap-2 flex">
                                                    <CalendarDays size='20px' />
                                                    <div className="flex gap-2 items-center">
                                                        <p className="font-bold text-xs md:text-sm">Edad: </p>
                                                        <span className="text-gray-600 font-semibold text-xs md:text-sm">{item.age} años</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className="gap-2 flex">
                                                    <PanelTopOpen size='20px' />
                                                    <div className="flex gap-2 items-center">
                                                        <p className="font-bold text-xs md:text-sm">Obra social: </p>
                                                        <span className="text-gray-600 font-semibold text-xs md:text-sm">{item.obraSocial}</span>
                                                    </div>
                                                </div>
                                                <div className="gap-2 flex">
                                                    <Check size='20px' />
                                                    <div className="flex gap-2 items-center">
                                                        <p className="font-bold text-xs md:text-sm">Amparo?: </p>
                                                        <span className="text-gray-600 font-semibold text-xs md:text-sm">{item.type}</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="gap-2 flex">
                                            <BookOpen size='20px' />
                                            <div className="flex gap-2 items-center">
                                                <p className="font-bold text-xs md:text-sm">Diagnostico: </p>
                                                <span className="text-gray-600 font-semibold text-xs md:text-sm">{item.diagnostico}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="gap-2 flex">
                                        <BookOpen size='20px' />
                                        <div className="flex gap-2">
                                            <p className="font-bold">Diagnostico: </p>
                                            <span className="text-gray-600 font-semibold">{item.diagnostico}</span>
                                        </div>
                                    </div> */}
                                </Card>
                                <Separator orientation="vertical" className="hidden" />
                            </CardContent>
                        </Card>
                    </React.Fragment>
                ))
            )}
        </div>
    );
}
