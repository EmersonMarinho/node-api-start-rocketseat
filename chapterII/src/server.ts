import express, { request, response } from "express";

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: "Hello world Ignite"})
})

app.listen(3333);