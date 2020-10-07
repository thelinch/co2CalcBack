import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Travel } from "./Travel.entity";

@Entity()
export class DriverType {
    @PrimaryColumn("uuid")
    id: string
    @Column()
    name?: string
    @Column()
    quantityCo2ForKilometer?: number
    @OneToMany(() => Travel, travel => travel.driverType)
    travels?: Travel[]
}