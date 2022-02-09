import { Session } from "../models/Session";
import { createConnection, Connection } from "typeorm";
import { AppEntity } from "../models/AppEntity";

import { makeInjector, DependencyInjector, HookTuple, useInjectorHook } from '@mindspace-io/utils';



export class PersistenceStorageService {
  connection!: Connection;

  async initialize() {
    this.connection = await createConnection({
      type: "sqlite",
      database: "data",
      entities: [Session],
      synchronize: true,
    });
    // log database location ?
    // https://github.com/storesafe/cordova-sqlite-storage
    // https://github.com/typeorm/typeorm/issues/798
    // console.log(this.connection.driver.)
  }

  async upsert(entity: AppEntity) {
    await this.connection.manager
      .save(entity)
      .catch((error) => console.log(error));
  }

  async deletSessionById(id: string) {
    await this.connection.manager
      .delete(Session, id)
      .catch((error) => console.log(error));
  }

  async findSessionById(id: string): Promise<Session | undefined> {
    return this.connection.manager.findOne(Session, id);
  }

  async retriveAllSessions(): Promise<Array<Session>> {
    return this.connection.manager.find(Session);
  }
}

export const injector: DependencyInjector = makeInjector([
  { provide: PersistenceStorageService, useClass: PersistenceStorageService },
]);

export function usePersistenceHook(token: any): HookTuple<PersistenceStorageService, DependencyInjector> {
  return useInjectorHook(token, injector);
}