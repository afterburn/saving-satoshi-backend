"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class DatabaseClient {
    constructor(client) {
        this._client = client;
    }
    begin() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._client.query("BEGIN");
        });
    }
    query(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._client.query(query);
        });
    }
    commit() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._client.query("COMMIT");
        });
    }
    rollback() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._client.query("ROLLBACK");
        });
    }
    release() {
        return this._client.release();
    }
}
exports.default = DatabaseClient;
//# sourceMappingURL=client.js.map