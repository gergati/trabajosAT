'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { z } from "zod"
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from "next/link"
import { createWork } from "@/actions"
import { useSession } from "next-auth/react"
import { useState } from "react"

const formSchema = z.object({
    name: z.string().min(2).max(30).trim().toLowerCase(),
    email: z.string().email({ message: "Debe ser un correo electrónico válido" }).refine((value) => value.includes("@"), {
        message: "El correo electrónico debe contener '@'",
    }),
    phone: z.string({ message: 'El número debe ser de Bahia Blanca' }).min(10).max(10),
    profesional: z.enum(["acompañante terapeutico"]),
    ciudad: z.enum(["bahia blanca"]),
    lugarTrabajo: z.enum(["domicilio", "institucion", "ambos"]),
    domicilioLaboral: z.string().min(5).max(40).trim().toLowerCase(),
    diagnostico: z.string().min(2).max(50).trim().toLowerCase(),
    obraSocial: z.string().min(2).max(50).trim().toLowerCase(),
    type: z.enum(["Amparo", "Sin amparo", "Amparo en curso"], {
        required_error: "Debe seleccionar el estado de su obra social.",
    }),
    terms: z.boolean().default(false),
    name2: z.string().min(2).max(30).trim().toLowerCase(),
    age: z.preprocess((val) => Number(val), z.number()
        .min(1, { message: "La edad debe ser mayor que 0" })
        .max(99, { message: "La edad debe ser menor o igual a 99" })
        .int({ message: "La edad debe ser un número entero" })),
    turno: z.enum(["Turno mañana", "Turno tarde"], {
        required_error: "Debe seleccionar el turno.",
    }),
})

export const PublicarForm = () => {

    const [loading, setLoading] = useState(false)

    const { data: session } = useSession({
        required: true
    })

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            profesional: "acompañante terapeutico",
            ciudad: "bahia blanca",
            lugarTrabajo: "domicilio",
            domicilioLaboral: "",
            diagnostico: "",
            obraSocial: "",
            type: "Sin amparo",
            terms: false,
            name2: "",
            age: 0,
            turno: "Turno mañana"
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {

        setLoading(true)
        try {
            const { ok } = await createWork(values, session!.user.id);
            if (!ok) {
                toast.error('Hubo un error al publicar el trabajo')
            } else {
                toast.success('Trabajo publicado correctamente')
            }

        } catch (error) {
            console.error("Error al crear el trabajo:", error);
        } finally {
            setLoading(false)
            // form.reset()
        }

    }

    return (
        <Card className="m-auto w-[90%] md:w-[70%] bg-[#EDF7F5] dark:bg-[#020817]">
            <CardHeader>
                <CardTitle>Busque a su próximo profesional.</CardTitle>
                <CardDescription>Complete todos los datos para una búsqueda más óptima.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="flex flex-col md:flex-row justify-center gap-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Nombre Completo</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Ingrese su nombre completo" {...field} />
                                        </FormControl>
                                        <FormDescription className="text-xs">
                                            Este es su nombre para mostrar publicamente.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Ingrese su correo electronico" {...field} />
                                        </FormControl>
                                        <FormDescription className="text-xs">
                                            Este mail se usará para recibir propuestas laborales.
                                        </FormDescription>
                                        <FormMessage>
                                            {form.formState.errors.email && <p>{form.formState.errors.email.message}</p>}
                                        </FormMessage>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Telefono celular</FormLabel>
                                        <FormControl>
                                            <Input type="tel" {...field} placeholder="Ingrese su telefono sin 0 ni 15" />
                                        </FormControl>
                                        <FormDescription className="text-xs">
                                            Este telefono se usará para recibir propuestas laborales.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex justify-center gap-4 flex-col md:flex-row">
                            <FormField
                                control={form.control}
                                name="profesional"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Profesional</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="seleccione..." />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="acompañante terapeutico">Acompañante Terapeutico</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="ciudad"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Ciudad</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="seleccione..." />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="bahia blanca">Bahia Blanca</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 m-auto justify-center gap-4">
                            <FormField
                                control={form.control}
                                name="domicilioLaboral"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Domicilio Laboral</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Indique el domicilio del paciente" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-center gap-4 flex-col md:flex-col">
                                <FormField
                                    control={form.control}
                                    name="lugarTrabajo"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Lugar de trabajo</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="seleccione..." />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="domicilio">Domicilio</SelectItem>
                                                    <SelectItem value="institucion">Institución</SelectItem>
                                                    <SelectItem value="ambos">Ambos lugares</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="turno"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="flex space-y-1 flex-col md:flex-row"
                                                >
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="Turno mañana" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            Turno mañana
                                                        </FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="Turno tarde" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            Turno tarde
                                                        </FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 grid-cols-1 m-auto justify-center gap-4">
                            <FormField
                                control={form.control}
                                name="diagnostico"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Diagnostico</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Indique el diagnostico del paciente" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-center gap-4 flex-col md:flex-col">
                                <FormField
                                    control={form.control}
                                    name="obraSocial"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Obra Social</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Ingrese el nombre de su obra social" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="type"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="flex space-y-1 flex-col md:flex-row"
                                                >
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="Amparo" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            Con amparo
                                                        </FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="Sin amparo" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            Sin amparo
                                                        </FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="Amparo en curso" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">Amparo en curso</FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="name2"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Nombre del paciente</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nombre del paciente que necesita acompañamiento..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="age"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Edad del paciente</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} />
                                        </FormControl>
                                        <FormMessage>
                                            {form.formState.errors.age && <p>{form.formState.errors.age.message}</p>}
                                        </FormMessage>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <FormField
                                control={form.control}
                                name="terms"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 ">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel>
                                                Aceptar los <Link className="underline" href='/terminos'>términos y condiciones</Link>.
                                            </FormLabel>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Button disabled={loading} className="w-full bg-gradient-to-r from-sky-400 to-blue-500 dark:from-sky-500 dark:to-blue-600 dark:text-white dark:hover:from-sky-600 dark:hover:to-blue-700" type="submit">
                            {loading ? 'Publicando...' : 'Publicar empleo'}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
