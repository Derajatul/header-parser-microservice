const { Router } = require("express");
const { getHome } = require("../controllers/home.controller");
const { getWhoami } = require("../controllers/whoami.controller");

const router = Router();

router.get("/", getHome);
router.get("/api/whoami", getWhoami);

module.exports = router;
