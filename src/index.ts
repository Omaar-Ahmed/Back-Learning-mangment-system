<<<<<<< HEAD
import express, { Express } from "express"
import bootstarp from "./bootstrap";
import dotenv from 'dotenv';
import * as dynamoose from 'dynamoose';


dotenv.config();
const app = express()
const port = process.env.port || 5000;

bootstarp(app, express)


const isProduction = process.env.Node_ENV === "production"
if (!isProduction) {
    dynamoose.aws.ddb.local();

    app.listen(port, () => {
        console.log(
            `Server is running on Port ${port} `
        )
    })
}



=======
import express, { Express } from "express"
import bootstarp from "./bootstrap";
import dotenv from 'dotenv';
import * as dynamoose from 'dynamoose';


dotenv.config();
const app = express()
const port = process.env.port || 5000;

bootstarp(app, express)


const isProduction = process.env.Node_ENV === "production"
if (!isProduction) {
    dynamoose.aws.ddb.local();

    app.listen(port, () => {
        console.log(
            `Server is running on Port ${port} `
        )
    })
}



>>>>>>> c0c7f752c4912839c4b38841812e7130e589ff79
