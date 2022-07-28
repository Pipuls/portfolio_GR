export class persona{
    id?: Number;
    nombre: String;
    apellido: String;
    img: String;
    profesion1: String;
    profesion2: String;

    constructor(nombre: String, apellido: String, img: String, profesion1: String, profesion2: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.profesion1 = profesion1;
        this.profesion2 = profesion2;
    }
}