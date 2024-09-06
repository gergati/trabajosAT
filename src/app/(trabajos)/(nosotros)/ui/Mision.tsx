'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"
import { Interface, UserChat, Users } from "@/lib";
import { HeartHandshake, Speech } from "lucide-react";
import Image from "next/image";
import { useState } from "react";



export const Mision = () => {
   

    return (
        <div className="absolute z-[39]">
            <div className="absolute w-[346px] m-auto md:left-[140px] md:-top-[200px]">
                <Card className="md:w-[950px] md:h-[500px] h-[900px] items-center m-auto rounded-lg">
                    <div className="w-full p-1 grid md:grid-cols-2 grid-cols-1 md:p-5">
                        <Image
                            src="/unsplash.jpg"
                            alt="Photo about A.T"
                            width={400}
                            height={400}
                            className="w-full md:h-[400px] h-[300px] object-cover rounded-lg shadow-sm"
                        />
                        <Badge className="h-8 ml-5 absolute rounded-md mt-4 bg-white hover:bg-white text-black shadow-md flex gap-2 w-56">
                            <Interface />
                            <span className="text-sm">Cual es el objetivo de A.T?</span>
                        </Badge>

                        <div className="mt-5 w-full grid md:grid-cols-2 md:grid-rows-4 grid-cols-1 gap-2 md:p-5">

                            <Card className="flex gap-2 md:h-16 h-24 items-center md:col-span-2 col-span-1 shadow-md">
                                <div className="h-full w-10 md:mt-8 mt-14 ml-2">
                                    <HeartHandshake className="text-black" />
                                </div>
                                <p>Favorecer el desarrollo biopsicosocial y/o autovalimiento de la persona asistida.</p>
                            </Card>

                            <Card className="flex gap-2 md:h-16 h-24 md:text-center items-center md:col-span-2 row-start-2 col-span-1 shadow-md">
                                <div  className="h-full w-10 md:mt-8 mt-14 ml-2">
                                    <Users />
                                </div>
                                <p>Fortalecer los vínculos familiares y sociales.</p>
                            </Card>

                            <Card className="flex gap-2 md:h-20 h-32 md:col-span-2 row-start-3 shadow-md">
                                <div className="h-full w-10 md:mt-7 mt-12 ml-2">
                                    <Speech className="text-black" />
                                </div>
                                <p className="text-start m-auto">Intervenir para facilitar a la persona asistida su integración en el proceso de vida independiente.</p>
                            </Card>

                            <Card className="flex gap-2 md:h-24 h-36 md:-ml-20 col-span-2 row-start-4 shadow-md">
                                <div className="h-full w-10 md:mt-8 mt-14 ml-2">
                                    <UserChat />
                                </div>
                                <p className="text-start m-auto">Estimular la indagación y desarrollo de nuevos modelos de intervención como alternativa a los largos procesos de institucionalización.</p>
                            </Card>
                        </div>
                    </div>
                    <p className="text-xs md:text-sm text-red-600 ml-3 md:ml-0 mt-3 md:mt-3">* En el acompañamiento terapéutico no existen las generalidades ni objetivos que se puedan aplicar a todo el mundo.</p>
                </Card>
            </div>
        </div>
    )
}
