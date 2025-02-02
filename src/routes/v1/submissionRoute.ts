import express from "express";
import { submission } from "../../controllers/submissionController";
import { validate } from "../../vaildator/validateCreateSubmissionRequest";
import { createSubmissionZodSchema } from "../../dtos/CreateSubmissionDto";

const submissionRouter = express.Router();

submissionRouter.post('/',validate(createSubmissionZodSchema),submission);

export default submissionRouter;