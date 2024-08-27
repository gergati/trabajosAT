'use client'

import Link from "next/link"
import { BriefcaseBusiness, Ear, Hand, HandCoins, Landmark } from "lucide-react"
import { ProfileProfessional } from "./ProfileProfessional";


export const Sidebar = () => {

    return (
        <div className="grid md:grid-cols-4 grid-cols-1 w-full">
            <div className="w-full col-span-1 border border-[#eee9fe] bg-[#F7F5FF] rounded-lg">
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
            <div className="md:w-[700px] w-full m-auto md:h-screen min-h-screen border rounded-lg border-[#eee9fe] bg-[#F7F5FF]">
                <ProfileProfessional />
                <ProfileProfessional />
                <ProfileProfessional />
            </div >
        </div >
    )
}
