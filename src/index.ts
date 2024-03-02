import { AppDataSource } from "./data-source"
import { Brand } from "./entity/Brand"
import { City } from "./entity/City"
import { Company } from "./entity/Company"
import { CompanyTruck } from "./entity/CompanyTruck"
import { Customer } from "./entity/Customer"
import { Driver } from "./entity/Driver"
import { Employee } from "./entity/Employee"
import { Mechanic } from "./entity/Mechanic"
import { Repair } from "./entity/Repair"
import { Route } from "./entity/Route"
import { Shipment } from "./entity/Shipment"
import { Trip } from "./entity/Trip"
import { Truck } from "./entity/Truck"

AppDataSource.initialize().then(async () => {

    //Database Creation - Inserting first brand
    console.log("Inserting a new brand into the database...")
    const brand = new Brand()
    brand.name = "Volvo"
    await AppDataSource.manager.save(brand)
    console.log("Created a new brand with id: " + brand.id)

    console.log("Loading brands from the database...")
    const brands = await AppDataSource.manager.find(Brand)
    console.log("Loaded brands: ", brands)

    //Database Creation - Inserting first city
    console.log("Inserting a new city into the database...")
    const city = new City()
    city.name = "Toronto"
    await AppDataSource.manager.save(city)
    console.log("Created a new city with id: " + city.id)

    console.log("Loading cities from the database...")
    const cities = await AppDataSource.manager.find(City)
    console.log("Loaded cities: ", cities)

    //Database Creation - Inserting first company
    console.log("Inserting a new company into the database...")
    const company = new Company()
    company.name = "DHL Canada"
    await AppDataSource.manager.save(company)
    console.log("Created a new company with id: " + company.id)

    console.log("Loading companies from the database...")
    const companies = await AppDataSource.manager.find(Company)
    console.log("Loaded companies: ", companies)

    //Database Creation - Inserting first company-truck relation
    console.log("Inserting a new company-truck relation into the database...")
    const companytruck = new CompanyTruck()
    companytruck.companyId = 1
    companytruck.truckId = 1
    await AppDataSource.manager.save(companytruck)
    console.log("Created a new company-truck relation with id: " + companytruck.id)

    console.log("Loading companies-trucks relation from the database...")
    const companytrucks = await AppDataSource.manager.find(CompanyTruck)
    console.log("Loaded company-trucks relation: ", companytrucks)

    //Database Creation - Inserting first customer
    console.log("Inserting a new customer into the database...")
    const customer = new Customer()
    customer.name = "Joseph"
    customer.address = "1103-150 University Avenue, Waterloo, ON N2L 3E3"
    customer.phone1 = 1234567890
    customer.phone2 = 1876543201
    await AppDataSource.manager.save(customer)
    console.log("Created a new customer with id: " + customer.id)

    console.log("Loading customers from the database...")
    const customers = await AppDataSource.manager.find(Customer)
    console.log("Loaded customers: ", customers)

    //Database Creation - Inserting first driver
    console.log("Inserting a new driver into the database...")
    const driver = new Driver()
    driver.employeeId = 1
    driver.category = "E"
    await AppDataSource.manager.save(driver)
    console.log("Created a new driver with id: " + driver.id)

    console.log("Loading drivers from the database...")
    const drivers = await AppDataSource.manager.find(Driver)
    console.log("Loaded drivers: ", drivers)
    
    //Database Creation - Inserting first employee
    console.log("Inserting a new employee into the database...")
    const employee = new Employee()
    employee.jobTitle = "Mechanic"
    employee.firstName = "John"
    employee.lastName = "Wick"
    employee.seniority = "Senior"
    await AppDataSource.manager.save(employee)
    console.log("Created a new employee with id: " + employee.id)

    console.log("Loading employees from the database...")
    const employees = await AppDataSource.manager.find(Employee)
    console.log("Loaded employees: ", employees)

    //Database Creation - Inserting first mechanic
    console.log("Inserting a new mechanic into the database...")
    const mechanic = new Mechanic()
    mechanic.employeeId = 1
    mechanic.brandId = 1
    await AppDataSource.manager.save(mechanic)
    console.log("Created a new mechanic with id: " + mechanic.id)

    console.log("Loading mechanics from the database...")
    const mechanics = await AppDataSource.manager.find(Mechanic)
    console.log("Loaded mechanics: ", mechanics)

    //Database Creation - Inserting first repair
    console.log("Inserting a new repair into the database...")
    const repair = new Repair()
    repair.mechanicId = 1
    repair.truckId = 1
    repair.repairTime = 8
    await AppDataSource.manager.save(repair)
    console.log("Created a new repair with id: " + repair.id)

    console.log("Loading repairs from the database...")
    const repairs = await AppDataSource.manager.find(Repair)
    console.log("Loaded repairs: ", repairs)

    //Database Creation - Inserting first route
    console.log("Inserting a new route into the database...")
    const route = new Route()
    route.originId = 1
    route.destinationId = 2
    await AppDataSource.manager.save(route)
    console.log("Created a new route with id: " + route.id)

    console.log("Loading routes from the database...")
    const routes = await AppDataSource.manager.find(Route)
    console.log("Loaded routes: ", routes)

    //Database Creation - Inserting first shipment
    console.log("Inserting a new shipment into the database...")
    const shipment = new Shipment()
    shipment.driverId1 = 1
    shipment.driverId2 = 2
    shipment.customerId = 1
    shipment.tripId = 1
    shipment.weight = 5000
    shipment.value = 50000
    await AppDataSource.manager.save(shipment)
    console.log("Created a new shipment with id: " + shipment.id)

    console.log("Loading shipments from the database...")
    const shipments = await AppDataSource.manager.find(Shipment)
    console.log("Loaded shipments: ", shipments)

    //Database Creation - Inserting first trip
    console.log("Inserting a new trip into the database...")
    const trip = new Trip()
    trip.routeId = 1
    trip.truckId = 1
    trip.shipmentNumber = 1
    await AppDataSource.manager.save(trip)
    console.log("Created a new trip with id: " + trip.id)

    console.log("Loading trips from the database...")
    const trips = await AppDataSource.manager.find(Trip)
    console.log("Loaded trips: ", trips)

    //Database Creation - Inserting truck trip
    console.log("Inserting a new truck into the database...")
    const truck = new Truck()
    truck.brandId = 1
    truck.payload = 10000
    truck.capacity = 8500
    truck.year = 2019
    truck.repairNumber = 3
    await AppDataSource.manager.save(truck)
    console.log("Created a new truck with id: " + truck.id)

    console.log("Loading trucks from the database...")
    const trucks = await AppDataSource.manager.find(Truck)
    console.log("Loaded trucks: ", trucks)

}).catch(error => console.log(error))
