import Whatsapp from "@/components/icons/Whatsapp"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { BookmarkPlus, Check, ChevronRight, Mail, SendHorizontal } from "lucide-react"

export const BentoGridUI = () => {
    return (
        <div>
            <div className="grid md:grid-cols-3 grid-cols-1 md:grid-flow-col md:grid-rows-3 grid-rows-5 items-center justify-center  gap-3 h-[1700px] md:h-[600px] antialiased bg-[#EAF7F5] dark:bg-[#000817] w-full m-auto rounded-3xl p-2">
                {/* Primer cuadrado sm */}
                <div className="bg-white h-full rounded-3xl md:row-span-2 row-span-1 shadow-2xl">
                    <div className="bg-gray-400 h-10 m-auto w-[70%] mt-6 md:ml-5 items-center flex justify-center rounded-lg">
                        <h3 className=" text-center dark:text-black">Guarda tus trabajos</h3>
                        <ChevronRight className="dark:text-black" />
                    </div>
                    <div className="w-[80%] md:w-full m-auto">
                        <p className="text-gray-600 m-4">Aquellos trabajos que te interesan ahora podes tenerlos todos en tu perfil, podrás consultarlo cuando quieras.</p>
                        <p className="text-gray-600 m-4">Si eres Acompañante Terapeutico podrás estar siempre informado con los ultimos trabajos que se creen.</p>
                    </div>
                    <div className="w-[80%] mt-5 m-auto flex gap-2">
                        <Button variant='secondary' className="gap-2 md:inline-flex" >
                            Guardar
                            <BookmarkPlus />
                        </Button>
                        <Button variant='secondary' className="gap-2 md:inline-flex" disabled >
                            Guardado
                            <Check className="text-green-500" />
                        </Button>
                    </div>

                </div>

                {/* Cuadro violeta */}
                <div className="relative z-[50] bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 h-full row-span-2 md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden shadow-2xl">

                    <div className="bg-gray-800 h-10 m-auto md:w-[50%] w-[70%] mt-6 md:ml-5 items-center justify-center rounded-lg flex gap-2 text-white">
                        <SendHorizontal className="size-6" />
                        <h3 className=" text-center dark:text-white">Comunicación instantanea</h3>
                    </div>

                    <div className="absolute w-[70%] md:left-8 md:top-32">
                        <CardTitle className="ml-5 mb-5 mt-5 md:-mt-4">Expande la comunidad y crea lazos</CardTitle>
                        <CardContent className="text-gray-400 text-lg">TrabajosAT hace que la comunidad crezca, podrás enviar cuando quieras un mensaje por whatsapp o por correo para que puedas aplicar al momento a cualquier trabajo que sea de tu interes.</CardContent>
                    </div>
                    <div className="absolute h-[80px] md:w-[40%] w-[60%] bg-[#E2EFED] dark:bg-[#000817] md:left-[450px] md:top-[25px] left-[200px] top-[450px] rounded-full text-center m-auto items-center">
                        <Button className="md:h-10 mt-5 md:ml-5 md:w-48 md:inline-flex gap-2 bg-[#2ee995] hover:bg-[#1aff98] text-black/50">
                            <Whatsapp className="size-5" />
                            <p className="dark:text-black text-black">Enviar un whatsapp</p>
                        </Button>
                    </div>
                    <div className="absolute text-center m-auto items-center h-[80px] md:w-[40%] w-[60%] bg-[#EAF7F5] dark:bg-[#000817] rounded-full md:left-[500px] md:top-[120px] top-[550px] left-[250px]">
                        <Button className="h-10 gap-2 mt-5 md:inline-flex text-white">
                            <Mail />
                            <p className="dark:text-black text-black">
                                Enviar un correo
                            </p>
                        </Button>
                    </div>
                </div>

                {/* cuadro negro */}
                <div className="bg-white h-[80%] md:col-span-3 rounded-3xl row-span-1 shadow-2xl">
                    <div className="grid gap-4 w-full h-full p-1">
                        <div className="relative h-full w-full rounded-3xl bg-slate-950 ">
                            <div className="absolute rounded-3xl bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">

                                <div className="absolute flex">
                                    <div className="md:w-[60%] m-5">
                                        <CardTitle className="text-white mt-5">Crea tu cuenta y obtiene tu perfil</CardTitle>
                                        <CardDescription className="mt-2">Para que puedas guardar tus trabajos, escribir directamente por el que resulte interesante o simplemente redescubrir nuevos destinos.</CardDescription>
                                        <div className="absolute flex md:top-[70px] md:left-28 left-7 top-[140px]">
                                            <div className="md:ml-[340px]">
                                                <Avatar className="w-10 h-10 border border-gray-400">
                                                    <AvatarFallback className=" bg-pink-600">AD</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div className="-ml-4 ">
                                                <Avatar className="w-10 h-10 border border-gray-400">
                                                    <AvatarFallback className=" bg-blue-600">LE</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div className="-ml-4 ">
                                                <Avatar className="w-10 h-10 border border-gray-400">
                                                    <AvatarFallback className=" bg-green-600">GG</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div className="-ml-4 ">
                                                <Avatar className="w-10 h-10 border border-gray-400">
                                                    <AvatarFallback className="bg-purple-700">+5</AvatarFallback>
                                                </Avatar>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
