import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { BriefcaseBusiness, CircleAlert, FilePen, Flame, Home, ListMinus, LogIn, LogOut, User, UserRoundPlus, Workflow } from "lucide-react"
import { Separator } from "../separator"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { Button } from "../button"
import { logout } from "@/actions"
import { usePathname } from "next/navigation"

export const OpenMenu = () => {
    const { data: session } = useSession()
    const isAuthenticated = !!session?.user
    const isAdmin = session?.user.role === 'admin'
    const pathname = usePathname()

    return (
        <Drawer>
            <DrawerTrigger>
                <ListMinus className="text-black" />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="flex gap-4 justify-between">
                    <div className="flex flex-col items-start">
                        <DrawerTitle className="text-xl">TrabajosAT</DrawerTitle>
                        <DrawerDescription>Empleos para acompañantes terapeuticos.</DrawerDescription>
                    </div>
                    {
                        isAuthenticated && (
                            <>
                                <Button variant='destructive' onClick={() => logout()} className="flex my-3 mr-5 gap-2 w-24">
                                    <LogOut className="size-5" />
                                    <span className="text-sm">Salir</span>
                                </Button>
                            </>
                        )
                    }
                </DrawerHeader>
                <Separator />
                <div className="">
                    <div className={`flex gap-2 m-5 hover:text-blue-800 ${pathname === '/' ? 'text-blue-700' : ''}`}>
                        <Home className="size-6" />
                        <Link href='/'>Nosotros</Link>
                    </div>
                    <div className={`flex gap-2 m-5 hover:text-blue-800 ${pathname === '/trabajos' ? 'text-blue-700' : ''}`}>
                        <BriefcaseBusiness />
                        <Link href='/trabajos'>Trabajos</Link>
                    </div>
                    {
                        isAuthenticated && (
                            <div className={`flex gap-2 m-5 hover:text-blue-800 ${pathname === '/profile' ? 'text-blue-700' : ''}`}>
                                <User />
                                <Link
                                    href='/profile'
                                >
                                    Ver Perfil
                                </Link>
                            </div>
                        )
                    }
                    {
                        isAdmin && (
                            <>
                                <div className={`flex gap-2 m-5 hover:text-blue-800 ${pathname === '/publicar' ? 'text-blue-700' : ''}`}>
                                    <Flame />
                                    <Link
                                        href='/publicar'
                                    >
                                        Publicar
                                    </Link>
                                </div>
                            </>
                        )
                    }
                    {
                        !isAuthenticated && (
                            <>
                                <Separator />
                                <div className={`flex gap-2 m-5 hover:text-blue-800 ${pathname === '/auth/login' ? 'text-blue-700' : ''}`}>
                                    <LogIn />
                                    <Link href='/auth/login'>Ingresar</Link>
                                </div>
                                <div className={`flex gap-2 m-5 hover:text-blue-800 ${pathname === '/auth/new-account' ? 'text-blue-700' : ''}`}>
                                    <UserRoundPlus />
                                    <Link href='/auth/new-account'>Crear cuenta</Link>
                                </div>
                            </>
                        )
                    }

                </div>
            </DrawerContent>
        </Drawer >
    )
}
