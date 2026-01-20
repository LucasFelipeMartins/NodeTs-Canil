import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRouter from "./routes";

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('view', path.join(__dirname, 'view'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRouter);

server.use((req, res) => {
    res.send("Pagina não encontrada");
})

server.listen(process.env.PORT, () => {

    console.log("servidor rodando em http://localhost:3000")

});