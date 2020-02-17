module.exports = function parseStringAsArray(arrayAsString = "") {
  return arrayAsString.split(",").map(materias => materias.trim());
};
