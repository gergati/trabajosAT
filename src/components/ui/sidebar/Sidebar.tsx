'use client'

import Link from "next/link"
import { BriefcaseBusiness, Ear, Hand, HandCoins, Landmark } from "lucide-react"
import { SidebarItem } from "./SidebarItem"


const menuItem = [
    {
        icon: <BriefcaseBusiness className="ml-2 size-5" />,
        title: 'Abogados',
        path: '/profesionales',
    },
    {
        icon: <Landmark className="ml-2 size-5" />,
        title: 'Contadores',
        path: '/profesionales/contadores',
    },
    {
        icon: <HandCoins className="ml-2 size-5" />,
        title: 'Psicopedagogos',
        path: '/profesionales/psicopedagogos',
    },
    {
        icon: <Ear className="ml-2 size-5" />,
        title: 'Psicologos',
        path: '/profesionales/psicologos',
    },
    {
        icon: <Hand className="ml-2 size-5" />,
        title: 'Acomp. Terap.',
        path: '/profesionales/acompaniantes-terapeuticos',
    },
]

export const Sidebar = () => {
    return (

        <div className="w-full  border border-[#eee9fe] bg-[#F7F5FF] rounded-lg">
            <div className="m-auto grid">
                <div className="mb-5">
                    <h3 className="text-2xl m-5">Profesionales</h3>
                </div>
                <div className="">
                    <ul>
                        {
                            menuItem.map(item => (
                                <SidebarItem key={item.path} {...item} />
                            ))
                        }
                    </ul>
                    {/*
                        <Link
                            href={'#'} className="w-full flex gap-2 hover:bg-gray-200 h-10 m-auto items-center text-center justify-start">
                            <Hand className="ml-2 size-5" />
                            <span>Acompañ. Terap.</span>
                        </Link> */}
                </div>
            </div>
            {/* <div className="md:w-[700px] w-full m-auto md:h-screen min-h-screen border rounded-lg border-[#eee9fe] bg-[#F7F5FF]">
                <ProfileProfessional />
                <ProfileProfessional />
                <ProfileProfessional />
            </div > */}
        </div>
    )
}
