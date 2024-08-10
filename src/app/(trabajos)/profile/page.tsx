import { redirect } from "next/navigation";
import { auth } from "../../../../auth.config";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";



export default async function ProfilePage() {
    const session = await auth()
    const isAdmin = session?.user.role === 'admin'

    if (!session?.user) {
        redirect('/')
    }
    const { email, name } = session.user


    return (
        <div className="mt-20 relative md:w-[65%] w-[90%] gap-4 min-h-screen m-auto grid md:grid-cols-1">
            <Card>
                <div className="flex h-full flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                    <div className="mx-auto flex w-full max-w-6xl gap-2 items-center">
                        <h1 className="text-3xl font-semibold">
                            Mi cuenta
                        </h1> {
                            isAdmin ? (<Badge className="bg-[#0084f6] hover:bg-[#0d599b] text-black">Admin</Badge>) : (<Badge className="bg-[#0084f6] hover:bg-[#0d599b] text-black">Usuario</Badge>)
                        }
                    </div>

                    <div className="mx-auto grid w-full max-w-6xl items-start gap-6 ">
                        <nav
                            className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0"
                        >
                            {
                                isAdmin ? (
                                    <>
                                        <Link href="/profile" className="font-semibold text-primary">
                                            Mi perfil
                                        </Link>
                                        <Link href="/profile/publicaciones" className="font-semibold ">Mis publicaciones</Link>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/profile" className="font-semibold text-primary">
                                            Mi perfil
                                        </Link>
                                        <Link href="/profile/trabajos" className="font-semibold ">Mis trabajos</Link>
                                    </>
                                )
                            }
                        </nav>
                        <div className="grid gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Nombre completo</CardTitle>
                                    <Separator />
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{name}</CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Correo electronico</CardTitle>
                                    <Separator />
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{email}</CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}