import express from "express";
import booksRoutes from "./books.routes.js";

const route = (app)=>{
    app.get('/', (req, res)=>{
        res.status(200).send('Node course');
    })
    app.use(
        express.json(),
        booksRoutes
    )
}

export default route
