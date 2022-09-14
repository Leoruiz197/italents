
const validaUsuario = (req, res, next) => {
    if(!req.body.nome){
        return res.status(400).send({ message: "O campo nome deve ser preenchido"});
    }
    if(!req.body.email){
        return res.status(400).send({ message: "O campo email deve ser preenchido"});
    }
    if(!req.body.senha){
        return res.status(400).send({ message: "O campo senha deve ser preenchido"});
    }
    if(!req.body.imagem){
        return res.status(400).send({ message: "O campo imagem deve ser preenchido"});
    }
    return next();
} 

const validaProduto = (req, res, next) => {
    if(!req.body.nome){
        return res.status(400).send({ message: "O campo nome deve ser preenchido"});
    }
    if(!req.body.descricao){
        return res.status(400).send({ message: "O campo descricao deve ser preenchido"});
    }
    if(!req.body.precoUni){
        return res.status(400).send({ message: "O campo precoUni deve ser preenchido"});
    }
    if(!req.body.imagem){
        return res.status(400).send({ message: "O campo imagem deve ser preenchido"});
    }
    if(!req.body.codigoBarra){
        return res.status(400).send({ message: "O campo codigoBarra deve ser preenchido"});
    }
    return next();
}

module.exports = {
    validaUsuario,
    validaProduto
}