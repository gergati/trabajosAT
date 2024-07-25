// import prisma from "@/lib/prisma"


// export const worksByProfile = async (userId: string) => {
//     try {
//         const worksProfile = await prisma.savedWork.findMany({
//             where: { userId },
//             select: {
//                 workId: true
//             }
//         })
//         // Obtener la información del usuario para cada trabajo
//         const worksWithUserInfo = await Promise.all(worksProfile.map(async (work) => {
//             // Obtener la información del usuario a partir de userId
//             const works = await prisma.work.findMany({
//                 where: {
//                     id: work.workId
//                 },
//                 select: {
//                     name: true,
//                     email: true,
//                     age: true,
//                     ciudad: true
//                     // Añade otras propiedades del usuario según necesites
//                 }
//             });

//             return {
//                 ok: true,
//                 ...works,// Añade el objeto de usuario al trabajo
//             };
//         }));
//         return worksWithUserInfo;

//     } catch (error) {
//         return []
//     }
// }

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
        console.error('Error obteniendo los trabajos por userId:', error);
        return [];
    }
};

