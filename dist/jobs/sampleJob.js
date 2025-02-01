"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SampleJob {
    constructor(payload) {
        this.handle = (job) => {
            console.log('Handler of the job called');
            if (job) {
                console.log(job === null || job === void 0 ? void 0 : job.id, job === null || job === void 0 ? void 0 : job.data, job === null || job === void 0 ? void 0 : job.name);
            }
        };
        this.failed = (Job) => {
            console.log('Job Failed');
            if (Job) {
                console.log(Job.id);
            }
        };
        this.name = this.constructor.name,
            this.payload = payload;
    }
}
exports.default = SampleJob;
