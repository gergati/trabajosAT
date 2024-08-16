import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { ListMinus, LogOut } from "lucide-react"
import { Separator } from "../separator"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { Button } from "../button"
import { logout } from "@/actions"
import { usePathname } from "next/navigation"
import { CrearCuenta, House, Ingresar, Professional, Publicar, Throphy, UserGradient, Works } from "@/lib"
import { Badge } from "../badge"

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
            <DrawerContent className="w-[calc(100%-5%)] m-auto">
                <DrawerHeader className="grid grid-cols-3">
                    <div className="flex flex-col col-span-2 items-start start-2">
                        <DrawerTitle className="text-xl">TrabajosAT</DrawerTitle>
                        <Badge variant={'outline'} className="w-[90%] flex gap-2 h-7">
                            <Throphy />
                            <span>Hecho por y para At´s</span>
                        </Badge>
                    </div>
                    {
                        isAuthenticated && (
                            <div className="w-[40%]">
                                <Button variant='destructive' onClick={() => logout()} className="flex my-3 mr-5 gap-2 w-24">
                                    <LogOut className="size-5" />
                                    <span className="text-sm">Salir</span>
                                </Button>
                            </div>
                        )
                    }
                </DrawerHeader>
                <Separator />
                <div className="">
                    <div className={`flex gap-2 m-5 hover:text-blue-800 ${pathname === '/' ? 'text-blue-700' : ''}`}>
                        <House />
                        <Link href='/'>Nosotros</Link>
                    </div>
                    <div className={`flex gap-2 m-5 hover:text-blue-800 ${pathname === '/trabajos' ? 'text-blue-700' : ''}`}>
                        <Works />
                        <Link href='/trabajos'>Trabajos</Link>
                    </div>
                    <div className={`flex gap-2 m-5 hover:text-blue-800 ${pathname === '/trabajos' ? 'text-blue-700' : ''}`}>
                        <Professional />
                        <Link href='/profesionales'>Profesionales <Badge>Nuevo!</Badge></Link>
                    </div>
                    {
                        isAuthenticated && (
                            <div className={`flex gap-2 m-5 hover:text-blue-800 ${pathname === '/profile' ? 'text-blue-700' : ''}`}>
                                <UserGradient />
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
                                    <Publicar />
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
                                    <Ingresar />
                                    <Link href='/auth/login'>Ingresar</Link>
                                </div>
                                <div className={`flex gap-2 m-5 hover:text-blue-800 ${pathname === '/auth/new-account' ? 'text-blue-700' : ''}`}>
                                    <CrearCuenta />
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
