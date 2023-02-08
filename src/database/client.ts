export default class DatabaseClient {
  _client: any;

  constructor(client) {
    this._client = client;
  }

  async begin() {
    return this._client.query("BEGIN");
  }

  async query(query: string) {
    return this._client.query(query);
  }

  async commit() {
    return this._client.query("COMMIT");
  }

  async rollback() {
    return this._client.query("ROLLBACK");
  }

  release() {
    return this._client.release();
  }
}
