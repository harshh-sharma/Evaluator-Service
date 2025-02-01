import { Request, Response } from "express"

export const pingCheck = (_:Request,res:Response) => {
    res.send('Server is live')
}