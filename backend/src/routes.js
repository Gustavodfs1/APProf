const { Router } = require("express");
const ProfController = require("./controllers/ProfController");
const SearchController = require("./controllers/SearchController");
const routes = Router();

routes.post("/profs", ProfController.store);

routes.get("/search", SearchController.index);

module.exports = routes;
