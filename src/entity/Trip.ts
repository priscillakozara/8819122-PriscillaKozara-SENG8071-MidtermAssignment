import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Trip{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    routeId: number

    @Column()
    truckId: number

    @Column()
    shipmentNumber: number
}