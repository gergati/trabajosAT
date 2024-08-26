import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Sidebar } from "./ui/Sidebar";

export default function ProfesionalesPage() {
    return (
        // <div className="m-auto mt-10 md:mt-10 w-[90%] md:w-[70%] bg-[#EDF7F5] grid md:grid-cols-2 grid-cols-1">

        //     <Card className="md:w-[400px] md:h-[230px] text-center border-black m-auto mt-8">
        //         <CardTitle className="mt-3">Abogado Pablo Carranza</CardTitle>
        //         <CardDescription>Mtr. 1404567</CardDescription>
        //         <CardDescription>Especialista en Amparos | Familia | Penal</CardDescription>
        //         <p className="mt-3">Email: abgcarranza@gmail.com</p>
        //         <p className="">Domicilio: San Martin 223</p>
        //         <p className="">Sitio web: www.carranza.com</p>
        //         <Button className="h-8 mt-3">Agendar entrevista</Button>
        //     </Card>
        //     <Card className="md:w-[400px] md:h-[230px] text-center border-black m-auto mt-8">
        //         <CardTitle className="mt-3">Abogado Pablo Carranza</CardTitle>
        //         <CardDescription>Mtr. 1404567</CardDescription>
        //         <CardDescription>Especialista en Amparos | Familia | Penal</CardDescription>
        //         <p className="mt-3">Email: abgcarranza@gmail.com</p>
        //         <p className="">Domicilio: San Martin 223</p>
        //         <p className="">Sitio web: www.carranza.com</p>
        //         <Button className="h-8 mt-3">Agendar entrevista</Button>
        //     </Card>
        //     <Card className="md:w-[400px] md:h-[230px] text-center border-black m-auto mt-8">
        //         <CardTitle className="mt-3">Abogado Pablo Carranza</CardTitle>
        //         <CardDescription>Mtr. 1404567</CardDescription>
        //         <CardDescription>Especialista en Amparos | Familia | Penal</CardDescription>
        //         <p className="mt-3">Email: abgcarranza@gmail.com</p>
        //         <p className="">Domicilio: San Martin 223</p>
        //         <p className="">Sitio web: www.carranza.com</p>
        //         <Button className="h-8 mt-3">Agendar entrevista</Button>
        //     </Card>
        //     <Card className="md:w-[400px] md:h-[230px] text-center border-black m-auto mt-8">
        //         <CardTitle className="mt-3">Abogado Pablo Carranza</CardTitle>
        //         <CardDescription>Mtr. 1404567</CardDescription>
        //         <CardDescription>Especialista en Amparos | Familia | Penal</CardDescription>
        //         <p className="mt-3">Email: abgcarranza@gmail.com</p>
        //         <p className="">Domicilio: San Martin 223</p>
        //         <p className="">Sitio web: www.carranza.com</p>
        //         <Button className="h-8 mt-3">Agendar entrevista</Button>
        //     </Card>
        // </div>
        <div className="mt-10 md:w-[70%] w-[95%] md:gap-4 min-h-screen m-auto grid grid-cols-1">
            <Sidebar />
        </div>
    );
}