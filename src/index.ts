import express from "express";
import serverConfig from "./config/serverConfig";
import apiRouter from "./routes";
import sampleWorker from "./workers/SampleWorker";
import sampleQueueProducer from "./producers/sampleQueueProducer";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',apiRouter);

app.listen(serverConfig.PORT,() => {
    console.log(`server successfully running on ${serverConfig.PORT}`);
    
    sampleWorker('SampleQueue');

    sampleQueueProducer('SampleQueue',{
        Designation:'Junior Software Engineer'
    })

    sampleQueueProducer('SampleQueue',{
        Desgination: 'Quality Engineer',
        CompanyName: 'TCS'
    })
})