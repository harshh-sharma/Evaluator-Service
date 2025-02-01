"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serverConfig_1 = __importDefault(require("./config/serverConfig"));
const routes_1 = __importDefault(require("./routes"));
const SampleWorker_1 = __importDefault(require("./workers/SampleWorker"));
const sampleQueueProducer_1 = __importDefault(require("./producers/sampleQueueProducer"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', routes_1.default);
app.listen(serverConfig_1.default.PORT, () => {
    console.log(`server successfully running on ${serverConfig_1.default.PORT}`);
    (0, SampleWorker_1.default)('SampleQueue');
    (0, sampleQueueProducer_1.default)('SampleQueue', {
        Designation: 'Junior Software Engineer'
    });
    (0, sampleQueueProducer_1.default)('SampleQueue', {
        Desgination: 'Quality Engineer',
        CompanyName: 'TCS'
    });
});
