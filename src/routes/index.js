import express from "express";
import booksRoutes from "./books.routes.js";
import authorsRoutes from "./authors.routes.js";
import publishersRoutes from "./publishers.routes.js";

const route = (app) => {
    app.get('/', (req, res) => {
        res.status(200).send('Node course');
    })
    app.use(
        express.json(),
        booksRoutes,
        authorsRoutes,
        publishersRoutes
    )
}

export default route
