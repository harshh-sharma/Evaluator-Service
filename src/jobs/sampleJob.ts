import { Job } from "bullmq";
import IJob from "../types/bullMqJobDefination";

export default class SampleJob implements IJob{
    name:string;
    payload: Record<string, unknown>;
    
    constructor(payload: Record<string,unknown>){
        this.name = this.constructor.name,
        this.payload = payload
    }

    handle = (job?:Job) => {
        console.log('Handler of the job called');
        if(job){
            console.log(job?.id,job?.data,job?.name);
            
        }
    };

    failed = (Job?:Job) => {
      console.log('Job Failed');
      if(Job){
        console.log(Job.id);
        
      }
    };
}