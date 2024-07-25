import prisma from "@/lib/prisma"

export const deletedWorks = async (id: string) => {
    try {

        await prisma.work.delete({
            where: { id },
        });
        return { ok: true }
    } catch (error) {
        console.log(error)
        return {
            ok: false,
            message: 'Error al eliminar',
        };
    }
};
