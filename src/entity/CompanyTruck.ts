import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class CompanyTruck{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    companyId: number

    @Column()
    truckId: number
}