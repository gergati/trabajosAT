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
        <div className="border-none bg-none w-full bg-[#EDF7F5] dark:bg-[#020817]">
            <CardHeader>
                <CardTitle className="text-[45px] md:text-[70px]">El <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">portal</span> donde encontras tu empleo.</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Hecho por Acompañantes Terapeuticos.</p>
            </CardContent>
            <CardFooter className="gap-2 m-auto w-[60%] grid grid-cols-1 md:grid-cols-1">
                <Link href='/trabajos' className="w-full m-auto" >
                    <Button className="w-[60%] m-auto bg-gradient-to-r from-sky-400 to-blue-500 dark:from-sky-500 dark:to-blue-600 dark:text-white dark:hover:from-sky-600 dark:hover:to-blue-700 text-black">
                        Ver Trabajos
                    </Button>
                </Link>
            </CardFooter>
        </div>
    )
}
