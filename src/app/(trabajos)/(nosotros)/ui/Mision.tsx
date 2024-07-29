import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react";
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["greek"] });

export const Mision = () => {
    return (
        <div className="mt-40 absolute z-[39]">
            <div className="grid md:grid-cols-2 gap-4 grid-cols-1 w-full">

                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className={`text-[26px]`} >
                            El rol del A.T
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="items-center justify-center flex m-auto text-[16px] leading-7">
                        El Acompañante Terapéutico es un agente de salud formado en conocimientos básicos de Psicopatología y con conceptos generales de Psicología, entrenado para realizar un seguimiento de cuidado y prevención con pacientes crónicos y agudos y acompañarlos en sus diferentes procesos bajo la supervisión de los profesionales que en cada caso llevan adelante el tratamiento.

                    </CardContent>
                </Card>
                <Card className="w-full">
                    <CardTitle className="text-center text-[26px] mt-4">Objetivos del A.T</CardTitle>
                    <CardContent className="mt-5">
                        <ul className="flex flex-col gap-2 m-auto text-[16px]">
                            <li className="flex gap-2">
                                <div>
                                    <Check className="text-green-600" />
                                </div>
                                <p>Favorecer el desarrollo biopsicosocial y/o autovalimiento de la persona asistida.</p>
                            </li>
                            <li className="flex gap-2">
                                <div>
                                    <Check className="text-green-600" />
                                </div>
                                <p>Fortalecer los vínculos familiares y sociales.</p>
                            </li>
                            <li className="flex gap-2">
                                <div>
                                    <Check className="text-green-600" />
                                </div>
                                <p>Intervenir para facilitar a la persona asistida su integración en el proceso de vida independiente.</p>
                            </li>
                            <li className="flex gap-2">
                                <div>
                                    <Check className="text-green-600" />
                                </div>
                                <p>Estimular la indagación y desarrollo de nuevos modelos de intervención como alternativa a los largos procesos de institucionalización.</p>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
