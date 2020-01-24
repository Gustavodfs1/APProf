const Dev = require("../models/Dev");
const ParseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(Request, response) {
    const { latitude, longitude, techs } = Request.query;

    const techArray = ParseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techArray
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
    return response.json(devs);
  }
};
