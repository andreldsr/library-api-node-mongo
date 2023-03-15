import express from "express";
import PublishersController from "../controllers/publishers.controller.js";


const urlBase = '/publishers'

const router = express.Router()
router
    .get(urlBase, PublishersController.findAll)
    .get(`${urlBase}/:id`,PublishersController.findById)
    .delete(`${urlBase}/:id`, PublishersController.delete)
    .post(urlBase, PublishersController.save)
    .put(`${urlBase}/:id`, PublishersController.update)

export default router