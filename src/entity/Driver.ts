import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Driver{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    employeeId: number

    @Column()
    category: string
}