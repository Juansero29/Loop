import { AppEntity } from "./AppEntity";
import { Duration } from "moment";

import { Entity, Column } from "typeorm";

@Entity()
export class Session extends AppEntity {
  @Column()
  startDate!: Date;
  @Column()
  endDate!: Date;
  @Column()
  duration!: Duration;
}
