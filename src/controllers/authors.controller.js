import Author from "../models/Author.js";

class AuthorsController{
    static findAll = async (req, res) => {
        const list = await Author.find({})
        res.json(list)
    }
    static findById = async (req, res) => {
        const {id} = req.params;
        try{
            const author = await Author.findById(id)
            res.json(author)
        }catch (e){
            res.status(404).send({message: `Cant find author with id: ${id}`})
        }
    }

    static save = async (req, res) => {
        try{
            let author = await Author.create(req.body)
            res.status(201).json(author);
        }catch (e){
            res.status(500).send({message: `${e.message} - Failed to create new author`});
        }
    }
    static delete = async (req, res) =>{
        const {id} = req.params;
        try{
            await Author.findByIdAndDelete(id)
            res.status(204).send('Removed successfully');
        }catch (e){
            res.status(500).send({message: `${e.message} - Failed to delete author: ${id}`});
        }

    }

    static update = async (req, res) => {
        const {id} = req.params;
        try{
            await Author.findByIdAndUpdate(id, {$set: req.body})
            res.send({message: 'Updated successfully.'})
        }catch (e) {
            res.status(500).send({message: `${e.message} - Failed to updated author ${id}`})
        }
    }
}
export default AuthorsController;
