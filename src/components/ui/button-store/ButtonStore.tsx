'use client'

import { BookmarkPlus, Check, Heart, HeartCrack, Mail } from "lucide-react"
import { Button } from "../button"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import Whatsapp from "@/components/icons/Whatsapp"
import { savedWork } from "@/actions"
import { toast } from "sonner"
import { worksByWorksId } from "@/actions/work/works-by-worksid"
import { useWorkStore } from "@/store/work/work-store"
import { ButtonDeleteSaved } from "../button-deleted-saved/ButtonDeleteSaved"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip"

interface Props {
    email: string,
    phone: string;
    workId: string,
}

export const ButtonStore = ({ email, phone, workId }: Props) => {
    const setWorks = useWorkStore(state => state.setWorks)
    const { data: session } = useSession();
    const userId = session?.user.id
    const isAdmin = session?.user.role === 'admin'
    const [isSaved, setIsSaved] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkIfSaved = async () => {
            if (session?.user) {
                const response = await worksByWorksId(session.user.id);
                if (response.ok && response.works) {
                    const workIsSaved = response.works.some((work: { workId: string }) => work.workId === workId);
                    setIsSaved(workIsSaved);
                }
                setIsLoading(false);
            } else {
                setIsLoading(false);
            }
        };
        checkIfSaved();
    }, [session, workId]);

    const onSaved = async () => {
        if (!session?.user) {
            return;
        }
        if (!isAdmin) {
            const { ok } = await savedWork(session.user.id, workId);
            if (!ok) {
                toast.error('No se pudo guardar');
            } else {
                setIsSaved(true);
                toast.success('Trabajo guardado correctamente');
            }
        }
    };

    if (isLoading) {
        return <Button disabled>Cargando...</Button>;
    }

    return (
        <>
            <div className="flex md:flex-row gap-2 justify-start">
                <Button className="md:h-10 hidden md:w-48 md:inline-flex gap-2 bg-[#2ee995] hover:bg-[#1aff98] text-black">
                    <Whatsapp className="size-5" />
                    <a href={`https://wa.me/+54${phone}?text=Te%20escribo%20desde%20TrabajosAT`} target="_blank">Enviar un whatsapp</a>
                </Button>
                <Button className="h-10 gap-2 hidden md:inline-flex text-white">
                    <Mail />
                    <a target="_blank" href={`mailto:${email}?Subject=TrabajosAT%20-%20Acompañante%20Terapeutico`}>
                        Enviar un correo
                    </a>
                </Button>
                {
                    !isAdmin && (
                        // <ButtonDeleteSaved userId={userId as string} workId={workId} />
                        <Button variant='secondary' onClick={onSaved} className="gap-2 hidden md:inline-flex" >
                            {isSaved
                                ? (
                                    <>
                                        {/* Guardado
                                        <Check /> */}
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Heart className="text-black fill-red-500 transition-all" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>No guardar</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </>
                                )
                                : (
                                    <>
                                        {/* Guardar
                                        <BookmarkPlus /> */}
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Heart className="text-black transition-all" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Guardar</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </>
                                )}
                        </Button>
                    )
                }
            </div>
            <div className="md:hidden flex flex-row gap-4 mt-2 ">
                <Button className="bg-[#00ea80] hover:bg-[#1aff98] text-center">
                    <a href={`https://wa.me/+54${phone}?text=Te%20escribo%20desde%20TrabajosAT`} target="_blank">
                        <Whatsapp className="size-5" />
                    </a>
                </Button>
                <Button>

                    <a target="_blank" href={`mailto:${email}?Subject=TrabajosAT%20-%20Acompañante%20Terapeutico`}><Mail className="md:hidden " /></a>
                </Button>
                {
                    !isAdmin && (
                        <Button variant='secondary' onClick={onSaved} disabled={isSaved}>
                            {isSaved
                                ? (
                                    <>
                                        Guardado
                                        <Check />
                                    </>
                                )
                                : (
                                    <>
                                        Guardar
                                        <BookmarkPlus className="md:hidden" />
                                    </>
                                )}
                        </Button>
                    )
                }
            </div>
        </>
    )
}
