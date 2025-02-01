"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const serverConfig_1 = __importDefault(require("./serverConfig"));
const redisConfig = {
    host: serverConfig_1.default.REDIS_HOST,
    port: serverConfig_1.default.REDIS_PORT
};
const redisConnection = new ioredis_1.default(redisConfig);
exports.default = redisConnection;
