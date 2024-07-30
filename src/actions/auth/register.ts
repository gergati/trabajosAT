'use server';

import prisma from "@/lib/prisma";
import { Role } from "@prisma/client";
import bcryptjs from 'bcryptjs';
import { nanoid } from 'nanoid';
import { emailVerification } from "@/utils";

export const RegisterUser = async (name: string, email: string, password: string, role: Role) => {
    try {
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email.toLowerCase(),
                password: bcryptjs.hashSync(password),
                role: role,
                emailVerified: null
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true
            }
        });

        const token = nanoid();
        await prisma.verificationToken.create({
            data: {
                identifier: user.email,
                token: token,
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
            },
        });

        await emailVerification(user.email, token);

        return {
            ok: true,
            user: user,
            message: 'Usuario creado, verifica tu correo para activar tu cuenta'
        };
    } catch (error) {
        return {
            ok: false,
            message: 'No se pudo crear el usuario'
        };
    }
}
