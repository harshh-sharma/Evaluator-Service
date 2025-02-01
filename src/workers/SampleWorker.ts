import { Job, Worker } from "bullmq";
import SampleJob from "../jobs/sampleJob";
import redisConnection from "../config/redisConfig";
export default function sampleWorker(queueName:string){
   new Worker(
    queueName,
    async(job:Job) => {
        console.log(job?.data,job?.name);
        
        if(job?.name == 'SampleQueue'){
            const sampleJobInstance = new SampleJob(job?.data);
            sampleJobInstance.handle(job);
        }
    },
    {
        connection:redisConnection
    }
   )
}