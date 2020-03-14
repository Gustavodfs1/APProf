const Prof = require("../models/Prof");
const ParseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(Request, response) {
    const { latitude, longitude, materias } = Request.query;

    const materiasArray = ParseStringAsArray(materias);

    const profs = await Prof.find({
      materias: {
        $in: materiasArray
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [latitude, longitude]
          },
          $maxDistance: 100000000
        }
      }
    });
    console.log(profs);
    return response.json(profs);
  }
};
