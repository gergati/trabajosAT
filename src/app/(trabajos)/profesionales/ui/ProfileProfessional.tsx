'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowDown, ArrowUpRight, Check, ChevronRight, Globe, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator";

export const ProfileProfessional = () => {
    const upgrade = false
    return (
        <div className="w-[97%] md:h-[180px] h-[380px] border border-[#c7d2fe] rounded-lg shadow-lg m-2">
            {
                upgrade
                    ? (
                        <div className=" relative text-center w-full h-full  bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
                            <Button className="absolute m-auto top-14">Upgrade</Button>
                        </div>
                    )
                    : (
                        <>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-2 h-full">
                                <div className="md:w-full col-span-2 bg-[#fbcfe8] rounded-lg m-1">
                                    <div className="text-black">
                                        <div className="m-2">
                                            <h3 className="font-bold">Dr. Jhon Doe</h3>
                                            <p className="text-sm text-gray-500/75 font-semibold">Matricula 1056789</p>
                                        </div>
                                        <p className="text-gray-700 text-sm m-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis consectetur saepe velit itaque porro quidem accusantium quae</p>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <div>
                                                    <Button variant={'ghost'} className="text-yellow-800 text-sm ml-2">Ver información</Button>
                                                </div>
                                            </DialogTrigger>
                                            <DialogContent className="max-w-[90%] md:max-w-[900px] grid md:grid-cols-2 grid-cols-1 md:mt-0 mt-10">
                                                <DialogHeader className="w-full bg-[#fbcfe8] rounded-lg p-3 items-start">
                                                    <DialogTitle>Dr. Jhon Doe</DialogTitle>
                                                    <DialogDescription>
                                                        Matricula 1056789
                                                    </DialogDescription>
                                                    <p className="items-start text-justify text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita officiis voluptatem fuga facilis voluptatum ullam, et totam pariatur eius molestias deleniti laudantium tempora, laboriosam veniam tempore quo repellat commodi!</p>
                                                </DialogHeader>
                                                <div className="grid w-full gap-2 h-[300px]">
                                                    <div className="w-full grid grid-cols-2 gap-2 h-full ">
                                                        <div className="border border-gray-600/25 rounded-lg shadow-lg h-[74px]">
                                                            <Button variant={'ghost'} className="text-yellow-800 text-sm flex gap-2 w-full h-auto">
                                                                <span>Descargar cv.</span>
                                                                <ArrowDown className="size-4" />
                                                            </Button>
                                                            <Separator />
                                                            <Button variant={'ghost'} className="text-yellow-800 text-sm  flex gap-2 w-full h-auto">
                                                                <span>Ver cv.</span>
                                                                <ArrowUpRight className="size-4" />
                                                            </Button>
                                                        </div>
                                                        <div className="border border-gray-600/25 rounded-lg shadow-lg h-[74px]">
                                                            <Button variant={'ghost'} className="text-yellow-800 text-sm flex gap-2 w-full h-auto">
                                                                <span>Descargar cv.</span>
                                                                <ArrowDown className="size-4" />
                                                            </Button>
                                                            <Separator />
                                                            <Button variant={'ghost'} className="text-yellow-800 text-sm  flex gap-2 w-full h-auto">
                                                                <span>Ver cv.</span>
                                                                <ArrowUpRight className="size-4" />
                                                            </Button>
                                                        </div>
                                                        {/* <div className="border border-black">
                                                            <CardTitle className="text-lg ml-2">Sitio web</CardTitle>
                                                            <div className="flex gap-2 items-center">
                                                                <div>
                                                                    <Check className="size-4" />
                                                                    <span className="text-sm">Universidad Nacional del Sur.</span>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                    <div className="w-full h-full rounded-xl bg-[#d8b4fe]">
                                                        <div className="m-1">
                                                            <CardTitle className="text-sm ml-2">Estudios Universitarios</CardTitle>
                                                            <div className="flex gap-2 items-center ml-2">
                                                                <Check className="size-4" />
                                                                <span className="text-sm">Universidad Nacional del Sur.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-full h-full rounded-xl bg-[#d8b4fe]">
                                                        <div className="m-1">
                                                            <CardTitle className="text-sm ml-2">Dirección</CardTitle>
                                                            <div className="flex gap-2">
                                                                <div className="flex gap-2 ml-2 items-center">
                                                                    <MapPin className="size-4" />
                                                                    <div className="flex items-center">
                                                                        <p className="text-sm">San Martin 325.</p>
                                                                        <div className="flex gap-1 items-center">
                                                                            <Link className="text-xs text-blue-600 ml-1" href={'#'}>Ver en mapa.</Link>
                                                                            <ArrowUpRight className="size-2 text-blue-600" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-full h-full rounded-xl bg-[#d8b4fe]">
                                                        <div className="m-1">
                                                            <CardTitle className="text-sm ml-2">Sitio web</CardTitle>
                                                            <div className="flex gap-1">
                                                                <div className="flex gap-2 items-center ml-2">
                                                                    <Globe className="size-4" />
                                                                    <span className="text-sm">www.trabajosat.com</span>
                                                                    <div className="flex gap-1 items-center">
                                                                        <Link className="text-xs text-blue-600 ml-1" href={'https://trabajosat.vercel.app'} target="_blank">Ir al sitio </Link>
                                                                        <ArrowUpRight className="size-2 text-blue-600" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </div>
                                <div className="grid w-[97%] m-1">
                                    <div className="bg-[#d8b4fe] rounded-lg">
                                        <div className="text-xs flex flex-col gap-2 m-5">
                                            <div className="flex gap-2 items-center">
                                                <p>Ver correo electronico.</p>
                                                <ChevronRight className="size-4" />
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <p>Ver sitio web.</p>
                                                <ChevronRight className="size-4" />
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <p>gergati1994@gmail.com</p>
                                                <ChevronRight className="size-4" />
                                            </div>
                                            <Separator className="bg-black/75 mt-2" />
                                            <div>
                                                <Button variant={'ghost'} className="text-yellow-800 text-sm ml-2 flex gap-2">
                                                    <span>Descargar cv.</span>
                                                    <ArrowDown className="size-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
            }

        </div>
    )
}
