const mongoose = require("mongoose");
const PointSchema = require("./utils/PointSchema");

const DevSchema = new mongoose.Schema({
  name: { type: String, required: true },
  eMail: { type: String, required: true },
  telefone: { type: String, required: true },
  senha: { type: String, required: true },
  avatar_url: String,
  materias: { type: String },
  bio: { type: String, required: true },
  descricao: { type: String, required: true },
  precoHora: { type: String, required: true },
  individual: String,
  vouatevoce: String,
  taxaDeslocamento: String,

  location: {
    type: PointSchema,
    index: "2dsphere"
  }
});

module.exports = mongoose.model("Prof", DevSchema);
