import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm"; // Agregar OneToMany

@Entity({ name: 'usuarios' })
export class Auth {
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column()
    nombre: string;

    @Column({ unique: true })
    email: string;

    @Column()
    apellidop: string;

    @Column()
    apellidom: string;

    @Column()
    sexo: string;

    @Column({ type: "date", nullable: true })
    fecha: Date | null;

    @Column({ unique: true })
    nombreu: string;

    @Column()
    contrasena: string;

    @Column()
    telefono: string;

    @Column()
    pregunta: string;

    @Column()
    respuesta: string;

    @Column({ nullable: true })
    intentos?: number | null;

    @OneToMany(() => Cita, cita => cita.usuario)
    citas: Cita[];
}

@Entity({ name: 'citas' })
export class Cita {
    @PrimaryGeneratedColumn()
    id_cita: number;

    @Column({ type: "date" })
    fecha: Date;

    @Column({ type: "time" })
    hora: string;

    @Column()
    motivo: string;

    @Column()
    dentista: string;

    @ManyToOne(() => Auth, auth => auth.citas)
    @JoinColumn({ name: "id_usuario" })
    usuario: Auth;
}
