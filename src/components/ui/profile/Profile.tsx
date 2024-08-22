'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSession } from "next-auth/react"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "../menubar"
import { LogOut, Settings, Trash2, User, User2, UserCog } from "lucide-react"
import { logout } from "@/actions"
import Link from "next/link"
import { obtenerNombre } from "@/utils"
import { redirect, usePathname } from "next/navigation"
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../alert-dialog"
import { Button } from "../button"
import { Publicaciones, UserGradient } from "@/lib"


export const Profile = () => {

    const { data: session } = useSession()
    const isAdmin = session?.user.role === 'admin'
    const pathname = usePathname()
    if (!session?.user) {
        redirect('/')
    }
    const { name } = session?.user


    return (
        <Menubar className="border-none p-0 m-0">
            <MenubarMenu>
                <MenubarTrigger className="rounded-full p-0 m-0">
                    <Avatar className="cursor-pointer">
                        <AvatarImage src={session?.user.image} />
                        <AvatarFallback className="bg-gradient-to-r from-sky-400 to-blue-500 dark:from-sky-500 dark:to-blue-600 dark:text-white dark:hover:from-sky-600 dark:hover:to-blue-700">{obtenerNombre(name)}</AvatarFallback>
                    </Avatar>
                </MenubarTrigger>
                <MenubarContent className="mt-1">
                    <Link href='/profile' className={`${pathname === '/profile' ? 'text-blue-400' : 'dark:text-white'}`}>
                        <MenubarItem inset className="flex gap-2">
                            {/* <UserGradient /> */}
                            <User2 size={18}/>
                            <span>Mi cuenta</span>
                        </MenubarItem>
                    </Link>
                    <MenubarSeparator />
                    {
                        isAdmin ? (
                            <Link href='/profile/publicaciones' className={`${pathname === '/profile/publicaciones' ? 'text-blue-400' : 'dark:text-white'}`}>
                                <MenubarItem inset className="flex gap-2">
                                    {/* <Publicaciones /> */}
                                    <Settings size={18}/>
                                    <span>Publicaciones</span>
                                </MenubarItem>
                            </Link>
                        ) :
                            (
                                <Link href='/profile/trabajos' className={` ${pathname === '/profile/trabajos' ? 'text-blue-400' : 'dark:text-white'}`}>
                                    <MenubarItem inset className="flex gap-2">
                                        {/* <Publicaciones /> */}
                                        <Settings size={18}/>
                                        <span> Trabajos</span>
                                    </MenubarItem>
                                </Link>
                            )
                    }
                    <MenubarSeparator />
                    <MenubarItem inset onClick={() => logout()} className="text-white h-8 bg-red-700 focus:bg-red-400 w-full">
                        <LogOut className="size-4 mr-4" />
                        Salir
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}
