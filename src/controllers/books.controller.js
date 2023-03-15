import Book from "../models/Book.js";
import app from "../app.js";

class BooksController{
    static findAll = async (req, res) => {
        const list = await Book.find({})
        res.json(list)
    }
    static findById = async (req, res) => {
        const {id} = req.params;
        try{
            const book = await Book.findById(id).exec()
            res.json(book)
        }catch (e){
            res.status(404).send({message: `Cant find book with id: ${id}`})
        }
    }

    static save = async (req, res) => {
        try{
            let book = await Book.create(req.body)
            res.status(201).json(book);
        }catch (e){
            res.status(500).send({message: `${e.message} - Failed to create new book`});
        }
    }
    static delete = async (req, res) =>{
        const {id} = req.params;
        try{
            await Book.findByIdAndDelete(id)
            res.status(204).send('Removed successfully');
        }catch (e){
            res.status(500).send({message: `${e.message} - Failed to delete book: ${id}`});
        }

    }

    static update = async (req, res) => {
        const {id} = req.params;
        try{
            await Book.findByIdAndUpdate(id, {$set: req.body})
            res.send({message: 'Updated successfully.'})
        }catch (e) {
            res.status(500).send({message: `${e.message} - Failed to updated book ${id}`})
        }
    }
}
export default BooksController;
