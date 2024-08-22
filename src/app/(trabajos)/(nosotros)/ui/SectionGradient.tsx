


import { Badge } from '@/components/ui/badge'
import { Card, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowMainGradient, ArrowRotate, Comunnity, FlameMainGradient, MessageMainGradient, SavedMainGradient } from '@/lib'

export const SectionGradient = () => {
    return (
        <div className="absolute w-[90%]">
            <div className='absolute md:-top-20 z-[45] md:left-[35%] left-0 right-auto m-auto md:w-[400px] md:h-[100px]'>
                <Badge className="h-8 rounded-md mt-52 md:mt-4 bg-white hover:bg-white text-black shadow-md flex gap-2 w-36">
                    <FlameMainGradient />
                    <span className="text-sm">Beneficios</span>
                </Badge>
                <CardTitle className='text-3xl my-8'>Que te ofrecemos?</CardTitle>
            </div>
            <div className="absolute z-[39] w-[352px] m-auto md:left-[200px] md:top-[80px] top-[250px]">
                <div className='md:w-[950px] md:h-[500px] h-[900px] rounded-lg grid grid-cols-1'>
                    <div className='bg-gradient-to-tr from-violet-500 to-orange-300 h-[700px] w-full blur-3xl m-auto'></div>
                    <Card className='absolute md:w-[320px] top-28 md:top-0 h-[100px] flex shadow-lg'>
                        <div className='items-center justify-center text-center w-[20%] m-auto ml-2'>
                            <ArrowMainGradient />
                        </div>
                        <Separator orientation='vertical' />
                        <div className='w-full items-start m-auto text-start ml-2'>
                            <CardTitle className='text-lg'>Crecer profesionalmente</CardTitle>
                            <p className='text-sm leading-4'>Podrás estar actualizado con los nuevos trabajos que salen día a día.</p>
                        </div>
                    </Card>

                    <Card className='absolute top-56 md:left-[300px] md:top-[140px] md:w-[350px] h-[100px] flex shadow-lg'>
                        <div className='items-center justify-center text-center w-[20%] m-auto ml-4'>
                            <SavedMainGradient />
                        </div>
                        <Separator orientation='vertical' />
                        <div className='w-full items-start m-auto text-start ml-4'>
                            <CardTitle className='text-lg'>Guardar todos tus trabajos</CardTitle>
                            <p className='text-sm leading-4'>No querras perderte ninguno, podrás consultarlo cuando quieras, guardandolos.</p>
                        </div>
                    </Card>

                    <Card className='absolute top-[340px] md:left-[500px] md:top-[20px] md:w-[350px] h-[100px] flex shadow-lg'>
                        <div className='items-center text-center w-[20%] m-auto ml-4'>
                            <MessageMainGradient />
                        </div>
                        <Separator orientation='vertical' />
                        <div className='w-full items-start m-auto text-start ml-2'>
                            <CardTitle className='text-lg'>Ser más directo.</CardTitle>
                            <p className='text-sm leading-4'>Sin limitaciones podrás aplicar a cualquier trabajo.</p>
                        </div>
                    </Card>

                    <Card className='absolute top-[460px] md:left-[500px] md:top-[380px] md:w-[400px] h-[100px] flex shadow-lg'>
                        <div className='items-center text-center w-[20%] m-auto ml-4'>
                            <Comunnity />
                        </div>
                        <Separator orientation='vertical' />
                        <div className='w-full items-start m-auto text-start ml-2'>
                            <CardTitle className='text-lg'>Se parte de una comunidad.</CardTitle>
                            <p className='text-sm leading-4'>Conecta con profesionales relacionados a tu area que harán que crezcas laboralmente.</p>
                        </div>
                    </Card>

                    <Card className='absolute top-[580px] md:left-[30px] md:top-[270px] md:w-[400px] md:h-[100px] h-[150px] flex shadow-lg'>
                        <div className='items-center text-center w-[20%] m-auto ml-4'>
                            <ArrowRotate />
                        </div>
                        <Separator orientation='vertical' />
                        <div className='w-full items-start m-auto text-start ml-2'>
                            <CardTitle className='text-lg'>Olvidate de actualizar la busqueda.</CardTitle>
                            <p className='text-sm leading-4'>Con nosotros tu busqueda queda activa, hasta que consigas un profesional o lo borres.</p>
                        </div>
                    </Card>

                </div>
            </div>
        </div>
    )
}
