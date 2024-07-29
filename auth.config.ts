import prisma from '@/lib/prisma';
import NextAuth, { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcryptjs from 'bcryptjs';

export const authConfig: NextAuthConfig = {
    pages: {
        signIn: '/auth/login',
        newUser: '/auth/new-account',
        verifyRequest: 'auth/verify-email'
    },
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.data = user;
            }
            return token;
        },
        async session({ session, token, user }) {
            session.user = token.data as any;
            return session;
        }
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (!parsedCredentials.success) return null

                const { email, password } = parsedCredentials.data;


                //Buscar el correo
                const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } })

                if (!user) return null

                //Comparar las contraseñas
                if (!bcryptjs.compareSync(password, user.password as string)) return null


                // Verificar si el correo electrónico ha sido verificado
                // Crear un nuevo token de verificación si no existe uno
                // if (!user.emailVerified) {
                //     const verifyTokenExists = await prisma.verificationToken.findFirst({
                //         where: { identifier: user.email }
                //     });

                //     if (!verifyTokenExists) {
                //         const token = nanoid();
                //         await prisma.verificationToken.create({
                //             data: {
                //                 identifier: user.email,
                //                 token,
                //                 expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
                //             },
                //         });
                //         await emailVerification(user.email, token);
                //     }

                //     return { email, pending: true };
                // }

                // Retornar un objeto con un estado de pendiente

                // Eliminar la contraseña antes de retornar el usuario
                const { password: _, ...rest } = user;
                return rest;
            }
        }),
    ],
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);
