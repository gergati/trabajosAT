import { redirect } from "next/navigation";
import { auth } from "../../../../auth.config";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Check, Checked } from "@/lib";
import { CirclePlus, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";



export default async function ProfilePage() {
    const session = await auth()
    const isAdmin = session?.user.role === 'admin'
    const isVerified = session?.user.emailVerified === null

    if (!session?.user) {
        redirect('/')
    }
    const { email, name } = session.user


    return (
        <div className="mt-20 md:w-[65%] w-[95%] md:gap-4 min-h-screen m-auto grid grid-cols-1">
            <Card className="w-full">
                <div className="flex h-full flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                    <div className="flex  md:items-center md:flex-row flex-col w-full md:max-w-6xl gap-2">
                        <h1 className="text-3xl font-semibold">
                            Mi cuenta
                        </h1>
                        <div className="flex gap-2">
                            {
                                isAdmin ? (<Badge className="bg-[#0084f6] hover:bg-[#0d599b] text-black">Admin</Badge>) : (<Badge className="bg-[#0084f6] hover:bg-[#0d599b] text-black">Usuario</Badge>)
                            }
                            {
                                isVerified
                                    ? (<Badge variant={'destructive'} className="text-black">Verifica tu cuenta.</Badge>)
                                    : (
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Checked />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Perfil verificado</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    )
                            }
                        </div>
                    </div>

                    <div className="grid md:max-w-6xl items-start md:gap-6 gap-2">
                        <nav
                            className="grid md:gap-4 gap-2 text-sm text-muted-foreground"
                        >
                            {
                                isAdmin ? (
                                    <>
                                        <Link href="/profile" className="font-semibold text-primary">
                                            Mi perfil <Badge className="h-6 bg-transparent text-black border border-gray-500">Esta información es pública</Badge>
                                        </Link>
                                        <Link href="/profile/publicaciones" className="font-semibold ">Mis publicaciones</Link>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/profile" className="font-semibold text-primary">
                                            Mi perfil <Badge className="h-6 bg-transparent text-black border border-gray-500">Esta información es pública</Badge>
                                        </Link>
                                        <Link href="/profile/trabajos" className="font-semibold ">Mis trabajos</Link>
                                    </>
                                )
                            }
                        </nav>
                        <div className="grid md:gap-6 gap-2 m-auto">
                            <div className="flex md:flex-row flex-col gap-2">

                                <Card className="shadow-xl w-full">
                                    <CardHeader>
                                        <CardTitle className="md:text-lg text-sm">Nombre completo</CardTitle>
                                        <Separator />
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{name}</CardDescription>
                                    </CardContent>
                                </Card>
                                <Card className="shadow-xl w-full">
                                    <CardHeader>
                                        <CardTitle className="md:text-lg text-sm">Correo electronico</CardTitle>
                                        <Separator />
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{email}</CardDescription>
                                    </CardContent>
                                </Card>
                            </div>
                            <Card className="shadow-xl w-full">
                                <CardHeader>
                                    <div className="flex justify-between items-center">
                                        <CardTitle className="md:text-lg text-sm">Sobre mí</CardTitle>
                                        <div className="flex gap-2">
                                            <Button variant={'secondary'}>
                                                <Pencil size={16} />
                                            </Button>
                                        </div>
                                    </div>
                                    <Separator />
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus molestiae fuga consectetur est numquam, animi provident accusantium, laboriosam suscipit possimus ea quaerat tenetur, non libero aspernatur illo repellat asperiores officia.</CardDescription>
                                </CardContent>
                            </Card>
                            <Card className="shadow-xl w-full">
                                <CardHeader>
                                    <div className="flex justify-between items-center">
                                        <CardTitle className="md:text-lg text-sm">Estudios Universitarios</CardTitle>
                                        <div className="flex gap-2">
                                            <Button variant={'secondary'}>
                                                <Pencil size={16} />
                                            </Button>
                                            <Button variant={'secondary'}>
                                                <CirclePlus size={18} />
                                            </Button>
                                        </div>
                                    </div>
                                    <Separator />
                                    <div className="flex gap-2 items-center">
                                        <Check />
                                        <span>Universidad Nacional del Sur</span>
                                    </div>
                                </CardHeader>
                            </Card>
                            <Card className="shadow-xl w-full">
                                <CardHeader>
                                    <div className="flex justify-between items-center">
                                        <CardTitle className="md:text-lg text-sm">Cursos complementarios</CardTitle>
                                        <div className="flex gap-2">
                                            <Button variant={'secondary'}>
                                                <Pencil size={16} />
                                            </Button>
                                            <Button variant={'secondary'}>
                                                <CirclePlus size={18} />
                                            </Button>
                                        </div>
                                    </div>
                                    <Separator />
                                    <div className="flex gap-2 items-center">
                                        <Check />
                                        <span>Autismo</span>
                                    </div>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}