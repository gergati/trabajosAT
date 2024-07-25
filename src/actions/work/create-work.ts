'use server'

import { Works } from "@/interfaces";
import prisma from "@/lib/prisma";


export const createWork = async (works: Works, userId: string) => {

    try {
        const newWork = await createWorks(works, userId)

        return {
            ok: true,
            works: newWork
        }

    } catch (error) {
        return {
            ok: false,
            message: 'No se pudo crear el trabajo'
        }
    }
}

const createWorks = async (works: Works, userId: string) => {
    try {

        const workToSave = {
            age: works.age,
            ciudad: works.ciudad,
            diagnostico: works.diagnostico,
            domicilioLaboral: works.domicilioLaboral,
            email: works.email,
            lugarTrabajo: works.lugarTrabajo,
            name: works.name,
            name2: works.name2,
            obraSocial: works.obraSocial,
            phone: works.phone,
            profesional: works.profesional,
            terms: works.terms,
            type: works.type,
            userId: userId,
            turno: works.turno
        }


        const newWork = await prisma.work.create({
            data: workToSave
        })

        return {
            ok: true,
            newWork
        }

    } catch (error) {
        console.log(error)
        return {
            ok: false,
            message: 'No se pudo guardar el trabajo'
        }
    }
} 