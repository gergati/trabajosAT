
export interface Works {
    name: string;
    name2: string;
    email: string;
    type: "Amparo" | "Sin amparo" | "Amparo en curso";
    phone: string;
    profesional: "acompañante terapeutico";
    lugarTrabajo: "domicilio" | "institucion" | "ambos";
    age: number;
    diagnostico: string;
    createdAt?: Date;
    updatedAt?: Date;
    ciudad: string;
    domicilioLaboral: string;
    obraSocial: string;
    terms: boolean;
    turno: "Turno mañana" | "Turno tarde"
}

