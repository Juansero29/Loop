import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";

/* 

Getting error:

Uncaught ColumnTypeUndefinedError: Column type for AppEntity#createdBy 
is not defined and cannot be guessed. Make sure you have turned on an "emitDecoratorMetadata": true 
option in tsconfig.json. Also make sure you have imported "reflect-metadata" on top of the main entry 
file in your application (before any entity imported).If you are using JavaScript instead of TypeScript
you must explicitly provide a column type.

Solutions:
https://github.com/typeorm/typeorm/issues/2897/ 


Only one that worked for me:
- Explicitly declare types on decorators.

*/
@Entity()
export class AppEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @CreateDateColumn("text")
  createdAt!: Date;

  @UpdateDateColumn("text")
  modifiedAt!: Date;

  @Column("text")
  createdBy!: string;
}
