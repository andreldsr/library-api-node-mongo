import Book from "../models/Book.js";

class BooksController{
    static findAll = async (req, res) => {
        const list = await Book.find({}).populate("author").exec()
        res.json(list)
    }
    static findById = async (req, res) => {
        const {id} = req.params;
        try{
            const book = await Book.findById(id).populate("author").exec()
            res.json(book)
        }catch (e){
            res.status(404).send({message: `${e.message} - Cant find book with id: ${id}`})
        }
    }

    static findByEditor = async (req, res) => {
        const {editor} = req.query;
        try {
            const books = await Book.find({editor: editor}).populate("author").exec();
            res.json(books)
        }catch (e) {
            res.status(500).send({message: `${e.message} - Cant find book with editor: ${editor}`})
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
