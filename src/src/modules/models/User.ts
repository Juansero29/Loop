import { Entity, Column } from "typeorm";
import { AppEntity } from "./AppEntity";


@Entity()
export class User extends AppEntity {
    @Column("text")
    name!: string
}
