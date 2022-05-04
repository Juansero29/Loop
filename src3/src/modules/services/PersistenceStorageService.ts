import { Session } from "../models/Session";
import { IsNull, Not, DataSource } from "typeorm";
import { AppEntity } from "../models/AppEntity";

import { makeInjector, DependencyInjector, HookTuple, useInjectorHook } from '@mindspace-io/react';

export class PersistenceStorageService {

  isInitialized: boolean  = false;
  dataSource!: DataSource;

  async initialize() {

    // #11 - trying to set the database path at creation
    //https://github.com/typeorm/typeorm/issues/6854 -> not possible to use with web browser?
    // https://github.com/typeorm/typeorm/issues/2009 -> seems like a way

    // #11 - log database location?
    // https://github.com/storesafe/cordova-sqlite-storage
    // https://github.com/typeorm/typeorm/issues/798

    this.dataSource = new DataSource({
      type: "sqlite",
      database: `data`,
      entities: [Session],
      synchronize: true,
    });

    this.dataSource.initialize().then((initializedDataSource) => {
    }).catch((error) => console.log(error))
    
    this.isInitialized = true;



    // console.log(this.connection.driver.)
  }

  async upsert(entity: AppEntity) {
    await this.initializeIfNeeded()

    await this.dataSource.manager
      .save(entity)
      .catch((error) => console.log(error));
  }

  async deletSessionById(id: string) {
    await this.initializeIfNeeded()

    await this.dataSource.manager
      .delete(Session, id)
      .catch((error) => console.log(error));
  }

  async findSessionById(id: string): Promise<Session | null> {
    await this.initializeIfNeeded()
    return this.dataSource.manager.findOne(Session, {where: [{ id : id }]});
  }

  async getOngoingSession(): Promise<Session | null> {
    await this.initializeIfNeeded()

    return this.dataSource.manager.findOne(Session, { where: { endDate: IsNull(), startDate: Not(IsNull())} });
  }

  async retriveAllSessions(): Promise<Array<Session>> {
    await this.initializeIfNeeded()

    return this.dataSource.manager.find(Session);
  }

  private async initializeIfNeeded() {
    if(!this.isInitialized) await this.initialize();
  }
}

export const injector: DependencyInjector = makeInjector([
  { provide: PersistenceStorageService, useClass: PersistenceStorageService },
]);

export function usePersistenceHook(token: any): HookTuple<PersistenceStorageService, DependencyInjector> {
  return useInjectorHook(token, injector);
}