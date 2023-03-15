import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    id: {type: String},
    name: {type: String, required: true},
    nationality: {type: String, required: true}
},{
    versionKey: false
})

const Author = mongoose.model('authors', authorSchema)

export default Author
