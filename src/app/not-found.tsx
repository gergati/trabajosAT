import { Button } from '@/components/ui/button'
import { ArrowMainGradient, ArrowRotate, FlameMainGradient, MessageMainGradient, Professional, SavedMainGradient } from '@/lib';
import { Onest } from 'next/font/google';
import Link from 'next/link'

const onest = Onest({ subsets: ["latin"] });

export default function NotFound() {
    return (
        <div className={`relative md:w-[70%] w-[90%] h-[500px] m-auto text-center my-10 ${onest.className}`}>
            <h2 className='md:text-[250px] text-[180px]'>404</h2>
            <p className='font-bold'>Este recurso no esta disponible en este momento</p>
            <div className='absolute top-10 left-52 blur-sm'>
                <ArrowMainGradient />
            </div>
            <div className='absolute md:top-16 top-5 left-72'>
                <ArrowRotate />
            </div>
            <div className='absolute top-14 md:right-[400px] right-1'>
                <FlameMainGradient />
            </div>
            <div className='absolute md:top-10 top-3 right-[200px]'>
                <MessageMainGradient />
            </div>
            <div className='absolute md:top-20 top-10 right-[300px] blur-[1px]'>
                <SavedMainGradient />
            </div>
            <div className='absolute md:bottom-24 bottom-64 right-52 blur-[1px]'>
                <ArrowMainGradient />
            </div>
            <div className='absolute md:bottom-32 bottom-64 right-[300px] md:blur-none blur-sm'>
                <ArrowRotate />
            </div>
            <div className='absolute top-[200px] left-[200px]'>
                <FlameMainGradient />
            </div>
            <div className='absolute md:top-[290px] top-[210px] left-[280px]'>
                <Professional />
            </div>
            <div className='absolute top-64 right-[550px] blur-[2px]'>
                <MessageMainGradient />
            </div>
            <div className='absolute md:top-64 top-52 md:right-[400px] right-4 blur-sm md:blur-none'>
                <SavedMainGradient />
            </div>
            <Link href={'/'}>
                <Button className="w-[200px] bg-[#003791] hover:bg-[#0054ff] mt-4">
                    Regresar
                </Button>
            </Link>
        </div>
    )
}