"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const auth_1 = __importDefault(require("./routes/auth"));
const dbConnection_1 = require("./lib/dbConnection");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/auth', auth_1.default);
app.get('/', (req, res) => {
    res.send("Welcome to Emotorad Dashboard!");
});
app.listen(8000, () => {
    (0, dbConnection_1.connectToDB)();
    console.log('Server is running on port 8000');
});
//# sourceMappingURL=server.js.map