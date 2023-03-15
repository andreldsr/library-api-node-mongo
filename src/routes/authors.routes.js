import express from "express";
import AuthorsController from "../controllers/authors.controller.js";


const urlBase = '/authors'

const router = express.Router()
router
    .get(urlBase, AuthorsController.findAll)
    .get(`${urlBase}/:id`,AuthorsController.findById)
    .delete(`${urlBase}/:id`, AuthorsController.delete)
    .post(urlBase, AuthorsController.save)
    .put(`${urlBase}/:id`, AuthorsController.update)

export default router