import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:Matheus.l171@cluster0.0ujlzjd.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;