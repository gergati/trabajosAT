'use server';

import prisma from "@/lib/prisma";
import { Role } from "@prisma/client";
import bcryptjs from 'bcryptjs'


export const RegisterUser = async (name: string, email: string, password: string, role: Role) => {

    try {

        const user = await prisma.user.create({
            data: {
                name: name,
                email: email.toLowerCase(),
                password: bcryptjs.hashSync(password),
                role: role
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true
            }
        })
        return {
            ok: true,
            user: user,
            message: 'Usuario creado'
        }


    } catch (error) {

        return {
            ok: false,
            message: 'No se pudo crear el usuario'
        }

    }

}