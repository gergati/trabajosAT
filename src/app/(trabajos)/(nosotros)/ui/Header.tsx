'use client'
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FlameMainGradient } from "@/lib";
import Link from "next/link";

export const Header = () => {
    const [textIndex, setTextIndex] = useState(0);
    const texts = ["acompañantes terapéuticos", "profesionales de la salud"];
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setIsAnimating(false);
            }, 500); // Tiempo para la animación
        }, 4000); // Cambia cada 2 segundos

        return () => clearInterval(interval); // Limpiar intervalo al desmontar
    }, []);

    return (
        <div className="text-center items-center">
            <CardHeader>
                <CardTitle className="text-[40px] md:mt-32 pt-32 md:pt-0 text-[#003791] md:text-[64px] md:leading-[64px] m-auto md:w-[50%] w-[110%] text-start md:text-center">
                    Prestadores de servicios de salud.
                </CardTitle>
            </CardHeader>
            <div className="md:w-[90%] w-full m-auto text-lg leading-4 text-center md:flex md:justify-center md:items-center grid-cols-2 mb-12">
                <div className="flex md:inline-flex justify-center items-center  text-center">
                    <span>Vinculamos</span>
                    <Button className="mx-2 h-8 rounded-md bg-gradient-to-r from-green-500 to-green-700 text-black w-[250px] shadow-md gap-2 relative overflow-hidden">
                        {/* <FlameMainGradient /> */}
                        <span
                            className={`text-lg transition-transform duration-500 ease-in-out text-center absolute ${isAnimating ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                                }`}>
                            {texts[textIndex]}
                        </span>
                    </Button>
                </div>
                <div  className="flex md:inline-flex justify-center mt-4 md:mt-0  items-center  text-center">
                    <span>con</span>
                    <Button className="mx-2 h-8 rounded-md bg-gradient-to-r from-violet-300 to-violet-400 text-black shadow-md gap-2">
                        {/* <FlameMainGradient /> */}
                        <span className="text-lg">usuarios</span>
                    </Button>
                </div>
            </div>
            <div className="h-10 md:mt-0 mt-5 flex gap-2 justify-center">
                <Link href={'/trabajos'}>
                    <Button className="w-[200px] bg-[#003791] hover:bg-[#0054ff]">
                        Ver trabajos
                    </Button>
                </Link>
                <Link href={'/auth/new-account'}>
                    <Button variant={'ghost'} className="border hover:text-[#003791] hover:bg-transparent hover:border-[#003791]">
                        Crear cuenta
                    </Button>
                </Link>
            </div>
        </div>
    )
}
