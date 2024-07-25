'use server';

import prisma from "@/lib/prisma";

export const getPaginationWorks = async () => {
    try {
        const works = await prisma.work.findMany({
            orderBy: {
                createdAt: 'desc',
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
                userId: true,
                turno: true
            }
        });

        const worksWithUserInfo = await Promise.all(works.map(async (work) => {
            const user = await prisma.user.findUnique({
                where: {
                    id: work.userId
                },
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            });

            return {
                ok: true,
                ...work,
                user: user
            };
        }));

        return worksWithUserInfo;
    } catch (error) {
        return []
    }
}
