export class Education {
    id?: number;
    tituloE: string;
    institucionE: string;
    lugarE: string;
    anoE: string;
    logoE: string;
    

    constructor(tituloE: string, institucionE: string, lugarE: string, anoE: string, logoE: string) {
        this.tituloE = tituloE;
        this.institucionE = institucionE;
        this.lugarE = lugarE;
        this.anoE = anoE; 
        this.logoE = logoE; 
    }
}
