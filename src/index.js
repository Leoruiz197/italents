require('dotenv').config();
const express = require("express");
const cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();

const docs = require('./routes/docs');
const carrinho = require('./routes/carrinho');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send({ message:"hello world" });
});

app.use('/docs', docs);
app.use('/carrinho', carrinho);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})