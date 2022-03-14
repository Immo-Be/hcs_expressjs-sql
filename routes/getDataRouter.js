const router = require("express").Router();
const getDataController = require("../controllers/getDataController");

router.get("/", getDataController.root);
// router.put("/trip", updateController.trip);
// router.get("/hello", aboutController.hello);

module.exports = router;