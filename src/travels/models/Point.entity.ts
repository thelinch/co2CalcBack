import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
enum type {
    start,
    end
}

@Entity()
export class Point {
    @PrimaryGeneratedColumn()
    id: number
    @Column({ type: "enum", enum: ["start", "end"] })
    type: string
    @Column()
    name!: string
    @Column({ type: "double" })
    lat: number
    @Column({ type: "double" })
    lng: number
}