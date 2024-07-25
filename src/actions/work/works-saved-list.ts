import prisma from "@/lib/prisma"



export const worksSavedList = async (userId: string) => {
    try {
        const worksSaved = await prisma.savedWork.findMany({
            where: {
                userId: userId
            },
            select: {
                userId: true,
                workId: true
            }
        })
        return {
            ok: true,
            worksSaved
        }

    } catch (error) {

        return {
            ok: false,
            message: ''
        }

    }

}