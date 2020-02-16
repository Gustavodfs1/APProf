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
            coordinates: [longitude, latitude]
          },
          $maxDistance: 1000000
        }
      }
    });
    return response.json(profs);
  }
};
