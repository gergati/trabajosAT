'use client'
import { useEffect, useState } from 'react';
import { Trash2 } from "lucide-react";
import { Button } from "../button";
import { toast } from 'sonner';
import { deletedWorks } from '@/actions';

interface Props {
    id: string;
}

export const ButtonDeletedWork = ({ id }: Props) => {
    const [loading, setLoading] = useState(false);


    const onDelete = async (id: string) => {

        const deleted = await deletedWorks(id);
        if (deleted.ok) {
            toast.success('Eliminado correctamente');
        } else {
            toast.error('Error al eliminar');
        }
    };




    return (
        <Button variant='destructive' onClick={() => onDelete(id)} disabled={loading}>
            <Trash2 className="size-4 mr-2" />
            {loading ? 'Eliminando...' : 'Eliminar'}
        </Button>
    );
};
