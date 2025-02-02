import { NextFunction, Request, Response } from "express";
import { ZodType } from "zod";

export const validate = (schema:ZodType<any>) => (req:Request,res:Response,next:NextFunction) => {
    try {
        schema.parse({
            ...req.body
        })

        next();
    } catch (error) {
         res.status(400).json({
            success:false,
            message:'Bad request',
            error:error,
            data:{}
        })
    }
}