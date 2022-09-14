require("dotenv").config();
const jwt = require("jsonwebtoken");
const { findUsuarioByIdService } = require("../services/usuario");

module.exports = async (req, res, next) => {
  try{
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).send({ message: "O token não foi informado!" });
    }

    const parts = authHeader.split(" "); // ["Bearer", "<token>"]

    if (parts.length !== 2) {
      return res.status(401).send({ message: "Token inválido!" });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      return res.status(401).send({ message: "Token malformatado!" });
    }

    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      
      const user = await findUsuarioByIdService(decoded.id);
      if (err || !user || !user.id) {
        return res.status(401).send({ message: "Token inválido!" });
      }

      req.userId = user.id;

      return next();
    });
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};