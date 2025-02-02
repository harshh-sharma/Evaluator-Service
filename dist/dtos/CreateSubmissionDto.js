"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubmissionZodSchema = void 0;
const zod_1 = require("zod");
exports.createSubmissionZodSchema = zod_1.z.object({
    userId: (0, zod_1.string)(),
    problemId: (0, zod_1.string)(),
    code: (0, zod_1.string)(),
    language: (0, zod_1.string)()
});
