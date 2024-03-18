export class CreateAuthDto {
    id_usuario:number
    nombre:string
    email:string
    apellidop:string
    apellidom:string
    sexo:string
    fecha?:Date | null;
    nombreu:string
    contrasena:string
    telefono: string
    pregunta:string
    respuesta:string
}
