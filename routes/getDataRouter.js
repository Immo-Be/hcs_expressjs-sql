const router = require("express").Router();
const getDataController = require("../controllers/getDataController");

router.get("/", getDataController.root);

module.exports = router;