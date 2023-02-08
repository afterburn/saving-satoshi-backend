import { Pool } from "pg";

import DatabaseClient from "./client";

export default class Database {
  pool: any;

  constructor() {
    this.pool = new Pool();
  }

  async getClient() {
    const pgClient = await this.pool.connect();

    return new DatabaseClient(pgClient);
  }
}
