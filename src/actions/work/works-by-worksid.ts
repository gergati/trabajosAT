'use server'
import prisma from "@/lib/prisma"



export const worksByWorksId = async (userId: string) => {

    try {
        const works = await prisma.savedWork.findMany({
            where: { userId },
            select: {
                workId: true,
            }
        })
        return {
            ok: true,
            works: works
        }

    } catch (error) {
        return {
            ok: false,
            message: 'No se pudo encontrar el trabajo'
        }
    }

}