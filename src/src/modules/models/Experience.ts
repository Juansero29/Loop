import { Entity, Column } from "typeorm";
import { AppEntity } from "./AppEntity";


@Entity()
export class Experience extends AppEntity {
    @Column("text")
    name!: string

    @Column("text")
    experiencedAt!: Date
}
