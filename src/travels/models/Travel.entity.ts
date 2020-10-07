import { User } from "../../users/models/User.entity";
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
    @Column({ type: "double" })
    calcCo2?: number
    @Column({ default: () => "CURRENT_TIMESTAMP" })
    dateCreated?: Date
    @ManyToOne(() => DriverType, driver => driver.travels)
    driverType: DriverType
    @ManyToMany(type => User)
    @JoinTable()
    users: User[]
}