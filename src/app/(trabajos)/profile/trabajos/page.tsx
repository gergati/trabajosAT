import { savedWork, worksByProfile, worksSavedList } from "@/actions";
import { auth } from "../../../../../auth.config";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { BookmarkPlus, BookOpen, CalendarDays, Heart, Mail, MapPin, MapPinned, PanelTopOpen, Paperclip, Send, University, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ButtonDeleteSaved, ButtonStore } from "@/components";


export default async function TrabajosPage() {
    const session = await auth();
    if (!session) {
        redirect('/auth/login')
    }
    const { id: sessionId } = session!.user;
    // console.log({ id })
    const totalWorks = await worksByProfile(sessionId)

    // console.log({ list })

    return (
        <div className="mt-20 md:w-[65%] w-[90%] gap-4 min-h-screen m-auto grid md:grid-cols-1">
            <Card>
                <main className="flex h-full flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                    <div className="mx-auto grid w-full max-w-6xl gap-2">
                        <h1 className="text-3xl font-semibold">Mis trabajos</h1>
                    </div>
                    <div className="mx-auto grid w-full max-w-6xl items-start gap-6">
                        <nav className="grid gap-4 text-sm text-muted-foreground">
                            <Link href="/profile">Mi perfil</Link>
                            <Link href="/profile/trabajos" className="font-semibold text-primary">Mis trabajos</Link>
                        </nav>
                        <div className="grid gap-6">
                            {totalWorks.length === 0 ? (
                                <Card className="h-20">
                                    <div className="flex items-center md:mt-6 justify-center m-auto">No tienes trabajos guardados.</div>
                                </Card>
                            ) : (
                                totalWorks.map((item: any, index: number) => (
                                    <Card key={index} className="md:h-[250px] h-[450px] shadow-lg">
                                        <CardHeader className="flex h-[90px] mb-12 md:mb-0">
                                            <div className="flex md:flex-row flex-col md:justify-between items-start gap-2">
                                                <div className="flex flex-col">
                                                    <CardTitle className="text-lg">A.T p/ nene de 6 años</CardTitle>
                                                    <CardDescription className="text-xs">{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ''}</CardDescription>
                                                </div>
                                                <div className="flex md:flex-row gap-2 justify-start">
                                                    <Button className="md:h-10 hidden md:w-48 md:inline-flex gap-2 bg-[#00ea80] hover:bg-[#1aff98] text-black">
                                                        <Send /> Enviar un whatsapp
                                                    </Button>
                                                    <Button className="h-10 gap-2 hidden md:inline-flex">
                                                        <Mail /> Enviar un correo
                                                    </Button>
                                                    {/* <Button variant={'ghost'}>
                                                        <Heart className=""/>
                                                        
                                                    </Button> */}
                                                    {/* <ButtonStore {...item} /> */}
                                                    <div className="hidden md:inline-flex">
                                                        <ButtonDeleteSaved
                                                            userId={sessionId}
                                                            workId={item?.id}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="md:hidden flex flex-row gap-4 mt-2 ">
                                                    <Button className="bg-[#00ea80] hover:bg-[#1aff98] text-center">
                                                        <Send className="md:hidden " />
                                                    </Button>
                                                    <Button>
                                                        <Mail className="md:hidden " />
                                                    </Button>
                                                    {/* <Button variant='secondary'>
                                                        <BookmarkPlus className="md:hidden" />
                                                    </Button> */}
                                                    <div className="md:hidden">
                                                        <ButtonDeleteSaved
                                                            userId={sessionId}
                                                            workId={item?.id}
                                                        />
                                                    </div>
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
                                                        <p>Ciudad: {item.ciudad}</p>
                                                    </div>
                                                    <div className="gap-2 flex items-center">
                                                        <MapPinned size='20px' />
                                                        <p>Domicilio: {item.domicilioLaboral}</p>
                                                    </div>
                                                    <div className="gap-2 flex items-center">
                                                        <University size='20px' />
                                                        <p>Lugar de trabajo: {item.lugarTrabajo} | {item.turno}</p>
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
                                                                <p>Diagnostico: {item.diagnostico}</p>
                                                            </div>
                                                            <div className="gap-2 flex">
                                                                <PanelTopOpen size='20px' />
                                                                <p>Obra social: {item.obraSocial} | {item.turno}</p>
                                                            </div>
                                                            {/* <div className="gap-2 flex">
                                                                <Paperclip size='20px' />
                                                                <p>{item.type}</p>
                                                            </div> */}
                                                        </div>
                                                        <div className="w-full">
                                                            <div className="gap-2 flex">
                                                                <User size='20px' />
                                                                <p>Nombre: {item.name2}</p>
                                                            </div>
                                                            <div className="gap-2 flex">
                                                                <CalendarDays size='20px' />
                                                                <p>Edad: {item.age} años</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </Card>
                                            <Separator orientation="vertical" className="hidden" />
                                        </CardContent>
                                    </Card>
                                ))
                            )}
                        </div>
                    </div>
                </main>
            </Card>
        </div>
    );
}
