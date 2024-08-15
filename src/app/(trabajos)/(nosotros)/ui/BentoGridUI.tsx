import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Check, Startup } from "@/lib"

const frases = [
    {
        icon: <Check />,
        frase: "Acceso a profesionales Exclusivos"
    },
    {
        icon: <Check />,
        frase: "Acceso a Recursos Especializados"
    },
    {
        icon: <Check />,
        frase: "Muestrate ante potenciales clientes"
    },
    {
        icon: <Check />,
        frase: "Prioridad en Eventos y Conferencias"
    },



]


export const BentoGridUI = () => {
    return (
        <div>
            <div className="md:w-[1200px] md:h-[700px] m-auto md:mt-[200px] top-[250px] ">
                {/* <CardDescription>Quieres unirte a un equipo de trabajo?</CardDescription> */}
                {/* <CardTitle>Profesionales</CardTitle> */}
                <Card className="md:w-full grid md:grid-cols-2 grid-cols-1 md:h-[600px] h-[800px]">
                    <div className="md:w-[480px] w-[90%] md:h-[450px] h-[200px] m-auto text-center">
                        <div className="text-start">
                            <Badge className="h-8 rounded-md mt-5 md:mt-0 bg-white hover:bg-white text-black shadow-md flex gap-2 w-72">
                                <Startup />
                                <span className="text-sm">Plan especial para profesionales</span>
                            </Badge>
                            <h3 className="text-3xl mt-5 font-bold">Conecta con otros profesionales</h3>
                            <p>Si bien este sitio es exclusivo para acompañantes, entendemos que trabajan codo a codo con otras profesiones, por eso tenemos un plan ideal para vos.</p>
                        </div>
                        {/* <div className="grid grid-cols-2 gap-2">
                            <Badge className="h-8 rounded-md mt-52 md:mt-0 bg-white hover:bg-white text-black shadow-md flex gap-2 w-72">
                                <Startup />
                                <span className="text-sm">Plan especial para profesionales</span>
                            </Badge>
                            
                        </div> */}
                        
                        {/* <Card className="md:w-[400px] md:h-[200px]  border-black m-auto mt-8">
                            <CardTitle className="mt-3">Abogado Pablo Carranza</CardTitle>
                            <CardDescription>Mtr. 1404567</CardDescription>
                            <CardDescription>Especialista en Amparos | Familia | Penal</CardDescription>
                            <p className="mt-3">Email: abgcarranza@gmail.com</p>
                            <p className="">Domicilio: San Martin 223</p>
                            <p className="">Sitio web: www.carranza.com</p>
                            <Button className="h-8 mt-3">Agendar entrevista</Button>
                        </Card> */}
                    </div>

                    <Card className="md:w-[380px] md:h-[450px] h-[450px] text-center m-auto shadow-2xl">
                        <div>
                            <Badge className="md:mt-10 mt-5 bg-gradient-to-tr from-violet-500 to-orange-300 text-black">Plan profesional Plus</Badge>
                            {/* <h3 className="text-lg text-[#003791] underline font-bold">Premium</h3> */}

                            <p className="text-[48px]">$20k <span className="text-sm">por 6 meses.</span> </p>

                            {
                                frases.map((item, index) => (
                                    <div key={index} className="flex md:w-[90%] w-[70%] mt-2 gap-2 md:items-center  m-auto">
                                        {item.icon}
                                        <p className="text-start md:text-balance">{item.frase}</p>
                                    </div>
                                ))
                            }
                            <Button className="rounded-sm hover:scale-105 mt-10 bg-gradient-to-tr from-violet-500 to-orange-300 text-black" disabled>Proximamente...</Button>
                        </div>
                    </Card>
                </Card>
            </div>
        </div>
    )
}
