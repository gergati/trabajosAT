import { create } from 'zustand'

interface State {
    work: {
        age: number,
        ciudad: string,
        diagnostico: string,
        domicilioLaboral: string,
        email: string,
        lugarTrabajo: string,
        name: string,
        name2: string,
        obraSocial: string,
        phone: string,
        profesional: string,
        terms: boolean,
        type: string,
        userId: string,
        turno: string
    };
    //Methods:
    setWorks: (works: State['work']) => void;
}


export const useWorkStore = create<State>()(
    (set, get) => ({
        work: {
            age: 0,
            ciudad: '',
            diagnostico: '',
            domicilioLaboral: '',
            email: '',
            lugarTrabajo: '',
            name: '',
            name2: '',
            obraSocial: '',
            phone: '',
            profesional: '',
            terms: false,
            type: '',
            userId: '',
            turno: ''
        },
        setWorks: (work) => {
            set({ work })
        }
    })
);

