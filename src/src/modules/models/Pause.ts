import { Session } from "./Session";
import { Entity, ManyToOne, Relation } from "typeorm";
import { LoopSession } from "./LoopSession";


@Entity()
export class Pause extends Session {

    @ManyToOne(() => LoopSession, (session) => session.pauses)
    session!: Relation<LoopSession>;
}
