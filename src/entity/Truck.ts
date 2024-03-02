import { Entity, PrimaryGeneratedColumn, Column, Decimal128 } from "typeorm"

@Entity()
export class Truck{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    brandId: number

    @Column()
    payload: number

    @Column()
    capacity: number

    @Column()
    year: number

    @Column()
    repairNumber: number
}