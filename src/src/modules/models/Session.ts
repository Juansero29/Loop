import { Entity } from "./Entity";
import { Duration } from "moment";

export class Session extends Entity {

    startDate!: Date;
    endDate!: Date;
    duration!: Duration;

}
