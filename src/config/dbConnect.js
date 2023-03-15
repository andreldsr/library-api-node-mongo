import mongoose from "mongoose";

mongoose.connect("mongodb://root:root@localhost:27017/alura-node?authSource=admin")

const conn = mongoose.connection

export default conn
