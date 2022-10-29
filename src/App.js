import express from 'express'
import db from './config/dbConnect.js';
import routes from './routes/index.js'

db.on("error", console.log.bind(console, 'Error de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
});

const App = express();
App.use(express.json());
routes(App);

export default App