import "reflect-metadata"
import { DataSource } from "typeorm"
import { Employee } from "./entity/Employee"
import { Brand } from "./entity/Brand"
import { City } from "./entity/City"
import { Company } from "./entity/Company"
import { CompanyTruck } from "./entity/CompanyTruck"
import { Customer } from "./entity/Customer"
import { Driver } from "./entity/Driver"
import { Mechanic } from "./entity/Mechanic"
import { Repair } from "./entity/Repair"
import { Route } from "./entity/Route"
import { Shipment } from "./entity/Shipment"
import { Trip } from "./entity/Trip"
import { Truck } from "./entity/Truck"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "midtermdatabase",
    database: "rtfdatabase",
    synchronize: true,
    logging: false,
    entities: [Brand, City, Company, CompanyTruck, Customer, Driver, Employee, Mechanic, Repair, Route, Shipment, Trip, Truck],
    migrations: [],
    subscribers: [],
})