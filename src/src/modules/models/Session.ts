import { AppEntity } from "./AppEntity";
import { Duration } from "moment";

import { Entity, Column } from "typeorm";



@Entity()
export class Session extends AppEntity {
  @Column("text")
  startDate!: Date;
  @Column("text")
  endDate!: Date;
  @Column("text")
  duration!: Duration;
}
