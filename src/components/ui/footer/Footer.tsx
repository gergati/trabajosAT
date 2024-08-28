import { FacebookIcons } from "@/components/icons/Facebook"
import { InstagramIcons } from "@/components/icons/Instagram"
import { TwitterIcon } from "@/components/icons/Twitter"
import Image from "next/image"
import Link from "next/link"


export const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 w-full md:mt-10 mt-[500px]">
            <div className="max-w-screen-xl w-[70%] md:w-[100%] items-center justify-center m-auto h-[500px] md:h-[280px] ">
                <div className="grid md:grid-cols-2 grid-cols-1 w-full md:w-[90%] h-full md:m-auto">
                    <div className="mt-14">
                        <div className="items-start">
                            <p className="text-gray-700 text-xs">Hecho por acompañantes terapeuticos</p>
                            <div className="flex  items-center">
                                <div className="w-14 h-14">
                                    <Image src={"/icon/logo-icon.png"} alt="Icon logo trabajosAT" width={56} height={56} className="w-14 h-14" />
                                </div>
                                <h2 className="text-3xl font-bold text-black">TrabajosAT</h2>
                            </div>
                            <p className="text-black text-md">Empieza un nuevo trabajo hoy mismo.</p>
                        </div>
                        <div className="flex gap-4 my-5">
                            <a href="#" aria-label="Ir a Facebook">
                                <FacebookIcons />
                            </a>
                            <a href="#" aria-label="Ir a Instagram">
                                <InstagramIcons />
                            </a>
                            <a href="#" aria-label="Ir a Twitter">
                                <TwitterIcon />
                            </a>
                        </div>
                        <div>
                            <p className="text-xs text-black">
                                © Copyright 2024 TrabajosAT. Todos los derechos reservados.
                            </p>
                        </div>
                    </div>

                    <div className="my-5 mt-14 ">
                        <div>
                            <h3 className="font-medium text-black">COMPAÑIA</h3>
                            <Link
                                className="hover:opacity-75 text-gray-800 text-sm hover:underline"
                                href="/"
                            >
                                Nosotros
                            </Link>
                        </div>
                        <div>
                            <h3 className="font-medium text-black">SERVICIOS</h3>
                            <Link
                                className="hover:opacity-75 text-gray-900 text-sm hover:underline"
                                href="/trabajos"
                            >
                                Trabajos
                            </Link>
                        </div>
                        <div>
                            <h3 className="font-medium text-black">LEGALES</h3>
                            <Link
                                className="hover:opacity-75 text-gray-900 text-sm hover:underline"
                                href="/terminos"
                            >
                                Términos y Condiciones
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
