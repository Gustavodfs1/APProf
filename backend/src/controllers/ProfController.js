const axios = require("axios");
const Prof = require("../models/Prof");
const ParseStringAsArray = require("../utils/parseStringAsArray");
const { findConnections, sendMessage } = require("../websocket");

module.exports = {
  async index(request, response) {
    const profs = await Prof.find();
    return response.json(profs);
  },

  async store(request, response) {
    const {
      name,
      eMail,
      telefone,
      senha,
      avatar_url,
      materias,
      bio,
      precoHora,
      individual,
      vouatevoce,
      taxaDeslocamento,
      latitude,
      longitude
    } = request.body;

    const materiasArray = ParseStringAsArray(materias);

    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };

    prof = await Prof.create({
      name,
      eMail,
      telefone,
      senha,
      avatar_url,
      materias,
      bio,
      precoHora,
      individual,
      vouatevoce,
      taxaDeslocamento,
      location
    });

    const sendSocketMessageTo = findConnections(
      { latitude, longitude },
      materiasArray
    );

    sendMessage(sendSocketMessageTo, "new-prof", prof);

    return response.json(prof);
  }
};
