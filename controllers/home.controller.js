const path = require("path");

function getHome(req, res) {
  res.sendFile(path.join(__dirname, "../views/index.html"));
}

module.exports = { getHome };
