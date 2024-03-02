import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Mechanic{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    employeeId: number

    @Column()
    brandId: number
}