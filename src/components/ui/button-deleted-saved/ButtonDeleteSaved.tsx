'use client'

import { useState } from 'react'
import { Button } from '../button';
import { Heart, HeartCrack } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../tooltip';
import { deleteWorksByProfile } from '@/actions';
import { toast } from 'sonner';

interface Props {
    userId: string,
    workId: string
}

export const ButtonDeleteSaved = ({ userId, workId }: Props) => {
    const [isHovered, setIsHovered] = useState(false);
    const [loading, setLoading] = useState(false)


    const handleDelete = async () => {
        setLoading(true);
        const response = await deleteWorksByProfile(userId, workId)
        setLoading(false);

        if (response.ok) {
            toast.success("Trabajo eliminado exitosamente");
        } else {
            toast.error("Error al eliminar el trabajo");
        }
    };


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <Button
            onClick={handleDelete}
            disabled={loading}
            variant={'ghost'}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative flex items-center gap-2"
        >
            {isHovered
                ?
                (
                    <>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <HeartCrack className="text-black fill-red-500 transition-all hover:size-7" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>No guardar</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </>
                )
                :
                (
                    <>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Heart className="text-black fill-red-500 transition-all" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Guardar</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </>
                )
            }

        </Button>
    )
}
