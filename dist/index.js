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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./database"));
const api_1 = __importDefault(require("./api"));
const port = process.env.PORT || 3001;
const db = new database_1.default();
const app = (0, express_1.default)();
app.use("/api", api_1.default);
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield db.getClient();
        yield client.begin();
        const result = yield client.query("SELECT * FROM accounts");
        yield client.commit();
        client.release();
        res.status(200).json(result.rows);
    }
    catch (ex) {
        res.status(500).json({ error: ex.message });
    }
}));
app.listen(port || 3001, () => {
    console.log(`listening on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map