'use server'
import Email from '@/app/email/Email'
import { Resend } from 'resend'


const resend = new Resend(process.env.AUTH_RESEND_KEY)

export const emailVerification = async (email: string, token: string) => {


    try {
        const url = `${process.env.NEXTAUTH_URL}/api/auth/verify-email?token=${token}`
        await resend.emails.send({
            from: "TrabajosAT <onboarding@resend.dev>",
            to: email,
            subject: "Verifica tu email",
            react: Email(url),
        })
        return {
            ok: true,
            message: 'Email enviado'
        }

    } catch (error) {
        return {
            ok: false,
            message: 'Error al enviar el mensaje'
        }

    }

}