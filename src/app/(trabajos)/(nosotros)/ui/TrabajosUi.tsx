import { Card, CardContent } from "@/components/ui/card";

export const TrabajosUi = () => {
    return (
        <div className="relative w-full h-[400px] md:-top-[240px] overflow-hidden grid md:grid-cols-2 gap-4 md:mt-[2px] mt-[80px]">
            <div className="absolute top-[100px] rotate-3 md:rotate-0">
                <Card className="h-20 bg-red-400">
                    <CardContent className="grid justify-center items-center mt-4 dark:text-black">
                        <p className="text-center">Diagnostico: Autismo</p>
                        <p className="text-start">Nombre: Jhon Doe</p>
                    </CardContent>
                </Card>
            </div>
            <div className="absolute z-[22] md:top-[130px] top-[80px] -right-[100px] md:right-[300px]">
                <Card className="h-24 md:h-20 md-[200px] bg-blue-300 dark:text-black">
                    <CardContent className="grid justify-center mt-4 items-center dark:text-black">
                        <p>Estudios: Universidad Nacional del Sur.</p>
                        <p>Estudios secundarios: Curso sobre espectro del habla.</p>
                    </CardContent>
                </Card>
            </div>
            <div className="absolute md:top-[215px] top-[150px] md:left-[250px] -rotate-12 md:rotate-0">
                <Card className="h-20 bg-yellow-300 dark:text-black">
                    <CardContent className="grid justify-center mt-4 items-center dark:text-black">
                        <p>Adulto con Autismo</p>
                        <p>Lunes a Viernes de 08 a 14 hs</p>
                    </CardContent>
                </Card>
            </div>
            <div className="absolute md:left-[350px] left-[160px] top-[200px] md:top-[10px]">
                <Card className="h-20 bg-green-300 dark:text-black">
                    <CardContent className="grid justify-center mt-4 items-center dark:text-black">
                        <p>Acompaña en Escuela N° 34 | Turno tarde</p>
                        <p>Obra Social: IOMA</p>
                    </CardContent>
                </Card>
            </div>
            <div className="absolute md:z-[23] md:top-[70px] top-[260px] md:left-[100px] left-[20px]">
                <Card className="h-20 bg-pink-300">
                    <CardContent className="grid justify-center mt-4 items-center dark:text-black">
                        <p>Acompaña en Institución | Turno mañana</p>
                        <p>Diagnostico: Epilepsia reflactaria y hemiparesia.</p>
                    </CardContent>
                </Card>
            </div>
            <div className="absolute md:top-[272px] top-[400px] md:left-[450px] left-[200px]">
                <Card className="h-20 bg-emerald-300 dark:text-black">
                    <CardContent className="grid justify-center mt-4 items-center dark:text-black">
                        <p>Adulto de 30 años</p>
                        <p>Diagnostico: Depresión</p>
                    </CardContent>
                </Card>
            </div>
            <div className="absolute md:z-[24] md:top-[70px] top-[320px] md:left-[550px]">
                <Card className="h-20 bg-sky-300 dark:text-black">
                    <CardContent className="grid justify-center mt-4 items-center dark:text-black">
                        <p>Acompaña en domicilio | Turno mañana</p>
                        <p>Diagnostico: Esquizofrenia.</p>
                    </CardContent>
                </Card>
            </div>
            <div className="absolute md:top-[220px] top-[450px] md:left-[640px] left-[120px]">
                <Card className="h-20 bg-rose-300 dark:text-black">
                    <CardContent className="grid justify-center items-center dark:text-black mt-4">
                        <p>Acompaña en domicilio | Turno tarde</p>
                        <p>Obra Social con amparo.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
