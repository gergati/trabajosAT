'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowUpRight, BriefcaseBusiness, Check, ChevronRight, Ear, Globe, Hand, HandCoins, Landmark, MapPin } from "lucide-react"


export const Sidebar = () => {

    return (
        <div className="grid md:grid-cols-4 grid-cols-1 w-full">
            <div className="w-full h-full col-span-1 border border-[#eee9fe] bg-[#F7F5FF]">
                <div className="w-[90%] m-auto grid">
                    <div className="mb-5">
                        <h3 className="text-2xl m-5">Profesionales</h3>
                    </div>
                    <div className="grid gap-2">
                        <Link

                            href={'#'} className="w-full flex gap-2 hover:bg-gray-200 h-10 m-auto items-center text-start justify-start rounded-sm">
                            <BriefcaseBusiness className="ml-2 size-5" />
                            <span>Abogados</span>

                        </Link>
                        <Link

                            href={'#'} className="w-full flex gap-2 hover:bg-gray-200 h-10 m-auto items-center text-center justify-start">
                            <Landmark className="ml-2 size-5" />
                            <span>Contadores</span>

                        </Link>
                        <Link

                            href={'#'} className="w-full flex gap-2 hover:bg-gray-200 h-10 m-auto items-center text-center justify-start">
                            <HandCoins className="ml-2 size-5" />
                            <span>Psicopedagogos</span>

                        </Link>
                        <Link

                            href={'#'} className="w-full flex gap-2 hover:bg-gray-200 h-10 m-auto items-center text-center justify-start">
                            <Ear className="ml-2 size-5" />
                            <span>Psicologos</span>

                        </Link>
                        <Link

                            href={'#'} className="w-full flex gap-2 hover:bg-gray-200 h-10 m-auto items-center text-center justify-start">
                            <Hand className="ml-2 size-5" />
                            <span>Acompañ. Terap.</span>

                        </Link>
                    </div>

                </div>
            </div>
            <div className="w-full col-span-3 h-full grid border-[#eee9fe] bg-[#f2f1f3]">

                <div className="w-[98%] h-[180px] border border-gray-100 rounded-lg shadow-sm">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
                        <div className="w-full h-[150px] col-span-2 bg-[#fbcfe8] rounded-lg m-1">
                            <div className="text-black">
                                <div className="m-2">
                                    <h3 className="font-bold">Dr. Jhon Doe</h3>
                                    <p className="text-sm">Matricula 1056789</p>
                                </div>
                                <p className="text-gray-900 text-sm m-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis consectetur saepe velit itaque porro quidem accusantium quae
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <div>
                                                <Button variant={'ghost'} className="text-yellow-800 text-sm">Ver informacion.</Button>
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-[525px] md:max-w-[900px] grid md:grid-cols-2 grid-cols-1 md:mt-0 mt-20">
                                            <DialogHeader className="w-full bg-[#fbcfe8] rounded-lg p-2">
                                                <DialogTitle>Dr. Jhon Doe</DialogTitle>
                                                <DialogDescription>
                                                    Matricula 1056789
                                                </DialogDescription>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita officiis voluptatem fuga facilis voluptatum ullam, et totam pariatur eius molestias deleniti laudantium tempora, laboriosam veniam tempore quo repellat commodi!</p>
                                            </DialogHeader>
                                            <div className="grid w-full gap-2 h-[300px]">
                                                <div className="w-full  grid grid-cols-2 gap-2 h-full ">
                                                    <div className="border border-black">
                                                        <CardTitle className="text-lg ml-2">Sitio web</CardTitle>
                                                        <div className="flex gap-2">
                                                            <Check className="size-5" />
                                                            <span className="text-sm">Universidad Nacional del Sur.</span>
                                                        </div>
                                                    </div>
                                                    <div className="border border-black">
                                                        <CardTitle className="text-lg ml-2">Sitio web</CardTitle>
                                                        <div className="flex gap-2">
                                                            <div>
                                                                <Check className="size-4" />
                                                                <span className="text-sm">Universidad Nacional del Sur.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full h-full rounded-xl bg-[#d8b4fe]">
                                                    <div className="m-1">
                                                        <CardTitle className="text-sm ml-2">Estudios Universitarios</CardTitle>
                                                        <div className="flex gap-2 items-center">
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
                                            {/* <DialogFooter>
                                                <Button type="submit">Save changes</Button>
                                            </DialogFooter> */}
                                        </DialogContent>
                                    </Dialog>
                                </p>
                            </div>
                        </div>

                        <div className="grid">
                            <div className="bg-[#d8b4fe] h-fullgrid rounded-lg m-1">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
