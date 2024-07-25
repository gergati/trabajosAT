// types.ts (puedes nombrar este archivo como prefieras)
export interface WorkItem {
    profesional: string;
    user: {
        name: string;
        email: string;
    };
    createdAt?: string;
    ciudad: string;
    domicilioLaboral: string;
    lugarTrabajo: string;
    diagnostico: string;
    obraSocial: string;
    type: string;
    name2: string;
    age: number;
}
