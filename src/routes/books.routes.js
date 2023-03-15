import express from "express";
import BooksController from "../controllers/books.controller.js";


const urlBase = '/books'

const router = express.Router()
router
    .get(urlBase, BooksController.findAll)
    .get(`${urlBase}/search`, BooksController.findByEditor)
    .get(`${urlBase}/:id`, BooksController.findById)
    .delete(`${urlBase}/:id`, BooksController.delete)
    .post(urlBase, BooksController.save)
    .put(`${urlBase}/:id`, BooksController.update)

export default router