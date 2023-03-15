import Publisher from "../models/Publisher.js";

class PublishersController{
    static findAll = async (req, res) => {
        const list = await Publisher.find({})
        res.json(list)
    }
    static findById = async (req, res) => {
        const {id} = req.params;
        try{
            const publisher = await Publisher.findById(id)
            res.json(publisher)
        }catch (e){
            res.status(404).send({message: `Cant find publisher with id: ${id}`})
        }
    }

    static save = async (req, res) => {
        try{
            let publisher = await Publisher.create(req.body)
            res.status(201).json(publisher);
        }catch (e){
            res.status(500).send({message: `${e.message} - Failed to create new publisher`});
        }
    }
    static delete = async (req, res) =>{
        const {id} = req.params;
        try{
            await Publisher.findByIdAndDelete(id)
            res.status(204).send('Removed successfully');
        }catch (e){
            res.status(500).send({message: `${e.message} - Failed to delete publisher: ${id}`});
        }

    }

    static update = async (req, res) => {
        const {id} = req.params;
        try{
            await Publisher.findByIdAndUpdate(id, {$set: req.body})
            res.send({message: 'Updated successfully.'})
        }catch (e) {
            res.status(500).send({message: `${e.message} - Failed to updated publisher ${id}`})
        }
    }
}
export default PublishersController;
