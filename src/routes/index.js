import express  from "express";
import livros from "./livroRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (App) => {
    App.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de node"})
    })

    App.use(
        express.json(),
        livros,
        autores
    )
}
export default routes