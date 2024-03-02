import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Repair{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    mechanicId: number

    @Column()
    truckId: number

    @Column()
    repairTime: number
}