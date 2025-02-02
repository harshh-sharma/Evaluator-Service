import { Request, Response } from "express";
import { CreateSubmissionDto } from "../dtos/CreateSubmissionDto";

export const submission = (req: Request, res: Response) => {
  try {
    const data = req.body as CreateSubmissionDto;

    res.status(200).json({
      success: true,
      message: "successfully submitted submission",
      data: {
        ...data,
      },
      error: {},
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
      error: err,
      data: {},
    });
  }
};
