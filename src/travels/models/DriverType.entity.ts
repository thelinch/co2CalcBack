import { Column, Double, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Travel } from "./Travel.entity";

@Entity()
export class DriverType {
    @PrimaryColumn("uuid")
    id: string
    @Column()
    name?: string
    @Column({ type: "double" })
    quantityCo2ForKilometer?: number
    @Column()
    icon?: string
    @OneToMany(() => Travel, travel => travel.driverType)
    travels?: Travel[]
}