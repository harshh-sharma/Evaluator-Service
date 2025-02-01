import express from "express";
import serverConfig from "./config/serverConfig";
import apiRouter from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',apiRouter);

app.listen(serverConfig.PORT,() => {
    console.log(`server successfully running on ${serverConfig.PORT}`);
})