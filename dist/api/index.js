"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = __importDefault(require("./login"));
const register_1 = __importDefault(require("./register"));
const router = (0, express_1.Router)();
router.use("/login", login_1.default);
router.use("/register", register_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map