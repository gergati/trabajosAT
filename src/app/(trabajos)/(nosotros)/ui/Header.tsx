import { Button } from "@/components/ui/button";
import {
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

export const Header = () => {

    return (
        <div className="text-center items-center ">
            <CardHeader>
                <CardTitle className="text-[45px] md:mt-32 pt-32 md:pt-0 text-[#003791] md:text-[64px] leading-[64px] m-auto md:w-[50%]">El <span className="text-[#003791] dark:text-[#E9F6F5]">portal</span> donde encontras tu empleo</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-[16px] md:w-[40%] m-auto text-[#0045d7]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nemo magnam delectus numquam vero deserunt quo! Dolorem neque modi.</p>
            </CardContent>
            <div className="h-10 md:mt-0 mt-5 flex  gap-2 justify-center">
                <Link href={'/trabajos'}>
                    <Button className="w-[200px] bg-[#003791] hover:bg-[#0054ff]">
                        Ver trabajos
                    </Button>
                </Link>
                <Link href={'/auth/new-account'}>
                    <Button variant={'ghost'} className="border hover:text-[#003791] hover:bg-transparent hover:border-[#003791]">Crear cuenta</Button>
                </Link>
            </div>
        </div>
    )
}
