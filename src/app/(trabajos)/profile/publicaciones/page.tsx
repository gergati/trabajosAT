import { deletedWorks, getPaginationWorks } from "@/actions"
import { auth } from "../../../../../auth.config"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserCard } from "@/components/ui/user-hover-card/UserCard"
import { MapPin, MapPinned, University, BookOpen, PanelTopOpen, Paperclip, CalendarDays, User, Pencil, Trash2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { ButtonDeletedWork } from "@/components"

export default async function PublicacionesPage() {
    const session = await auth()
    const works = await getPaginationWorks() || [];

    if (!session?.user) {
        redirect('/')
    }
    const { id } = session!.user


    const obtenerWorksById = () => {
        if (!id) {
            console.log('UserId no esta definido');
            return []
        }
        const filterWorks = works.filter((work: { userId: string }) => work.userId === id);
        return filterWorks;
    }

    const trabajos = obtenerWorksById();


    return (
        <div className="mt-20 md:w-[65%] w-[90%] gap-4 min-h-screen m-auto grid md:grid-cols-1">
            <Card>
                <main className="flex h-full flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                    <div className="mx-auto grid w-full max-w-6xl gap-2">
                        <h1 className="text-3xl font-semibold">Mis publicaciones</h1>
                    </div>
                    <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr]">
                        <nav
                            className="grid gap-4 text-sm text-muted-foreground"
                        >
                            <Link href="/profile" >
                                Mi perfil
                            </Link>
                            <Link href="/profile/publicaciones" className="font-semibold text-primary">Mis publicaciones</Link>
                        </nav>
                        <div className="grid gap-6">
                            {trabajos.length === 0 ? (
                                <Card className="h-20">
                                    <div className="flex items-center md:mt-6 justify-center m-auto text-gray-500 text-sm">No publicaste ningún trabajo.</div>
                                </Card>
                            ) : (
                                trabajos.map((item, index) => (
                                    <Card key={index} className="md:h-[250px] h-[450px] shadow-lg">
                                        <CardHeader className="flex h-[90px] mb-12 md:mb-0">
                                            <div className="flex md:flex-row flex-col md:justify-between items-start gap-2">
                                                <div className="flex flex-col">
                                                    <CardTitle className="text-lg">A.T p/ nene de 6 años</CardTitle>
                                                    <UserCard
                                                        name={item.name}
                                                        email={item.email}
                                                    />
                                                    <CardDescription className="text-xs">{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ''}</CardDescription>

                                                </div>

                                                <div className="grid grid-cols-2">

                                                    <Link href='/publicar/editar' {...item}>
                                                        <Button variant='secondary'>
                                                            <Pencil className="size-4 mr-2" />
                                                            Editar
                                                        </Button>
                                                    </Link>
                                                    <ButtonDeletedWork id={item.id} />
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <Separator className="w-[95%] m-auto mt-20 md:mt-2 " />
                                        <CardContent className="flex flex-col mt-4 md:flex-row h-full md:gap-2">
                                            <Card className="flex md:h-28 justify-center gap-2 flex-col w-full text-sm">
                                                <div className="p-3">
                                                    <CardTitle className="text-lg">Lugar de Trabajo</CardTitle>
                                                    <div className="gap-2 items-center flex">
                                                        <MapPin size='20px' />
                                                        <p>{item.ciudad}</p>
                                                    </div>
                                                    <div className="gap-2 flex items-center">
                                                        <MapPinned size='20px' />
                                                        <p>{item.domicilioLaboral}</p>
                                                    </div>
                                                    <div className="gap-2 flex items-center">
                                                        <University size='20px' />
                                                        <p>{item.lugarTrabajo}</p>
                                                    </div>
                                                </div>
                                            </Card>
                                            <Card className="flex mt-6 md:mt-0 md:h-28 flex-col w-full text-sm">
                                                <div className="p-3 pt-1">
                                                    <CardTitle className="text-lg">Datos del paciente</CardTitle>
                                                    <div className="grid grid-cols-2 md:mt-0">
                                                        <div className="w-full">
                                                            <div className="gap-2 flex">
                                                                <BookOpen size='20px' />
                                                                <p>{item.diagnostico}</p>
                                                            </div>
                                                            <div className="gap-2 flex">
                                                                <PanelTopOpen size='20px' />
                                                                <p>{item.obraSocial}</p>
                                                            </div>
                                                            <div className="gap-2 flex">
                                                                <Paperclip size='20px' />
                                                                <p>{item.type}</p>
                                                            </div>
                                                        </div>
                                                        <div className="w-full">
                                                            <div className="gap-2 flex">
                                                                <User size='20px' />
                                                                <p>{item.name2}</p>
                                                            </div>
                                                            <div className="gap-2 flex">
                                                                <CalendarDays size='20px' />
                                                                <p>{item.age} años</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </Card>
                                            <Separator orientation="vertical" className="hidden" />
                                        </CardContent>
                                    </Card>
                                ))
                            )
                            }
                        </div>
                    </div>
                </main>
            </Card>
        </div >
    );
}