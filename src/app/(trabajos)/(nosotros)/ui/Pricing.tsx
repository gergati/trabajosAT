import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Crown, Startup } from "@/lib"

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
        frase: "Prioridad en Eventos"
    },
]


export const Pricing = () => {
    return (
        <div>
            <div className="md:w-[1200px] md:h-[700px] m-auto md:mt-[200px] top-[250px] ">
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
                    </div>

                    <Card className="relative w-[96%] md:w-[380px] md:h-[450px] h-[450px] text-center m-auto shadow-2xl">
                        <div>
                            <div className="absolute md:top-5 top-6 md:left-24 left-16 -rotate-45">
                                <Crown height={24} width={24} />
                            </div>
                            <div className="absolute md:top-6 md:left-[258px] top-6 left-60 rotate-45">
                                <Crown height={14} width={14} />
                            </div>
                            <Badge className="md:mt-10 mt-10 bg-gradient-to-tr from-violet-500 to-orange-300 text-black">Plan profesional Plus</Badge>

                            <p className="text-[48px]"><span className="text-[32px]">$</span>4000<span className="text-sm">por mes.</span> </p>

                            {
                                frases.map((item, index) => (
                                    <div key={index} className="flex md:w-[90%] w-[90%] mt-2 gap-2 items-center m-auto">
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
