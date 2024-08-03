'use server'

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"


export const deleteWorksByProfile = async (userId: string, workId: string) => {
    try {
        await prisma.savedWork.delete({
            where: {
                userId_workId: {
                    userId,
                    workId
                }
            }
        })
        revalidatePath('/trabajos')
        revalidatePath('/profile/publicaciones')
        return {
            ok: true,
            message: 'Trabajo eliminado en su perfil'
        }
    } catch (error) {
        return {
            ok: false,
            message: 'Error al eliminar el trabajo de su perfil'
        }
    }
}