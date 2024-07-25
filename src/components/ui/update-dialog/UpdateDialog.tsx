import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card"
import { MapPin, MapPinned, University, BookOpen, PanelTopOpen, Paperclip, CalendarDays, User } from "lucide-react"
import { UserCard } from "../user-hover-card/UserCard"
import { auth } from "../../../../auth.config"
import { getPaginationWorks } from "@/actions"
import { redirect } from "next/navigation"
import { Separator } from "../separator"

export const UpdateDialog = async () => {
    // const session = await auth()
    // const works = await getPaginationWorks()

    // if (!session?.user) {
    //     redirect('/')
    // }
    // const { email, id, name, role, emailVerified, image } = session.user

    // const obtenerWorksById = () => {
    //     const filterWorks = works!.filter(work => work.user.id === id)
    //     console.log({ filterWorks })
    //     return filterWorks
    // }

    // const trabajos = obtenerWorksById()
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary">Editar</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[425px] md:max-w-[800px]">
                <DialogHeader>
                    <DialogTitle>Editar publicación</DialogTitle>
                    {/* <DialogDescription>
                        Cambie los campos que sean necesarios.
                    </DialogDescription> */}
                </DialogHeader>
                <Card className="md:h-[280px] h-[450px] shadow-lg">
                    <CardHeader className="flex h-[90px] mb-12 md:mb-0">
                        <div className="flex md:flex-row flex-col md:justify-between items-start gap-2">
                            <div className="flex flex-col">
                                <CardTitle className="text-lg">acompañante terapeutico p/ nene de 6 años</CardTitle>
                                <UserCard
                                    name='German Gatica'
                                    email='german@google.com'
                                />
                                {/* <CardDescription className="text-xs">{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ''}</CardDescription> */}

                            </div>
                        </div>
                    </CardHeader>
                    <Separator className="w-[95%] m-auto mt-20 md:mt-2 " />
                    <CardContent className="flex flex-col mt-4 md:flex-row h-full md:gap-2">
                        <Card className="flex md:h-36 justify-center gap-2 flex-col w-full text-sm">
                            <div className="p-3 m-2">
                                <CardTitle className="text-lg">Lugar de Trabajo</CardTitle>
                                <div className="gap-2 items-center flex">
                                    {/* <Label htmlFor="city" className="">
                                        Name
                                    </Label> */}
                                    <MapPin size='20px' />
                                    <Input id="city" defaultValue="Bahia Blanca" className="col-span-3" />
                                    {/* <p>Bahia Blanca</p> */}
                                </div>
                                <div className="gap-2 flex items-center">
                                    <MapPinned size='20px' />
                                    <Input id="city" value="Fortineros 454" className="col-span-3" />
                                    {/* <p>Fortineros 454</p> */}
                                </div>
                                <div className="gap-2 flex items-center">
                                    <University size='20px' />
                                    <Input id="city" value="Instituicion" className="col-span-3" />

                                    {/* <p>Institucion</p> */}
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
                                            <p>Autismo</p>
                                        </div>
                                        <div className="gap-2 flex">
                                            <PanelTopOpen size='20px' />
                                            <p>IOMA</p>
                                        </div>
                                        <div className="gap-2 flex">
                                            <Paperclip size='20px' />
                                            <p>Con amparo</p>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="gap-2 flex">
                                            <User size='20px' />
                                            <p>Catalina Gatica</p>
                                        </div>
                                        <div className="gap-2 flex">
                                            <CalendarDays size='20px' />
                                            <p>9 años</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Card>
                        <Separator orientation="vertical" className="hidden" />
                    </CardContent>
                </Card>
                <DialogFooter>
                    <Button type="submit">Guardar cambios</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
