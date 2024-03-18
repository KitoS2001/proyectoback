import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'usuarios'})
export class Auth {
    @PrimaryGeneratedColumn()
    id_usuario:number
    @Column()
    nombre:string
    @Column({unique:true})
    email:string
    @Column()
    apellidop:string
    @Column()
    apellidom:string
    @Column()
    sexo:string
    @Column({ type: "date", nullable: true })
    fecha:Date | null;
    @Column({unique:true})
    nombreu:string
    @Column()
    contrasena:string
    @Column()
    telefono: string
    @Column()
    pregunta:string
    @Column()
    respuesta:string

    @Column({nullable:true})
    intentos?: number | null
}

