import { User } from "src/users/models/User.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { DriverType } from "./DriverType.entity";

@Entity()
export class Travel {
    @PrimaryColumn("uuid")
    id: string
    @Column()
    pointStart: string
    @Column()
    pointEnd: string
    @Column()
    quantityKilometers: number
    @Column()
    calcCo2?: number
    @Column()
    dateCreated?: Date
    @ManyToOne(() => DriverType, driver => driver.travels)
    driverType: DriverType
    @ManyToMany(type => User)
    @JoinTable()
    users: User[]
}