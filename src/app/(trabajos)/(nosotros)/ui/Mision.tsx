'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Interface, UserChat, Users } from "@/lib";
import { Check, HeartHandshake, ShieldAlert, Speech } from "lucide-react";
import { Inter } from "next/font/google"
import Image from "next/image";
import { useState } from "react";



export const Mision = () => {
    const [scrollMision, setScrollMision] = useState(false)

    const handleScrollMision = () => {
        if (window.scrollY > 200) {
            setScrollMision(true)
        }
    }

    return (
        <div className="absolute z-[39]">
            <div className="absolute w-[438px] m-auto md:left-[140px] md:-top-[200px]">
                <Card className="md:w-[950px] md:h-[500px] items-center m-auto">
                    <div className="w-full p-1 grid md:grid-cols-2 grid-cols-1 md:p-5">
                        <Image
                            src="/unsplash.jpg"
                            alt="Icon logo trabajosAT"
                            width={400}
                            height={400}
                            className="w-full md:h-[400px] h-[300px] object-cover rounded-lg shadow-sm"
                        />
                        <Badge className="h-8 ml-5 absolute rounded-md mt-4 bg-white hover:bg-white text-black shadow-md flex gap-2 w-48">
                            <Interface />
                            <span className="text-sm">Cual es el objetivo?</span>
                        </Badge>

                        <CardContent className="mt-5 w-full grid md:grid-cols-2 md:grid-rows-4 grid-cols-1 gap-2">

                            <Card className="flex gap-2 md:h-16 h-20 items-center md:col-span-2 col-span-1 shadow-md">
                                <Button variant={'ghost'} className="h-full">
                                    <HeartHandshake className="text-black" />
                                </Button>
                                <p>Favorecer el desarrollo biopsicosocial y/o autovalimiento de la persona asistida.</p>
                            </Card>

                            <Card className="flex gap-2 md:h-16 h-20 md:text-center items-center md:col-span-2 row-start-2 col-span-1 shadow-md">
                                <Button variant={'ghost'} className="h-full">
                                    <Users />
                                </Button>
                                <p>Fortalecer los vínculos familiares y sociales.</p>
                            </Card>

                            <Card className="flex gap-2 md:h-20 h-28 md:col-span-2 row-start-3 shadow-md">
                                <Button variant={'ghost'} className="h-full">
                                    <Speech className="text-black" />
                                </Button>
                                <p className="text-start m-auto">Intervenir para facilitar a la persona asistida su integración en el proceso de vida independiente.</p>
                            </Card>

                            <Card className="flex gap-2 md:h-24 h-32 md:-ml-20 col-span-2 row-start-4 shadow-md">
                                <Button variant={'ghost'} className="h-full">
                                    <UserChat />
                                </Button>
                                <p className="text-start m-auto">Estimular la indagación y desarrollo de nuevos modelos de intervención como alternativa a los largos procesos de institucionalización.</p>
                            </Card>

                        </CardContent>
                    </div>

                </Card>
            </div>
        </div>
    )
}
