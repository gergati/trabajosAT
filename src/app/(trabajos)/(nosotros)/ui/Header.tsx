'use client'
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { BumeranGradientHeader, UsersGradientHeader } from "@/lib";
import { ChevronRight } from "lucide-react";

export const Header = () => {

    return (
        <div className="text-center items-center">
            <CardHeader>
                <CardTitle className="text-[52px] md:mt-32 pt-32 md:pt-0 text-[#003791] md:text-[83px] md:leading-[87px] m-auto md:w-[60%] md:text-center leading-10 font-bold">
                    Prestadores de servicios de salud.
                </CardTitle>
            </CardHeader>
            <div className="md:w-[90%] w-full m-auto text-lg md:leading-4 -leading-3 text-center md:flex md:justify-center md:items-center grid grid-cols-1 mb-12">
                <div className="flex flex-row justify-center items-center text-center">
                    <span className="md:text-[22px] text-[12px] font-semibold text-gray-700/75">Vinculamos</span>
                    <div className=" text-black gap-2 flex items-center md:mx-4 mx-2 md:h-10 h-8 text-gray-900/75 font-semibold border border-gray-200 rounded-lg p-1">
                        <BumeranGradientHeader />
                        <span className="md:text-[22px] text-[12px]">acompañantes terapeuticos</span>
                    </div>
                </div>
                <div className="flex md:inline-flex justify-center mt-2 md:mt-0  items-center  text-center">
                    <span className="md:text-[22px] text-[12px] font-semibold text-gray-700/75">con</span>
                    <div className="md:mx-4 mx-2 md:w-32 w-24 md:h-10 h-8 items-center text-gray-900/75 font-semibold gap-2 flex border border-gray-200 rounded-lg p-1">
                        <UsersGradientHeader />
                        <span className="md:text-[22px] text-[12px]"> usuarios</span>
                    </div>
                </div>
            </div>
            <div className="h-10 md:mt-0 mt-5 flex flex-col md:flex-row gap-2 justify-center">
                <Link href={'/trabajos'}>
                    <Button className="w-[200px] bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-blue-500 via-blue-600 to-blue-700 hover:scale-105 hover:transition-all">
                        Ver trabajos
                    </Button>
                </Link>
                <Link href={'/auth/new-account'}>
                    <Button variant={'ghost'} className="border hover:text-[#003791] hover:bg-transparent hover:border-[#003791] hover:scale-105 hover:transition-all">
                        <span>Crear cuenta</span>
                        <ChevronRight className="size-5" />
                    </Button>
                </Link>
            </div>
        </div>
    )
}
