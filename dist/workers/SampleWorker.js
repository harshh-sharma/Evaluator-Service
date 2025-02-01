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
exports.default = sampleWorker;
const bullmq_1 = require("bullmq");
const sampleJob_1 = __importDefault(require("../jobs/sampleJob"));
const redisConfig_1 = __importDefault(require("../config/redisConfig"));
function sampleWorker(queueName) {
    new bullmq_1.Worker(queueName, (job) => __awaiter(this, void 0, void 0, function* () {
        console.log(job === null || job === void 0 ? void 0 : job.data, job === null || job === void 0 ? void 0 : job.name);
        if ((job === null || job === void 0 ? void 0 : job.name) == 'SampleQueue') {
            const sampleJobInstance = new sampleJob_1.default(job === null || job === void 0 ? void 0 : job.data);
            sampleJobInstance.handle(job);
        }
    }), {
        connection: redisConfig_1.default
    });
}
