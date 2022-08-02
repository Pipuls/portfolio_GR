export class Jobxp {
    id?: number;
    puestoE: string;
    anoE: string;
    empresaE: string;
    descripcionE: string;

    constructor(puestoE:string, anoE:string, empresaE:string, descripcionE:string) {
        this.puestoE = puestoE;
        this.anoE = anoE;
        this.empresaE = empresaE;
        this.descripcionE = descripcionE;
    }
}
