


import { Badge } from '@/components/ui/badge'
import { Card, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowMainGradient, FlameMainGradient, MessageMainGradient, SavedMainGradient } from '@/lib'

export const SectionGradient = () => {
    return (
        <div className="absolute w-full">
            <div className='absolute md:-top-20 z-[45] md:left-[35%] right-auto m-auto md:w-[400px] md:h-[100px]'>
                <Badge className="h-8 rounded-md mt-32 md:mt-4 bg-white hover:bg-white text-black shadow-md flex gap-2 w-48">
                    <FlameMainGradient />
                    <span className="text-sm">Beneficios</span>
                </Badge>
                <CardTitle className='text-3xl mt-4'>Que te ofrecemos aquí.</CardTitle>
            </div>
            <div className="absolute z-[39] w-[352px] m-auto md:left-[200px] md:top-[80px] top-[130px]">
                <div className='md:w-[950px] md:h-[500px] h-[900px] rounded-lg grid grid-cols-1'>
                    <div className='bg-gradient-to-tr from-violet-500 to-orange-300 h-full w-full blur-3xl'></div>
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

                    <Card className='absolute top-56 md:left-[300px] md:top-[200px] md:w-[350px] h-[100px] flex shadow-lg'>
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

                </div>
            </div>
        </div>
    )
}
