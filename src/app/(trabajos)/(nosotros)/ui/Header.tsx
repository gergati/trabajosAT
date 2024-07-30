import { Button } from "@/components/ui/button";
import {
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

export const Header = () => {

    return (
        <div className="border-none w-full bg-[#EDF7F5] dark:bg-[#020817]">
            <CardHeader>
                <CardTitle className="text-[45px] md:text-[83px] leading-[84px] m-auto md:w-[80%]">El <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">portal</span> donde encontras tu empleo</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-[18px]">Hecho por Acompañantes Terapeuticos.</p>
            </CardContent>
            <div className="h-10 md:mt-0 mt-5 flex  gap-2 justify-center">
                <Link href={'/trabajos'}>
                    <Button className="w-[200px]">
                        Ver trabajos</Button>
                </Link>
                <Link href={'/auth/new-account'}>
                    <Button variant={'ghost'} className="border hover:text-[#0868c5] dark:bg-transparent hover:border-[#0868c5]">Crear cuenta</Button>
                </Link>
            </div>
        </div>
    )
}
