import { Session } from "./Session";
import { Pause } from "./Pause";
import { Duration } from "moment";
import { Entity, Column, OneToMany } from "typeorm";


@Entity()
export class LoopSession extends Session {

    @Column("text")
    totalWornDuration!: Duration;

    @OneToMany(() => Pause, (pause) => pause.session)
    pauses!: Pause[]
}
