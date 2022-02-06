import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
import { Session } from "../models/Session";

export class PersistenceService {
  database!: SQLiteObject;

  executeQuery(query: string) {}

  initialize() {
    try {
      SQLite.create({
        name: "data.db",
        location: "default",
      }).then(async (db: SQLiteObject) => {
        try {
          const create = await db.executeSql(
            "CREATE TABLE IF NOT EXISTS Sessions(id TEXT PRIMARY KEY, createdAt TEXT, modifiedAt TEXT, createdBy TEXT, startDate TEXT, endDate TEXT, duration TEXT)",
            []
          );
          await console.log("Table created/exists. Msg: ", create);
          const insert = await db.executeSql(
            "INSERT INTO Sessions (id, createdAt, modifiedAt, createdBy, startDate, endDate, duration) values (?, ?, ?, ?, ?, ?, ?)",
            ["TEST", "TEST", "TEST", "TEST", "TEST", "TEST", "TEST"]
          );
          await console.log("Inserted DATA: ", insert);
        } catch (e) {
          console.log("SQL error: ", e);
        }
      });
    } catch (e) {
      console.log("please use a device: ", e);
    }
  }

  retriveA11Sessions(): Array<Session> {
    return new Array<Session>();
  }
}
