'use server'
import prisma from "@/lib/prisma";

export const savedWork = async (userId: string, workId: string) => {
    try {

        const userExists = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!userExists) {
            return {
                ok: false,
                message: 'El usuario asociado no existe o es admin',
            };
        }
        const existingSavedWork = await prisma.savedWork.findUnique({
            where: {
                userId_workId: {
                    userId: userId,
                    workId: workId,
                },
            },
        });

        if (existingSavedWork) {
            return {
                ok: false,
                message: 'Este trabajo ya ha sido guardado por el usuario',
            };
        }

        const savedWork = await prisma.savedWork.create({
            data: {
                userId: userId,
                workId: workId,
            },
        });

        return {
            ok: true,
            message: 'Trabajo guardado exitosamente',
            savedWork,
        };

    } catch (error) {
        return {
            ok: false,
            message: 'No se pudo guardar el trabajo',
        };
    }
};
