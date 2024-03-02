import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Customer{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    address: string

    @Column()
    phone1: number

    @Column()
    phone2: number
}