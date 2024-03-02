import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Shipment{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    driverId1: number

    @Column()
    driverId2: number

    @Column()
    customerId: number

    @Column()
    tripId: number

    @Column()
    weight: number

    @Column()
    value: number
}