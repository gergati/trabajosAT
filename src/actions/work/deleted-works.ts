'use server'
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache";

export const deletedWorks = async (id: string) => {
    try {
        await prisma.work.delete({
            where: { id },
        });
        revalidatePath('/trabajos')
        revalidatePath('/profile/publicaciones')
        return { ok: true };
    } catch (error) {
        return {
            ok: false,
            message: 'Error al eliminar',
        };
    }
};
