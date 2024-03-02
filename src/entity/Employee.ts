import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class  Employee{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    jobTitle: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    seniority: string
}