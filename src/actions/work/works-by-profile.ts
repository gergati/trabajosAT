import prisma from "@/lib/prisma"

export const worksByProfile = async (userId: string) => {
    try {
        const worksProfile = await prisma.savedWork.findMany({
            where: { userId },
            select: {
                workId: true
            }
        });

        const workIds = worksProfile.map(work => work.workId);

        const worksWithUserInfo = await prisma.work.findMany({
            where: {
                id: { in: workIds }
            },
            select: {
                id: true,
                age: true,
                ciudad: true,
                diagnostico: true,
                domicilioLaboral: true,
                email: true,
                createdAt: true,
                lugarTrabajo: true,
                name: true,
                name2: true,
                obraSocial: true,
                phone: true,
                profesional: true,
                type: true,
                userId: true
            }
        });

        return worksWithUserInfo;

    } catch (error) {
        return [];
    }
};

