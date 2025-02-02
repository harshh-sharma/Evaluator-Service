import { string, z } from "zod";

export type CreateSubmissionDto = z.infer<typeof createSubmissionZodSchema>;

export const createSubmissionZodSchema = z.object({
    userId:string(),
    problemId:string(),
    code:string(),
    language:string()
})