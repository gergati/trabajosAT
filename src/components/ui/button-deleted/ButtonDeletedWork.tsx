'use client'
import { useState } from 'react';
import { Trash2 } from "lucide-react";
import { Button } from "../button";
import { deletedWorks } from '@/actions';
import { toast } from 'sonner';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../alert-dialog';

interface Props {
    id: string;
}

export const ButtonDeletedWork = ({ id }: Props) => {
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true);
        const response = await deletedWorks(id);
        setLoading(false);

        if (response.ok) {
            toast.success("Trabajo eliminado exitosamente");
        } else {
            toast.error("Error al eliminar el trabajo");
        }
    };

    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button
                        variant='destructive'
                        disabled={loading}
                    >
                        <Trash2 className="size-4 mr-2" />
                        {loading ? "Eliminando..." : "Eliminar"}
                    </Button>
                </AlertDialogTrigger >
                <AlertDialogContent className='w-[80%] m-auto'>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Estas seguro?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Esta acción no se puede revertir.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <Button
                            onClick={handleDelete}
                            variant='destructive'
                            disabled={loading}
                        >
                            <Trash2 className="size-4 mr-2" />
                            {loading ? "Eliminando..." : "Eliminar"}
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};
